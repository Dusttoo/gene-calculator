import os
import harperdb
from dotenv import load_dotenv

load_dotenv()


db = harperdb.HarperDB(
    url=os.getenv("HARPERDB_URL"),
    username=os.getenv("HARPERDB_USERNAME"),
    password=os.getenv("HARPERDB_PASSWORD")
)
