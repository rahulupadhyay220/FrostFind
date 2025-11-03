import argparse
import os
import pandas as pd

from .preprocessor import preprocess
from .features import FeatureExtractor
from .models import AuthenticityModel


def generate_synthetic(n=500):
    # tiny synthetic generator: mixture of authentic and suspicious patterns
    import random
    rows = []
    for i in range(n):
        if random.random() > 0.5:
            text = 'I loved this product. Highly recommend. Verified purchase. Great quality.'
            label = 1
            helpfulness = random.randint(0, 20)
            verified_purchase = True
        else:
            text = 'Worst ever! Fake product. Do not buy. ' + 'spam ' * random.randint(1, 5)
            label = 0
            helpfulness = random.randint(0, 3)
            verified_purchase = False
        rows.append({'text': text, 'label': label, 'helpfulness': helpfulness, 'verified_purchase': verified_purchase})
    return pd.DataFrame(rows)


def load_sample(path: str):
    df = pd.read_csv(path)
    # Expect columns: text, label (1 authentic, 0 suspicious), optional metadata columns
    return df


def run_training(args):
    df = load_sample(args.data) if args.data else generate_synthetic(1000)
    texts = df['text'].fillna('').tolist()
    tokenized = [preprocess(t) for t in texts]
    feat_ext = FeatureExtractor(max_features=5000)
    X_tfidf = feat_ext.fit_transform(tokenized)
    # persist tfidf
    tfidf_path = args.tfidf_out or 'models/tfidf.joblib'
    os.makedirs(os.path.dirname(tfidf_path), exist_ok=True)
    feat_ext.save_tfidf(tfidf_path)
    print('Saved TF-IDF to', tfidf_path)
    X_auth = feat_ext.extract_authenticity_features(texts, tokenized, df.to_dict(orient='records'))
    # combine features
    from scipy.sparse import hstack
    X = hstack([X_tfidf, X_auth])
    y = df['label'].astype(int).values

    model = AuthenticityModel()
    param_grid = {'C': [0.1, 1, 10]} if args.grid else None
    if param_grid:
        gs = model.train(X, y, param_grid={'C': [0.1, 1, 10], 'kernel': ['linear']}, cv=3)
        print('Best params:', gs.best_params_)
    else:
        model.train(X, y)

    metrics = model.evaluate(X, y)
    print('Metrics (on train):', metrics)
    os.makedirs(os.path.dirname(args.model_out), exist_ok=True)
    out_path = args.model_out
    model.save(out_path)
    print('Saved model to', out_path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--data', required=False, default='', help='CSV with columns text and label (leave empty to use synthetic)')
    parser.add_argument('--model-out', default='models/svm_authenticity.joblib')
    parser.add_argument('--tfidf-out', default='models/tfidf.joblib', help='Path to save TF-IDF vectorizer')
    parser.add_argument('--grid', action='store_true')
    args = parser.parse_args()
    run_training(args)


if __name__ == '__main__':
    main()
