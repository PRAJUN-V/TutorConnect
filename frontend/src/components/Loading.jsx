// Loading.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-blue-500 mb-4" />
                <span className="text-xl font-medium text-blue-500">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
