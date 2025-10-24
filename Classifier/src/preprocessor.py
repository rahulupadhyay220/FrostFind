import re
from typing import List, Dict, Tuple

import nltk

# Ensure required NLTK data is available. In production, manage this separately.
nltk_packages = [
    "punkt",
    "stopwords",
    "wordnet",
    "averaged_perceptron_tagger",
    "maxent_ne_chunker",
    "words",
]

for pkg in nltk_packages:
    try:
        nltk.data.find(pkg)
    except Exception:
        nltk.download(pkg)

from nltk.corpus import stopwords
from nltk import word_tokenize, pos_tag, ne_chunk
from nltk.stem import WordNetLemmatizer

STOPWORDS = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()


def clean_text(text: str) -> str:
    text = text or ""
    text = text.lower()
    text = re.sub(r"http\S+", " ", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def tokenize(text: str) -> List[str]:
    return word_tokenize(text)


def remove_stopwords(tokens: List[str]) -> List[str]:
    return [t for t in tokens if t not in STOPWORDS]


def lemmatize(tokens: List[str]) -> List[str]:
    return [lemmatizer.lemmatize(t) for t in tokens]


def preprocess(text: str) -> List[str]:
    """Full preprocessing pipeline: clean -> tokenize -> remove stopwords -> lemmatize"""
    t = clean_text(text)
    toks = tokenize(t)
    toks = remove_stopwords(toks)
    toks = lemmatize(toks)
    return toks


def extract_named_entities(text: str) -> List[Tuple[str, str]]:
    """A lightweight NER using NLTK's ne_chunk. Returns list of (entity, label)."""
    tokens = word_tokenize(text)
    tags = pos_tag(tokens)
    tree = ne_chunk(tags)
    ents = []
    current_ent = []
    current_label = None
    for chunk in tree:
        if hasattr(chunk, 'label'):
            label = chunk.label()
            name = " ".join(c[0] for c in chunk)
            ents.append((name, label))
    return ents
