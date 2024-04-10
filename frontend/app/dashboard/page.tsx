"use client";

import GuidelinesUpload from "@/components/guidelines-upload";
import MedicalRecordUpload from "@/components/medical-record-upload";
import { useDashboard } from "@/context/dashboard-context";
import { useRouter } from "next/navigation";
import axios from "axios";
export const revalidate = 0;

// removed the async declaration as it isn't needed, and causes conflict with the use client directive
export default function DashboardRoot() {
    const router = useRouter();
    const CASE_ID = "case_891a_6fbl_87d1_4326";

    const handleContinue = () => {
        // below we define a sample case object with dummy values to insert into the database.
        const caseObject = {
            case_id: "case_123atest",
            status: "submitted",
            procedure_name: "Sample procedure",
            cpt_codes: ["123", "234", "345", "456"],
            summary: null,
            is_met: false,
            is_complete: false,
            steps: []
        };
        axios.post("http://localhost:8000/cases", caseObject);
        router.push(`/dashboard/case/${CASE_ID}`);
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
