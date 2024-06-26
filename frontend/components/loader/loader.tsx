import React from "react";

// the loader styling is definied in the css globals
const Loader: React.FC = () => {
    return (
        <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-100">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
