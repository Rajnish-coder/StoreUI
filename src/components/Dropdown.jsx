import React from "react";

export default function Dropdown({
  label,
  options,
  selectedValue,
  handleSort,
}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-md font-semibold text-primary dark:text-light">
        {label}
      </label>
      <select
        className="px-2 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark focus:outline-none text-gray-900 dark:text-gray-100"
        value={selectedValue}
        onChange={(event) => handleSort(event.target.value)}
      >
        {options.map((optionVal, index) => (
          <option key={index} value={optionVal} className="dark:bg-darkbg">
            {optionVal}
          </option>
        ))}
      </select>
    </div>
  );
}
