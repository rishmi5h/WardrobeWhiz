from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    preferences: Optional[str] = None

class UserResponse(UserBase):
    id: int
    preferences: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

# Wardrobe item schemas
class WardrobeItemBase(BaseModel):
    name: str
    category: str
    image: str
    color: str
    occasion: str

class WardrobeItemCreate(WardrobeItemBase):
    pass

class WardrobeItemUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    color: Optional[str] = None
    occasion: Optional[str] = None

class WardrobeItemResponse(WardrobeItemBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Calendar event schemas
class CalendarEventBase(BaseModel):
    date: str
    outfit_id: str
    notes: Optional[str] = None

class CalendarEventCreate(CalendarEventBase):
    pass

class CalendarEventResponse(CalendarEventBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Authentication schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# Outfit suggestion schema
class OutfitSuggestionRequest(BaseModel):
    occasion: str
    preferredColors: List[str]
    excludeItems: List[str] = [] 