import { trainStations } from "@/utils/data";
import React from "react";

const SelectStation = ({ label }: { label: String }) => {
  return (
    <div>
      <label
        htmlFor="options"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        {label}
      </label>
      <select
        id="options"
        className="block w-full p-3 outline-none px-6 rounded-md bg-gray-600"
      >
        {trainStations?.map((item) => {
          return (
            <option key={item.shortcut} value={item.shortcut}>
              <h1>{item.shortcut}</h1>
              {"   "}
              <span>{item.fullName}</span>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectStation;
