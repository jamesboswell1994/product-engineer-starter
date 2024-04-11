from datetime import datetime, timezone
from utils.LocalDataUtil import retrieve_data
from schemas.case import Case

class CaseProcessor:
    @staticmethod
    def process_case_data(case_data: Case) -> dict:
        created_at = datetime.fromisoformat(case_data['created_at'].replace('Z', '+00:00'))
        elapsed_time = (datetime.now(timezone.utc) - created_at).total_seconds()

        if elapsed_time < 10:
            return case_data
        
        elif elapsed_time < 30:
            case_data['summary'] = retrieve_data('../assets/response-2.json', 'summary')
            case_data['status'] = 'processing'

        else:
            case_data['summary'] = retrieve_data('../assets/response-3.json', 'summary')
            case_data['steps'] = retrieve_data('../assets/response-3.json', 'steps')
            case_data['status'] = 'complete'
        return case_data
