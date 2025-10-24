import sys
sys.path.insert(0, 'c:/Users/3535/OneDrive/Desktop/Classifier.py')

from src.preprocessor import preprocess
from src.features import FeatureExtractor
from src.train import generate_synthetic


def test_preprocess():
    s = 'Hello WORLD! This is a test. Visit http://example.com'
    toks = preprocess(s)
    assert isinstance(toks, list)
    assert 'hello' in toks or 'world' in toks


def test_feature_extractor_and_synthetic():
    df = generate_synthetic(10)
    texts = df['text'].tolist()
    toks = [preprocess(t) for t in texts]
    fe = FeatureExtractor(max_features=100)
    X = fe.fit_transform(toks)
    assert X.shape[0] == len(texts)
    auth = fe.extract_authenticity_features(texts, toks, df.to_dict(orient='records'))
    assert auth.shape[0] == len(texts)
