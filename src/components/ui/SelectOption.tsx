import React from "react";

interface SelectOptionProps {
  data: string[];
}

const SelectOption: React.FC<SelectOptionProps> = ({ data }) => {
  return (
    <div>
      <select
        id="options"
        className="block w-full py-4 outline-none px-10 rounded-md bg-gray-600 text-white"
      >
        {data?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
