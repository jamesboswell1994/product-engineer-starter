import React from "react";

interface CaseSummaryProps {
    summary?: string | null;
}

const CaseSummary: React.FC<CaseSummaryProps> = ({ summary }) => {
    return (
        <div className="mb-2 px-2 border border border-pablo-600 rounded-md bg-gradient-to-r from-green-300 to-green-400">
            <span className="font-bold text-lg">Case Summary:</span>
            <p className="text-sm">
                {summary ? summary : <span className="italic text-gray-400">Awaiting summary</span>}
            </p>
        </div>
    );
};

export default CaseSummary;
