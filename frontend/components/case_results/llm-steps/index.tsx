import React from "react";

interface StepOption {
    text: string;
    selected?: boolean;
}

interface Step {
    question: string;
    options: StepOption[];
    reasoning: string;
}

interface LlmStepsProps {
    steps: Step[];
}

const LlmSteps: React.FC<LlmStepsProps> = ({ steps }) => {
    return (
        <div>
            <span className="font-bold block mb-2 text-lg">LLM Steps:</span>
            {steps?.length > 0 ? (
                <ul className="list-disc list-inside">
                    {steps.map((step, index) => (
                        <div key={index} className="ml-4">
                            <span className="font-semibold">Question:</span> {step.question}
                            <ul className="list-circle ml-6 mt-2">
                                {step.options.map((option, optionIndex) => (
                                    <li
                                        key={optionIndex}
                                        className={`${
                                            option.selected ? "font-semibold text-green-600" : ""
                                        }`}>
                                        {option.text}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 text-sm mb-2">Reasoning: {step.reasoning}</p>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="italic text-gray-400">Awaiting LLM step readout</p>
            )}
        </div>
    );
};

export default LlmSteps;
