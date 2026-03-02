from fastapi import FastAPI
from database import engine, Base
from models import User, Package, Booking

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Tourist Bus Booking API Running 🚍"}

@app.get("/packages")
def get_packages():
    return {"message": "This will return all packages"}