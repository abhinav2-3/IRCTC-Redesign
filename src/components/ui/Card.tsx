"use client";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";

interface CardProps {
  imgSrc: string; // Use lowercase 'string' for TypeScript type
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, desc }) => {
  return (
    <m.div
      initial={{ opacity: 1, y: 1 }}
      whileHover={{ opacity: 1, scale: 0.85 }}
      transition={{ duration: 0.2 }}
      className="w-[30%] p-8 rounded-xl bg-gray-800 grid place-items-center gap-4 hover:scale-90 duration-200"
    >
      <Image
        src={imgSrc}
        alt={title}
        width={500}
        height={300}
        className="hover:scale-110 duration-200 w-full rounded-lg object-contain"
      />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-slate-400 text-center">{desc}</p>
        <button className="bg-blue-600 px-8 py-2 rounded-lg hover:bg-blue-800 duration-300">
          Read more
        </button>
      </div>
    </m.div>
  );
};

export default Card;
