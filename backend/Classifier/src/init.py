"""Package for review classifier."""

import os
import sys

# Add the directory containing the classifier to the Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Install the required packages
os.system("pip install -r \"c:/Users/3535/OneDrive/Desktop/Classifier.py/requirements.txt\"")

# Create a virtual environment
os.system("python -m venv .venv")
os.system("source .venv/Scripts/activate")
