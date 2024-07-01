"use client";
import React from "react";
import { motion } from "framer-motion";

const Assistance = () => {
  return (
    <div className="bg-agent bg-no-repeat bg-center bg-cover w-full h-96 bg-black/30 flex justify-center flex-col pl-20">
      <motion.h1
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold"
      >
        Have a question or need
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold"
      >
        assistance ? We are here to help.
      </motion.h1>
      <motion.button
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-blue-600 py-3 px-6 rounded-lg w-40 mt-8 hover:bg-blue-700 duration-200 hover:scale-105"
      >
        Call 14646
      </motion.button>
    </div>
  );
};

export default Assistance;
