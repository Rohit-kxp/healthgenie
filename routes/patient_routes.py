from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.patient import Patient
from app.schemas.patient_schema import PatientCreate, PatientOut

router = APIRouter()

@router.post("/patients/", response_model=PatientOut)
def create_patient(patient: PatientCreate, db: Session = Depends(get_db)):
    db_patient = Patient(
        name=patient.name,
        age=patient.age,
        diagnosis=patient.diagnosis
    )
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient

@router.get("/patients/", response_model=list[PatientOut])
def get_patients(db: Session = Depends(get_db)):
    return db.query(Patient).all()
