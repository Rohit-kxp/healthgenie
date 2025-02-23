from pydantic import BaseModel
from datetime import datetime
class Vitals(BaseModel):
    patient_id: int
    heart_rate: int
    blood_pressure: str
    temperature: float
    recorded_at: datetime
