from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    phone = Column(String)

class Package(Base):
    __tablename__ = "packages"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    location = Column(String)
    price = Column(Integer)
    duration = Column(String)
    bus_type = Column(String)
    food_included = Column(Boolean)
    water_included = Column(Boolean)
    description = Column(String)

class Booking(Base):
    __tablename__ = "bookings"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    package_id = Column(Integer, ForeignKey("packages.id"))
    travel_date = Column(String)
    seats = Column(Integer)
    total_price = Column(Integer)
    payment_status = Column(String)