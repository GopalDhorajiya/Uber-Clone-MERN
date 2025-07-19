import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    placeholder,
    className = "",
    labelClassName = "",
    ...props
  },
  ref
) {
  const inputId = useId();

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-2 text-sm font-medium ${labelClassName || "text-gray-300"}`}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className={`
          px-4 py-3 rounded-lg border 
          bg-gray-700 text-gray-100 border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition duration-200
          placeholder-gray-500
          ${!label ? className : ""}
        `}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
