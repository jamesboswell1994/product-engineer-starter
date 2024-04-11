
from utils.SupabaseUtil import create_supabase_client
from schemas.case import Case

# the case repository is the database layer. Interacts with the supabase Postgres instance by way of the ORM from the SupabaseUtil
class CaseRepository:
    def __init__(self):
        self.db = create_supabase_client()

    def add_case(self, case : Case):
        result = self.db.table("cases").insert(case).execute()
        if not result.data:
            raise Exception("Failed to insert the case into the database.")
        # supabase always returns arrays, in this instance of length 1
        return result.data[0]
    
    def get_case_by_id(self, case_id: int) -> dict:
        response = self.db.table("cases").select('*').eq("id", case_id).execute()
        if not response.data:
            return None
        return response.data[0]

    def get_all_case_ids(self) -> list:
        response = self.db.table("cases").select('id').execute()
        return [case['id'] for case in response.data] if response.data else []

