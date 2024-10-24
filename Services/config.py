from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

# Access environment variables
DATABASE_URL = os.getenv("DATABASE_URL")
