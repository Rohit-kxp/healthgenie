from fastapi import APIRouter
from app.schemas.vitals_schema import Vitals
router = APIRouter()
vitals_data = []
@router.post("/vitals/")
def add_vitals(vitals: Vitals):
    vitals_data.append(vitals.dict())
    return {"message": "Vitals recorded successfully"}
@router.get("/vitals/")
def list_vitals():
    return vitals_data
