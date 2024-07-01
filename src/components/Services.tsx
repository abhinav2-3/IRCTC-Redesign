"use client";
import React from "react";
import { serviceIcons, serviceTitles } from "@/utils/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-grid bg-black bg-no-repeat bg-center bg-cover w-full h-screen p-12">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-bold text-center"
      >
        Our Other Popular Places
      </motion.h1>
      <div className="w-full flex gap-8 flex-wrap justify-center mt-8">
        {serviceTitles?.map((item, idx) => {
          const Icon = serviceIcons[idx];
          return (
            <Link
              href={"#"}
              key={idx}
              className="bg-gray-800 p-12 w-56 rounded-lg grid place-items-center gap-4 hover:scale-110 duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1.3 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-6 rounded-lg grid place-items-center"
              >
                <Icon size={45} />
              </motion.div>
              <span className="text-center">{item}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
