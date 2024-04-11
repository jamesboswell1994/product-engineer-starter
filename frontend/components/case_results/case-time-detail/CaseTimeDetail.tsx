import React from "react";
import { formatDistance } from "date-fns";

interface CaseTimeDetailProps {
    created_at: Date | string;
    case_id: string;
}

const CaseTimeDetail: React.FC<CaseTimeDetailProps> = ({ created_at, case_id }) => {
    // we get the formatted time diff between now and the created_at. date-fns library handles the formatting.
    const formattedCreatedAt = formatDistance(new Date(created_at), new Date(), {
        addSuffix: true
    });

    return (
        <div>
            <span className="text-md">
                Case id {case_id}, created {formattedCreatedAt}{" "}
            </span>
        </div>
    );
};

export default CaseTimeDetail;
