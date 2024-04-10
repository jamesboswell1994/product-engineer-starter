"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";

export default function MedicalRecordUpload() {
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        // on click we display the spinner
        setIsLoading(true);
        setTimeout(() => {
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
            setIsLoading(false); // stop displaying the spinner
        }, 3000);
    };

    return (
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    medicalRecord === null
                        ? "bg-blue-500 border-blue-500"
                        : "border-transparent text-green-600"
                )}
                onClick={handleClick}
                disabled={isLoading}>
                {isLoading && <FaSpinner className="animate-spin" />}
                {medicalRecord === null && !isLoading && (
                    <span>Simulate Medical Record Upload</span>
                )}
                {medicalRecord !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <span>Medical Record Uploaded</span>
                        <FaCheck />
                    </span>
                )}
            </button>
        </div>
    );
}
