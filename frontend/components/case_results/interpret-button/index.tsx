import { useState } from "react";
import Modal from "@/components/modal";

const HowToInterpretButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold mb-2 mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                How to interpret LLM steps
            </button>
            <Modal show={showModal} onClose={toggleModal} size="default" show_close_button>
                <h1 className="text-xl font-bold mb-4">How to Interpret LLM Steps</h1>
                <p className="text-gray-800">
                    The LLM steps describe a question and answer where the model chooses from a
                    pre-set list of options the most relevant treatment given the patient's summary.
                    From this, it describes its reasoning for its coding choices.
                </p>
            </Modal>
        </>
    );
};

export default HowToInterpretButton;
