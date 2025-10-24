import requests
import pandas as pd
import time
import re
from bs4 import BeautifulSoup
from googlemaps import Client as GoogleMaps
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Load school names from CSV
def load_school_list(filepath):
    df = pd.read_csv(filepath)
    return df['School_Name'].dropna().tolist()

# Fetch reviews from Google Maps
def fetch_reviews_google(school_name, gmaps_key):
    gmaps = GoogleMaps(gmaps_key)
    try:
        place = gmaps.find_place(input=school_name, input_type='textquery', fields=['place_id'])
        if not place['candidates']:
            return []
        place_id = place['candidates'][0]['place_id']
        details = gmaps.place(place_id=place_id, fields=['reviews'])
        reviews = details['result'].get('reviews', [])
        return [r['text'] for r in reviews]
    except Exception as e:
        print(f"Error fetching reviews for {school_name}: {e}")
        return []

# Clean review text
def clean_review(text):
    return re.sub(r'[^\w\s]', '', text.lower())

# Train model on labeled data
def train_fake_review_model(reviews, labels):
    vectorizer = TfidfVectorizer(max_features=5000)
    X = vectorizer.fit_transform([clean_review(r) for r in reviews])
    model = LogisticRegression()
    model.fit(X, labels)
    return model, vectorizer

# Label new reviews
def label_reviews(model, vectorizer, new_reviews):
    X_new = vectorizer.transform([clean_review(r) for r in new_reviews])
    return model.predict(X_new)

# Save labeled reviews to CSV
def save_reviews(school, reviews, labels, filepath='reviews.csv'):
    df = pd.DataFrame({
        'School': [school] * len(reviews),
        'Review': reviews,
        'Label': labels
    })
    df.to_csv(filepath, mode='a', index=False, header=not pd.io.common.file_exists(filepath))

# Main execution
if __name__ == "main":
    # Load labeled training data
    train_df = pd.read_csv('labeled_reviews.csv')  # Assumes columns: Review, Label
    train_reviews = train_df['Review'].dropna().tolist()
    train_labels = train_df['Label'].tolist()

    # Train model
    model, vectorizer = train_fake_review_model(train_reviews, train_labels)

    # Load school list
    school_list = load_school_list('delhi_noida_schools.csv')

    # Process each school
    for school in school_list:
        reviews = fetch_reviews_google(school, gmaps_key='YOUR_API_KEY')
        if reviews:
            labels = label_reviews(model, vectorizer, reviews)
            save_reviews(school, reviews, labels)
        time.sleep(1)  # Respect API rate limits
