import React, { useId, forwardRef } from "react";

// Hint 1: Rename the HTML input element to avoid naming conflict
let CustomInput = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  let id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      {/* Hint 2: Use the ref in the correct place */}
      <input
        type={type}
        id={id}
        className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default CustomInput;
