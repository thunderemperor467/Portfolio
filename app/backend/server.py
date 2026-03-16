from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

from models import ContactMessage, ContactMessageCreate

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# Logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
db_name = os.getenv("DB_NAME")

logger.info(f"MONGO_URL: {mongo_url}")
logger.info(f"DB_NAME: {db_name}")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# FastAPI app
app = FastAPI()

# CORS (important for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Router
api_router = APIRouter(prefix="/api")

# -------------------------
# Models
# -------------------------

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


# -------------------------
# Routes
# -------------------------

@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)

    await db.status_checks.insert_one(status_obj.dict())

    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


# -------------------------
# Contact Form
# -------------------------

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(message_data: ContactMessageCreate):
    """Submit contact form"""

    try:
        message_dict = message_data.dict()
        message_obj = ContactMessage(**message_dict)

        await db.contact_messages.insert_one(message_obj.dict())

        return message_obj

    except Exception as e:
        logger.error(f"Error creating contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit message")


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Admin: get all contact messages"""

    try:
        messages = (
            await db.contact_messages
            .find()
            .sort("created_at", -1)
            .to_list(1000)
        )

        return [ContactMessage(**msg) for msg in messages]

    except Exception as e:
        logger.error(f"Error fetching contact messages: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")


# -------------------------
# Resume Download
# -------------------------

@api_router.get("/resume/download")
async def download_resume():
    """Download resume"""

    resume_path = ROOT_DIR / "resume" / "Aditya_Chauhan_Resume (1).pdf"

    if not resume_path.exists():
        logger.error(f"Resume file not found at {resume_path}")
        raise HTTPException(status_code=404, detail="Resume not found")

    return FileResponse(
        path=resume_path,
        filename="Aditya_Chauhan_Resume.pdf",
        media_type="application/pdf",
    )


# -------------------------
# Attach router
# -------------------------

app.include_router(api_router)