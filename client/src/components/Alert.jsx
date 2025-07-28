import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-3 rounded shadow-lg z-50">
      <span>⚠️ {message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white font-bold hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default Alert;
