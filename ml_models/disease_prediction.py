
import pandas as pd
import pickle
from scipy.stats import mode
import numpy as np

# Load the saved logistic regression model and encoder using pickle
with open("app/ml_models/lg_model.pkl", "rb") as file1:
    lg_model = pickle.load(file1)

with open("app/ml_models/encoder.pkl", "rb") as f:
    encoder = pickle.load(f)

def preprocess_input(input_data):
    # Preprocessing steps
    return input_data


# Create a dictionary that maps disease numbers to disease names
disease_mapping = {
    2: "Drug Reaction",
    3: "Malaria",
    4: "Allergy",
    5: "Hypothyroidism",
    6: "Psoriasis",
    7: "GERD",
    8: "Chronic Cholestasis",
    9: "Hepatitis A",
    10: "Osteoarthritis",
    11: "(Vertigo) Paroxysmal Positional Vertigo",
    12: "Hypoglycemia",
    13: "Acne",
    14: "Diabetes",
    15: "Impetigo",
    16: "Hypertension",
    17: "Peptic Ulcer Disease",
    18: "Dimorphic Hemorrhoids (Piles)",
    19: "Common Cold",
    20: "Chickenpox",
    21: "Cervical Spondylosis",
    22: "Hyperthyroidism",
    23: "Urinary Tract Infection",
    24: "Varicose Veins",
    25: "AIDS",
    26: "Paralysis (Brain Hemorrhage)",
    27: "Typhoid",
    28: "Hepatitis B",
    29: "Fungal Infection",
    30: "Hepatitis C",
    31: "Migraine",
    32: "Bronchial Asthma",
    33: "Alcoholic Hepatitis",
    34: "Jaundice",
    35: "Hepatitis E",
    36: "Dengue",
    37: "Hepatitis D",
    38: "Heart Attack",
    39: "Pneumonia",
    40: "Arthritis",
    41: "Gastroenteritis",
    42: "Tuberculosis"
}

# This dictionary maps disease numbers to their corresponding names.
# It's used to convert numerical predictions to disease names.

# Function to make disease predictions

from scipy.stats import mode


# Function to make disease predictions using the logistic regression model
def predictor(input_data):
    # Preprocess the input data
    input_data = preprocess_input(input_data)

    # Make predictions using the loaded model
    prediction = lg_model.predict(np.array(input_data).reshape(1,-1))

    # Convert the numerical prediction to disease name using the label encoder
    disease_name = encoder.inverse_transform([prediction])[0]

    return disease_name
