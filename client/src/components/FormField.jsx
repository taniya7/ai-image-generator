import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      {/* Label + Surprise Me Button */}
      <div className="flex gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 "
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            onClick={handleSurpriseMe}
            type="button"
            className="text-xs font-semibold text-black bg-yellow-400 py-1 px-2 rounded-md"
          >
            Surprise Me
          </button>
        )}
      </div>

      {/* Input field */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
      />
    </div>
  );
};

export default FormField;
