import React from "react";

// Define TypeScript interface for the component props
interface FinalDeterminationProps {
    is_met: boolean;
}

const FinalDetermination: React.FC<FinalDeterminationProps> = ({ is_met }) => {
    return (
        <li>
            <span className="font-bold">Final Determination:</span> {is_met ? "Met" : "Not Met"}
        </li>
    );
};

export default FinalDetermination;
