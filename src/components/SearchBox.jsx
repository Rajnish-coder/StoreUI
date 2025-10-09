import React from "react";

export default function SearchBox({ label, placeholder, value, handleChange }) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-md font-semibold text-primary dark:text-light">
        {label}
      </label>
      <input
        type="text"
        className="px-2 py-1 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark focus:outline-none text-gray-800 dark:text-gray-100"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
