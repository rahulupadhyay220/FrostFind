Starter project: Review Authenticity & Sentiment Classifier

FrostFind is a Review analyzer hyperlocal search and discovery and multi transectional platform


This repository contains a starter implementation for a review classifier that
performs preprocessing, feature extraction, sentiment analysis, authenticity
scoring (SVM), and a FastAPI microservice for inference. It's intended as a
scalable template for production systems.

Quick start
1. Create a virtualenv and activate it.
2. Install dependencies:

   pip install -r requirements.txt

3. Run training (example):

   python -m src.train --data data/reviews_sample.csv --model-out models/svm_authenticity.joblib

4. Run API:

   uvicorn src.api:app --reload --port 8000

Files added
- `src/preprocessor.py`: NLTK-based preprocessing, NER helper
- `src/features.py`: TF-IDF, VADER, embedding hooks
- `src/models.py`: SVM trainer, evaluation, persistence
- `src/train.py`: CLI for training and evaluation
- `src/api.py`: FastAPI microservice
- `src/utils.py`: scalability & storage helper snippets
- `requirements.txt`: Python deps

Notes
- BERT embedding support requires transformers + a GPU for fast encoding; the
  code includes a hook to switch to sentence-transformers.
- For large-scale processing, integrate the Dask example in `src/utils.py`.
