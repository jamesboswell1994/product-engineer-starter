"use client";

import GuidelinesUpload from "@/components/dashboard/guidelines-upload";
import MedicalRecordUpload from "@/components/dashboard/medical-record-upload";
import { useDashboard } from "@/context/dashboard-context";
import { useRouter } from "next/navigation";
import axios from "axios";
export const revalidate = 0;

// removed the async declaration as it isn't needed, and causes conflict with the use client directive
export default function DashboardRoot() {
    const router = useRouter();

    const handleContinue = () => {
        // sample case object to insert
        const caseObject = {
            case_id: "case_123atest",
            status: "submitted",
            procedure_name: "Neck massage",
            cpt_codes: ["123", "234", "345", "456"],
            summary: null,
            is_met: false,
            is_complete: false,
            steps: []
        };
        axios
            .post("http://localhost:8000/cases", caseObject)
            .then((response) => {
                const caseId = response.data.id;
                router.push(`/dashboard/case/${caseId}`);
            })
            .catch((error) => {
                console.error("Error creating case: ", error);
            });
    };

    const { medicalRecord, guidelinesFile } = useDashboard();
    const uploadsFinished = medicalRecord && guidelinesFile;

    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div className="w-full flex flex-row gap-2 items-center">
                <MedicalRecordUpload />
                <GuidelinesUpload />
            </div>
            {uploadsFinished && (
                <div className="w-full py-4 flex flex-row justify-center">
                    <button
                        className="bg-green-600 font-medium text-white py-2 px-4 rounded"
                        onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}
