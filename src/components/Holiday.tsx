"use client";
import React from "react";
import Card from "./ui/Card";
import { cardDetails } from "@/utils/data";
import { motion as m } from "framer-motion";

const Holiday = () => {
  return (
    <div className="w-full h-full bg-gray-950 px-16 py-12 ">
      <m.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold capitalize text-center"
      >
        Plan your next Holiday
      </m.h1>
      <m.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 1, staggerDirection: -1 }}
        className="flex gap-12 mt-8 flex-wrap justify-center overflow-hidden"
      >
        {cardDetails?.map((item, indx) => {
          return (
            <Card
              key={indx}
              imgSrc={item.imgSrc}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </m.div>
    </div>
  );
};

export default Holiday;
