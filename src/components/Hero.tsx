"use client";

import { MdSwapHorizontalCircle } from "react-icons/md";
import React from "react";
import SelectStation from "./SelectStation";
import DatePickerDemo from "./ui/DatePickerDemo";
import SelectOption from "./ui/SelectOption";
import { Quota, Class } from "@/utils/data";
import Filters from "./Filters";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero bg-no-repeat bg-center bg-cover">
      <div className="px-16 py-8 bg-black/70 flex justify-center items-center w-full h-full flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold text-white"
        >
          Welcome to Indian Railway
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/90 rounded-lg w-full h-4/5 py-8 px-10"
        >
          <h4 className="text-slate-400 text-xl">Search for Trains!</h4>
          <div className="flex w-full justify-between items-center mt-4">
            <aside className="w-[40%]">
              <SelectStation label={"FROM"} />
            </aside>
            <button className="mt-6 text-blue-600">
              <MdSwapHorizontalCircle size={35} />
            </button>
            <aside className="w-[40%]">
              <SelectStation label={"TO"} />
            </aside>
          </div>
          <div className="mt-6 flex justify-between">
            <div>
              <span className="text-sm font-medium text-gray-500">
                Departure Date
              </span>
              <div className="bg-gray-600 rounded-md py-4 text-white px-8">
                <DatePickerDemo />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Quota</span>
              <SelectOption data={Quota} />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Class</span>
              <SelectOption data={Class} />
            </div>
          </div>
          <div className="mt-6">
            <span className="text-slate-400">Fiters</span>
            <div className="flex justify-end gap-8">
              <Filters label={"Flexible with date"} />
              <Filters label={"Disability concession"} />
              <Filters label={"Train with avialable birth"} />
              <Filters label={"Railway Pass concession"} />
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <button className="py-2 px-4 border rounded hover:scale-105 duration-300">
              Try Ask Disha 2.0
            </button>
            <button className="py-3 px-5 bg-blue-600 text-white rounded-lg hover:scale-105 duration-300">
              Search Train
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
