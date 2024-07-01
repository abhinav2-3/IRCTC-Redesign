"use client";

import React, { useState } from "react";

const Filters = ({ label }: { label: String }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="flex items-center mb-4"
      onClick={() => setIsChecked(!isChecked)}
    >
      <input type="checkbox" id={"label"} className="hidden" />
      <label
        className={`cursor-pointer px-4 py-2 rounded duration-300 ${
          isChecked ? "bg-blue-600 text-white" : "bg-gray-600 text-white"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Filters;
