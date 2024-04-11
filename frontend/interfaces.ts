export interface CaseData {
    procedure_name: string;
    cpt_codes: string[];
    summary: string;
    steps: Step[];
    created_at: string;
    is_met: boolean;
}

export interface Step {
    question: string;
    options: Option[];
    reasoning: string;
}

export interface Option {
    text: string;
    selected: boolean;
}
