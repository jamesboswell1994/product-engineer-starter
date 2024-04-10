import React from "react";

// Define TypeScript interface for the component props
interface CptCodesProps {
    cpt_codes: string[];
}

const CptCodes: React.FC<CptCodesProps> = ({ cpt_codes }) => {
    return (
        <li>
            <span className="font-bold">CPT Codes:</span> {cpt_codes.slice(0, 4).join(", ")}
        </li>
    );
};

export default CptCodes;
