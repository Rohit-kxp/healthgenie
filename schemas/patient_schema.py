from pydantic import BaseModel
class PatientCreate(BaseModel):
    name: str
    age: int
    diagnosis: str
class PatientOut(BaseModel):
    id: int
    name: str
    age: int
    diagnosis: str

    class Config:
        orm_mode = True
