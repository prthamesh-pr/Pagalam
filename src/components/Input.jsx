import React from "react";

const Input = ({ label, placeholder }) => {
  return (
    <div className={`flex flex-col space-y-2`}>
      {label && <label className="text-sm font-semibold">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-brown resize-none"
      />
    </div>
  );
};

export default Input;
