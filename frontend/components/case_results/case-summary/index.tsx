import React from "react";

interface CaseSummaryProps {
    summary?: string | null;
}

const CaseSummary: React.FC<CaseSummaryProps> = ({ summary }) => {
    return (
        <div>
            <span className="font-bold text-lg">Case Summary:</span>
            <p className="text-sm">
                {summary ? summary : <span className="italic text-gray-400">Awaiting summary</span>}
            </p>
        </div>
    );
};

export default CaseSummary;
