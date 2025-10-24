from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

from .preprocessor import preprocess
from .features import FeatureExtractor
from .models import AuthenticityModel

app = FastAPI(title='Review Authenticator')


class ReviewIn(BaseModel):
    text: str
    metadata: Optional[dict] = None


class ReviewOut(BaseModel):
    sentiment: dict
    authenticity_score: float
    authenticity_label: int
    entities: List[List[str]]


# Load model and feature extractor on startup (paths configurable)
MODEL_PATH = 'models/svm_authenticity.joblib'
TFIDF_PATH = 'models/tfidf.joblib'
EMBED_MODEL = 'all-MiniLM-L6-v2'  # enable sentence-transformer embeddings

# runtime cache for embedding model and device
_embed_model = None
_embed_device = 'cpu'


@app.on_event('startup')
def load_resources():
    global model, feat_ext, nlp
    feat_ext = FeatureExtractor()
    model = AuthenticityModel()
    # load persisted tfidf
    try:
        feat_ext.load_tfidf(TFIDF_PATH)
        print('Loaded TF-IDF from', TFIDF_PATH)
    except Exception:
        print('No TF-IDF found at', TFIDF_PATH)
    try:
        model.load(MODEL_PATH)
        print('Loaded model from', MODEL_PATH)
    except Exception:
        print('No model found at', MODEL_PATH)
    # load spaCy transformer NER
    try:
        import spacy
        # load sentence-transformer model for embeddings
        try:
            from sentence_transformers import SentenceTransformer
            import torch
            _embed_device = 'cuda' if torch.cuda.is_available() else 'cpu'
            _embed_model = SentenceTransformer(EMBED_MODEL, device=_embed_device)
            print(f'Loaded sentence-transformer {EMBED_MODEL} on {_embed_device}')
        except Exception as e:
            _embed_model = None
            print('sentence-transformers not available or failed to load:', e)
        try:
            nlp = spacy.load('en_core_web_trf')
        except Exception:
            # if model missing, download
            from spacy.cli import download
            download('en_core_web_trf')
            nlp = spacy.load('en_core_web_trf')
        print('Loaded spaCy transformer model for NER')
    except Exception:
        nlp = None
        print('spaCy not available; NER disabled')


def extract_entities_spacy(text: str):
    if not nlp:
        return []
    doc = nlp(text)
    return [(ent.text, ent.label_) for ent in doc.ents]

def ensure_resources():
    """Lazily initialize resources if startup event didn't run (useful for TestClient)."""
    global feat_ext, model, nlp, _embed_model, _embed_device
    try:
        _ = feat_ext  # type: ignore
        return
    except Exception:
        pass
    # call load_resources to initialize
    load_resources()

def embed_texts_batched(texts, batch_size=32):
    """Compute embeddings in batches using the cached sentence-transformer model."""
    if not _embed_model:
        return None
    embs = []
    for i in range(0, len(texts), batch_size):
        batch = texts[i:i+batch_size]
        embs.append(_embed_model.encode(batch, show_progress_bar=False, convert_to_numpy=True))
    import numpy as np
    return np.vstack(embs)


@app.post('/classify', response_model=ReviewOut)
def classify(review: ReviewIn):
    ensure_resources()
    raw = review.text or ''
    toks = preprocess(raw)
    # combine features: use embedding model if configured
    # compute embeddings with cached model (avoid reloading)
    emb = None
    if _embed_model:
        try:
            emb = embed_texts_batched([raw])
        except Exception:
            emb = None
    try:
        X = feat_ext.combine_features([raw], [toks], [review.metadata or {}], embed_model=EMBED_MODEL if emb is None else None)
        # if we computed embeddings already, append them
        if emb is not None:
            from scipy.sparse import hstack, csr_matrix
            X = hstack([X, csr_matrix(emb)])
    except Exception:
        # fallback to auth features only
        X = feat_ext.extract_authenticity_features([raw], [toks], [review.metadata or {}])
    try:
        proba = model.predict_proba(X)[0, 1]
        label = int(proba > 0.5)
    except Exception:
        proba = 0.0
        label = 0
    sent = feat_ext.vader_scores([raw])[0]
    ents = extract_entities_spacy(raw)
    return ReviewOut(sentiment=sent, authenticity_score=float(proba), authenticity_label=label, entities=ents)


@app.post('/batch_classify')
def batch_classify(reviews: List[ReviewIn]):
    ensure_resources()
    raws = [r.text for r in reviews]
    toks = [preprocess(r) for r in raws]
    emb = None
    if _embed_model:
        try:
            emb = embed_texts_batched(raws)
        except Exception:
            emb = None
    try:
        X = feat_ext.combine_features(raws, toks, [r.metadata or {} for r in reviews], embed_model=EMBED_MODEL if emb is None else None)
        if emb is not None:
            from scipy.sparse import hstack, csr_matrix
            X = hstack([X, csr_matrix(emb)])
    except Exception:
        X = feat_ext.extract_authenticity_features(raws, toks, [r.metadata or {} for r in reviews])
    try:
        probs = model.predict_proba(X)[:, 1]
        labels = (probs > 0.5).astype(int).tolist()
    except Exception:
        probs = [0.0] * len(reviews)
        labels = [0] * len(reviews)
    sents = feat_ext.vader_scores(raws)
    ents = [extract_entities_spacy(r) for r in raws]
    return {'results': [{'sentiment': s, 'authenticity_score': float(p), 'label': int(l), 'entities': e} for s, p, l, e in zip(sents, probs, labels, ents)]}
