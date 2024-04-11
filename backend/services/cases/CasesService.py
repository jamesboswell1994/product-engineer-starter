from fastapi import HTTPException
from schemas.case import Case
from services.cases import CaseProcessor, CaseRepository

# The CasesService class is the orchestration layer for the 3 case operations required
# Makes use of the CaseRepository for database operations and the CaseProcessor for processing
class CasesService:
    def __init__(self, case_repository: CaseRepository, case_processor: CaseProcessor) -> None:
        self.case_repository = case_repository
        self.case_processor = case_processor

    def add_case(self, case: Case):
        new_case = case.model_dump() 
        try:
            case_record = self.case_repository.add_case(new_case)
            return {
                'id': case_record['id'],
                'created_at': case_record['created_at'],
                'status': case_record['status']
            }
        
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=str(e),
            )

    def get_case_by_id(self, case_id: int) -> dict:
        case_data = self.case_repository.get_case_by_id(case_id)
        if not case_data:
            raise HTTPException(
                status_code=404, 
                detail=f"Case not found for id {case_id}"
            )
        
        return self.case_processor.process_case_data(case_data)

    def get_all_cases(self) -> list:
        all_cases = []
        for case_id in self.case_repository.get_all_case_ids():
            case_data = self.case_repository.get_case_by_id(case_id)
            if case_data:
                all_cases.append(self.case_processor.process_case_data(case_data))
        return all_cases