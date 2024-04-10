from pydantic import BaseModel
from typing import Optional
from datetime import datetime
## pydantic model for cases. For thoroughness sake, I've made all fields required except a few per my judgment
class Case(BaseModel):
    status : str
    case_id : str
    procedure_name : str
    is_met : bool
    is_complete : bool
    cpt_codes : list[str]

class CaseSummary(Case):
    created_at : datetime
    summary : str
