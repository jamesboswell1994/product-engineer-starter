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
        <li>
            <span className="font-bold block mb-2">LLM Steps:</span>
            {steps?.length > 0 ? (
                <ul className="list-disc list-inside">
                    {steps.map((step, index) => (
                        <li key={index} className="ml-4">
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
                            <p className="mt-2">Reasoning: {step.reasoning}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="italic text-gray-400">Steps not available</p>
            )}
        </li>
    );
};

export default LlmSteps;
