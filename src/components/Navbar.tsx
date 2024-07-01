"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";
import { navItems } from "@/utils/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <m.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[5.5rem] bg-hero  bg-no-repeat bg-cover backdrop-blur-lg"
    >
      <div className="relative z-10 p-5 px-16 inset-0 bg-black/90 flex justify-between items-center">
        <Image src={"/IRCTC.png"} width={40} height={100} alt="Logo" />
        <m.nav
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, delayChildren: 0.3 }}
          className="flex gap-8"
        >
          {navItems?.map((item, index) => {
            return (
              <Link
                href={"#"}
                key={index}
                className="transition-transform hover:-translate-y-2 duration-200 "
              >
                {item}
              </Link>
            );
          })}
        </m.nav>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="flex gap-6 items-center"
        >
          <Link href={"#"} className="relative">
            <span className="text-lg">Ask Disha</span>
            <span className="px-2 py-[2px] rounded-md text-sm bg-red-600 text-white absolute -top-5 -right-1">
              2.0
            </span>
          </Link>
          <Link href={"#"} className="bg-blue-700 px-4 py-2 rounded-md">
            Login
          </Link>
        </m.div>
      </div>
    </m.header>
  );
};

export default Navbar;
