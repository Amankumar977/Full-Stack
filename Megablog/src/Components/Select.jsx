import React, { useId } from "react";

function Select({ options = [], label, className = "", ...props }, ref) {
  let id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="w-full">
          {label}
        </label>
      )}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 w-full ${className}`}
        {...props}
        id={id}
        ref={ref}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
