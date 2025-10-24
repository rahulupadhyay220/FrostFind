from typing import List, Dict, Any, Optional
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib

from nltk.sentiment.vader import SentimentIntensityAnalyzer
from .preprocessor import preprocess

try:
    sid = SentimentIntensityAnalyzer()
except Exception:
    import nltk
    nltk.download('vader_lexicon')
    from nltk.sentiment.vader import SentimentIntensityAnalyzer
    sid = SentimentIntensityAnalyzer()


def _identity_tokenizer(x):
    return x


def _identity_preprocessor(x):
    return x


class FeatureExtractor:
    def __init__(self, max_features: int = 10000):
        # we expect tokenized input lists; the tokenizer and preprocessor are identity functions
        self.tfidf = TfidfVectorizer(max_features=max_features, tokenizer=_identity_tokenizer, preprocessor=_identity_preprocessor)
        self.fitted = False

    def fit_transform(self, texts: List[List[str]]):
        # texts are pre-tokenized lists; join back for TF-IDF
        docs = [" ".join(t) for t in texts]
        X = self.tfidf.fit_transform(docs)
        self.fitted = True
        return X

    def transform(self, texts: List[List[str]]):
        if not self.fitted:
            raise RuntimeError("FeatureExtractor not fitted")
        docs = [" ".join(t) for t in texts]
        return self.tfidf.transform(docs)

    def save_tfidf(self, path: str):
        joblib.dump(self.tfidf, path)

    def load_tfidf(self, path: str):
        self.tfidf = joblib.load(path)
        self.fitted = True

    def vader_scores(self, raw_texts: List[str]):
        return [sid.polarity_scores(t) for t in raw_texts]

    def extract_authenticity_features(self, raw_texts: List[str], tokenized_texts: List[List[str]], metadata: Optional[List[Dict[str, Any]]] = None):
        # metadata can include helpful fields: helpfulness, verified_purchase (bool), timestamp
        feats = []
        for i, txt in enumerate(raw_texts):
            toks = tokenized_texts[i]
            length = len(txt)
            word_count = len(toks)
            avg_word_len = np.mean([len(w) for w in toks]) if toks else 0
            unique_ratio = len(set(toks)) / (word_count + 1e-9)
            vader = sid.polarity_scores(txt)
            emotional_tone = abs(vader['pos'] - vader['neg'])
            meta = metadata[i] if metadata else {}
            helpfulness = float(meta.get('helpfulness', 0))
            verified = 1.0 if meta.get('verified_purchase') else 0.0
            # placeholder temporal feature
            time_since = meta.get('days_since') or 0.0
            feats.append([
                length, word_count, avg_word_len, unique_ratio,
                vader['neg'], vader['neu'], vader['pos'], vader['compound'], emotional_tone,
                helpfulness, verified, time_since
            ])
        return np.array(feats)

    # Hook: add BERT or sentence-transformer embeddings
    def embed_texts(self, raw_texts: List[str], model_name: str = 'all-MiniLM-L6-v2'):
        try:
            from sentence_transformers import SentenceTransformer
        except Exception as e:
            raise RuntimeError('sentence-transformers not installed; install via requirements or pip') from e
        model = SentenceTransformer(model_name)
        return model.encode(raw_texts, show_progress_bar=False)

    def combine_features(self, raw_texts: List[str], tokenized_texts: List[List[str]], metadata: Optional[List[Dict[str, Any]]] = None, embed_model: Optional[str] = None):
        """Return combined feature matrix: TF-IDF + embeddings (optional) + engineered authenticity features"""
        from scipy.sparse import hstack, csr_matrix

        tfidf_X = None
        if self.fitted:
            tfidf_X = self.transform(tokenized_texts)

        auth_X = self.extract_authenticity_features(raw_texts, tokenized_texts, metadata)

        parts = []
        if tfidf_X is not None:
            parts.append(tfidf_X)

        if embed_model:
            emb = self.embed_texts(raw_texts, model_name=embed_model)
            # convert to sparse
            emb_sparse = csr_matrix(emb)
            parts.append(emb_sparse)

        # auth features as sparse
        parts.append(csr_matrix(auth_X))

        if len(parts) == 1:
            return parts[0]
        return hstack(parts)
