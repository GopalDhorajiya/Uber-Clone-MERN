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
    <div className={`flex flex-col w-full`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-1 text-xs font-medium ${labelClassName || "text-gray-700"}`}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        
        // The classes passed in the `className` prop below will override these defaults
        className={`
          px-3 py-2.5 rounded-md border 
          bg-gray-100 text-black border-gray-200
          focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
          transition duration-200
          placeholder-gray-500
          ${className}
        `}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
