import React from "react";

const Button = React.forwardRef(function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "text-white",
    className = "",
    ...props
}, ref) {
    return (
        <button
            type={type}
            className={`w-full px-4 py-3 rounded-md font-semibold ${bgColor} ${textColor} ${className}`}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

export default Button;