import React from "react";
import { formatDistance } from "date-fns";

interface CaseTimeDetailProps {
    created_at: Date | string;
}

const CaseTimeDetail: React.FC<CaseTimeDetailProps> = ({ created_at }) => {
    const formattedCreatedAt = formatDistance(new Date(created_at), new Date(), {
        addSuffix: true
    });

    return (
        <li>
            <span className="font-bold">Created At:</span> {formattedCreatedAt}
        </li>
    );
};

export default CaseTimeDetail;
