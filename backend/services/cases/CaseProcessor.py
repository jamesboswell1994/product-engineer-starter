from datetime import datetime, timezone
from utils.LocalDataUtil import retrieve_data
from schemas.case import Case

class CaseProcessor:
    @staticmethod
    def process_case_data(case_data: Case) -> dict:
        # reformat the supabase datetime storage
        created_at = datetime.fromisoformat(case_data['created_at'].replace('Z', '+00:00'))
        elapsed_time = (datetime.now(timezone.utc) - created_at).total_seconds()

        if elapsed_time < 10:
            return case_data
        
        # if after 10 and less than 30, we retrieve the summary and append to the response body
        elif elapsed_time < 30:
            case_data['summary'] = retrieve_data('../assets/response-2.json', 'summary')
            case_data['status'] = 'processing'

        # we retrieve the summary and the entire steps array and append to response body
        else:
            case_data['summary'] = retrieve_data('../assets/response-3.json', 'summary')
            case_data['steps'] = retrieve_data('../assets/response-3.json', 'steps')
            case_data['status'] = 'complete'
        return case_data
