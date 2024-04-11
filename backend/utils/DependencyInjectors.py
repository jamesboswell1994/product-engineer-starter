# These are dependency injection functions used in the routers, are self-explanatory

from services.cases.CasesService import CasesService
from services.cases.CaseRepository import CaseRepository 
from services.cases.CaseProcessor import CaseProcessor   
from utils.SupabaseUtil import create_supabase_client 

def get_cases_service() -> CasesService:
    case_repository = CaseRepository()
    case_processor = CaseProcessor()
    return CasesService(case_repository=case_repository, case_processor=case_processor)

def get_db_client():
    return create_supabase_client()
