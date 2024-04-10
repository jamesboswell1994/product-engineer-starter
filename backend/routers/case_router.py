from fastapi import APIRouter, Depends, HTTPException, status
from schemas.case import Case
from utils.SupabaseUtil import create_supabase_client
from services.cases_service import CasesService
case_router = APIRouter()

@case_router.post("/cases")
async def add_case(
    case : Case,
):
    new_case = case.model_dump()
    db = create_supabase_client()

    database_insert_result = db.table("cases").insert(new_case).execute()
    case_record = database_insert_result.data[0] # supabase returns an array of results

    try:
        case_id = case_record['id']
        created_at = case_record['created_at']
        status = case_record['status']

    except:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Case_id not found on the supabase return operation",
            headers={"WWW-Authenticate": "Bearer"}
        )

    return {
        case_id : case_id,
        created_at : created_at,
        status : status
    }

@case_router.get("/cases/{case_id}")
async def get_case(case_id: str):
    cases_service = CasesService()
    case = cases_service.get_case_by_id(case_id)
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")
    
    return case

@case_router.get("/cases")
async def get_all_cases():
    cases_service = CasesService()
    cases = cases_service.get_all_cases()
    if not cases:
        raise HTTPException(status_code=404, detail="Case not found")
    return cases
