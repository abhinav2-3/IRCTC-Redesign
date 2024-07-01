"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatePickerDemo = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="text-white hover:cursor-pointer bg-inherit outline-none text-lg w-full"
    />
  );
};
export default DatePickerDemo;
