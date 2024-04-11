from fastapi import APIRouter, Depends, HTTPException
from schemas.case import Case
from services.cases.CasesService import CasesService
from utils.DependencyInjectors import get_cases_service

case_router = APIRouter()

@case_router.post("/cases")
async def add_case(case: Case, cases_service: CasesService = Depends(get_cases_service)):
    return cases_service.add_case(case)

@case_router.get("/cases/{case_id}")
async def get_case(case_id: str, cases_service: CasesService = Depends(get_cases_service)):
    case = cases_service.get_case_by_id(case_id)
    if not case:
        raise HTTPException(status_code=404, detail=f'No case found for case Id: {case_id}')
    return case

@case_router.get("/cases")
async def get_all_cases(cases_service: CasesService = Depends(get_cases_service)):
    cases = cases_service.get_all_cases()
    if not cases:
        raise HTTPException(status_code=404, detail="Cases not found")
    return cases
