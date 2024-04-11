import React, { useState } from "react";

interface FinalDeterminationProps {
    is_met: boolean;
}

const FinalDetermination: React.FC<FinalDeterminationProps> = ({ is_met }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex flex-col items-start">
            <span className="font-bold">Final Determination:</span>
            <div
                className="relative flex items-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                <span className={is_met ? "text-green-500" : "text-red-500"}>
                    {is_met ? "✔️ Met" : "❌ Not Met"}
                </span>
                {showTooltip && (
                    <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded-md -translate-x-1/2 left-1/2 w-[250px]">
                        {is_met ? "Criteria has been met" : "Criteria has not been met"}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinalDetermination;
