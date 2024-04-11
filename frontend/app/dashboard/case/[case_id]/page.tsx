"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { formatDistance } from "date-fns";
import HomepageIcon from "@/components/case_results/homepage_icon";
import ResultHeading from "@/components/case_results/result-heading";
import ProcedureName from "@/components/case_results/procedure-name";
import CptCodes from "@/components/case_results/cpt-codes";
import CaseSummary from "@/components/case_results/case-summary";
import CaseTimeDetail from "@/components/case_results/case-time-detail/CaseTimeDetail";
import LlmSteps from "@/components/case_results/llm-steps";
import FinalDetermination from "@/components/case_results/final-determination/FinalDetermination";
import Loader from "@/components/loader/loader";
import { CaseData } from "@/interfaces";
import HowToInterpretButton from "@/components/case_results/interpret-button";
export default function CaseResult() {
    const [caseData, setCaseData] = useState<CaseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { case_id } = useParams() as { case_id: string };

    useEffect(() => {
        setTimeout(() => {
            if (case_id) {
                setLoading(true);
                axios
                    .get(`http://localhost:8000/cases/${case_id}`)
                    .then((response) => {
                        setCaseData(response.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Failed to fetch case data:", error);
                        setError(error);
                        setLoading(false);
                    });
            } else {
                setError("Invalid case ID");
                setLoading(false);
            }
        }, 2000);
    }, [case_id]);

    if (loading) return <Loader />;
    if (error) {
        return <div className="text-red-500 text-center py-4">An error occurred</div>;
    }
    if (!caseData) return <div className="text-gray-500 text-center py-4">No case data found.</div>;

    const { procedure_name, cpt_codes, summary, steps, created_at, is_met } = caseData;

    return (
        <div className="max-w-8xl mx-auto px-4 py-8 bg-sky-light bg-opacity-90 border border-gray-200 rounded-lg shadow-lg">
            <HomepageIcon></HomepageIcon>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex flex-col mb-2">
                    <ResultHeading></ResultHeading>
                    <CaseTimeDetail created_at={created_at} case_id={case_id} />
                </div>
                <div className="flex bg-pablo-100 rounded-md justify-around mb-2">
                    <ProcedureName procedure_name={procedure_name} />
                    <CptCodes cpt_codes={cpt_codes} />
                    <FinalDetermination is_met={is_met} />
                </div>
                <CaseSummary summary={summary} />
                <HowToInterpretButton />
                <LlmSteps steps={steps} />
            </div>
        </div>
    );
}
