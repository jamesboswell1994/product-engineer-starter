import React from "react";

interface CaseSummaryProps {
    summary?: string | null;
}

const CaseSummary: React.FC<CaseSummaryProps> = ({ summary }) => {
    return (
        <li>
            <span className="font-bold">Case Summary:</span>
            {summary ? summary : <span className="italic text-gray-400">Awaiting summary</span>}
        </li>
    );
};

export default CaseSummary;
