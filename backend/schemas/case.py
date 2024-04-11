from typing import List, Optional
from pydantic import BaseModel, Field
from datetime import datetime

class Evidence(BaseModel):
    content: str
    page_number: int
    pdf_name: str
    event_datetime: Optional[datetime] = None

class Option(BaseModel):
    key: str
    text: str
    selected: bool

class Logic(BaseModel):
    text: str
    selected: bool

class Step(BaseModel):
    key: str
    question: str
    options: List[Option]
    logic: Optional[List[Logic]] = None 
    reasoning: str
    decision: str
    next_step: str
    is_met: bool
    is_final: bool
    evidence: Optional[List[Evidence]] = None

class Case(BaseModel):
    case_id: str = Field(..., alias='case_id')
    procedure_name: str
    cpt_codes: List[str]
    status: str
    is_met: bool
    is_complete: bool
    # simplest is to allow the summary and the steps to be optional, to accommodate the wait portion
    summary: Optional[str] = None
    steps: Optional[List[Step]] = None
