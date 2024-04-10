"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

export default function GuidelinesUpload() {
    const { medicalRecord, guidelinesFile, setGuidelinesFile } = useDashboard();

    const handleClick = () => {
        console.log(medicalRecord);
        if (!medicalRecord) {
            toast.error("Please upload a valid medical record", {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false
            });
        } else {
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
        }
    };

    return (
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    guidelinesFile === null
                        ? "bg-orange-500 border-orange-500"
                        : "border-transparent text-green-600"
                )}
                onClick={handleClick}>
                {guidelinesFile === null && <span>Simulate Guidelines Upload</span>}
                {guidelinesFile !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Guidelines File Uploaded</span>
                    </span>
                )}
            </button>
        </div>
    );
}
