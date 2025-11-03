from typing import Any, Dict, Optional
import joblib
import numpy as np
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import precision_recall_fscore_support, roc_auc_score


class AuthenticityModel:
    def __init__(self, model: Optional[Any] = None):
        self.model = model or SVC(probability=True)

    def train(self, X, y, param_grid: Dict = None, cv: int = 3):
        if param_grid:
            gs = GridSearchCV(self.model, param_grid, cv=cv, scoring='f1', n_jobs=-1)
            gs.fit(X, y)
            self.model = gs.best_estimator_
            return gs
        else:
            self.model.fit(X, y)

    def predict(self, X):
        return self.model.predict(X)

    def predict_proba(self, X):
        if hasattr(self.model, 'predict_proba'):
            return self.model.predict_proba(X)
        # fallback: decision_function -> sigmoid
        if hasattr(self.model, 'decision_function'):
            scores = self.model.decision_function(X)
            probs = 1.0 / (1.0 + np.exp(-scores))
            return np.vstack([1-probs, probs]).T
        raise RuntimeError('Model has no probability output')

    def evaluate(self, X, y_true):
        y_pred = self.predict(X)
        precision, recall, f1, _ = precision_recall_fscore_support(y_true, y_pred, average='binary')
        try:
            probs = self.predict_proba(X)[:, 1]
            roc = roc_auc_score(y_true, probs)
        except Exception:
            roc = None
        return {'precision': precision, 'recall': recall, 'f1': f1, 'roc_auc': roc}

    def save(self, path: str):
        joblib.dump(self.model, path)

    def load(self, path: str):
        self.model = joblib.load(path)
