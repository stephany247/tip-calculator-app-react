import React from "react";

const InputGroup = ({
  id,
  label,
  placeholder,
  errorMessage,
  icon,
  value,
  onChange,
}) => (
  <div className="mb-4 w-full flex flex-col gap-3">
    <label htmlFor={id} className="text-sm flex justify-between">
      {label}
      {errorMessage && (
      <span
        id={`error-message-${id}`}
        className="text-sm text-red-600"
      >
        {errorMessage}
      </span>
    )}
    </label>
    <div className="relative flex items-center bg-vlg-cyan rounded-md">
        <img
          src={icon}
          alt={`${label} icon`}
          className="absolute left-3 w-4 h-5"
        />
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        className="text-right text-vd-cyan w-full pl- pr-3 py-2 rounded-md bg-vlg-cyan focus:ring-2 focus:ring-strong-cyan focus:outline-none"
        placeholder={placeholder}
        aria-describedby={`error-message-${id}`}
        min="0"
      />
    </div>
  </div>
);

export default InputGroup;
