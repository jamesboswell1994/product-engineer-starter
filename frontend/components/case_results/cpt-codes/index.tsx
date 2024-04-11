import React from "react";

interface CptCodesProps {
    cpt_codes: string[];
}

const CptCodes: React.FC<CptCodesProps> = ({ cpt_codes }) => {
    return (
        <div className="flex flex-col">
            <span className="font-bold">CPT Codes:</span> {cpt_codes.slice(0, 4).join(", ")}
        </div>
    );
};

export default CptCodes;
