import os
from dotenv import load_dotenv
from schemas.case import Case
load_dotenv()
from supabase import create_client, Client

# instantiates the supabase ORM
def create_supabase_client() -> Client:
    url : str = os.environ.get("SUPABASE_URL")
    key : str = os.environ.get("SUPABASE_KEY")
    return create_client(url, key)

