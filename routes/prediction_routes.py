from fastapi import APIRouter, HTTPException
from pydantic import BaseModel  # ✅ Import this
from typing import List
from app.ml_models.disease_prediction import predictor
import pickle
from fastapi import FastAPI
import numpy as np
import asyncio 
router = APIRouter()

class SymptomInput(BaseModel):
    symptoms: List[int]  # Expecting a binary array of size 42

@router.post("/predict/")
async def predict_disease(data: SymptomInput):
    symptoms_list = data.symptoms  

    # ✅ Ensure it's a numpy array and reshape it
    symptoms_array = np.array(symptoms_list, dtype=float).reshape(1, -1)

    # ✅ Make prediction
    prediction = predictor(symptoms_array)

    return {"prediction": prediction}
