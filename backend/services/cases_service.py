from datetime import datetime, timezone
from fastapi import HTTPException
from utils.SupabaseUtil import create_supabase_client
from utils.LocalDataUtil import retrieve_summary, retrieve_steps
from schemas.case import Case, CaseSummary

class CasesService:
    def __init__(self) -> None:
        self.db = create_supabase_client()

    def get_case_by_id(self, case_id: int) -> dict:
        response = self.db.table("cases").select('*').eq("id", case_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail=f"Case not found for id {case_id}")
        
        case_data = response.data[0]
        created_at = datetime.fromisoformat(case_data['created_at'].replace('Z', '+00:00'))
        elapsed_time = (datetime.now(timezone.utc) - created_at).total_seconds()

        if elapsed_time < 10:
            return case_data
        elif elapsed_time < 30:
            case_data['summary'] = retrieve_summary()
            case_data['status'] = 'processing'
            return case_data
        else:
            case_data['summary'] = retrieve_summary()
            case_data['steps'] = retrieve_steps()
            case_data['status'] = 'complete'
            return case_data

    def get_all_cases(self):
        all_cases_response = self.db.table("cases").select('id').execute()
        if not all_cases_response.data:
            return []

        all_cases = []
        for case_record in all_cases_response.data:
            try:
                detailed_case = self.get_case_by_id(case_record['id'])
                all_cases.append(detailed_case)
            except HTTPException as e:
                print(f"Case with ID {case_record['id']} not found. Skipping.")

        return all_cases