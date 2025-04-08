const Textarea = ({ label, placeholder, required = false, className = "" }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && <label className="font-semibold text-sm">{label}</label>}
      <textarea
        placeholder={placeholder}
        required={required}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-brown resize-none"
      />
    </div>
  );
};

export default Textarea;
