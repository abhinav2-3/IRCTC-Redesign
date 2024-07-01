import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterCard from "./ui/FooterCard";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-16 py-10 w-full h-full bg-gray-800">
      <div className="p-4 mb-8 flex justify-between items-center">
        <figure className="flex gap-4 items-center justify-center">
          <Image src={"/IRCTC.png"} alt="IRCTC Logo" width={50} height={100} />
          <h1 className="text-2xl">IRCTC</h1>
        </figure>
        <div className="flex gap-8">
          <Link
            href={"#"}
            className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href={"#"}
            className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
          >
            <FaFacebookF size={22} />
          </Link>
          <Link
            href={"#"}
            className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            href={"#"}
            className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
          >
            <FaTwitter size={22} />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-8">
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
      </div>
      <div className="flex gap-8 mt-4 justify-center items-center">
        <h1 className=" text-white font-semibold text-center">
          Made by @Abhinav Maurya
        </h1>
        <Link
          href={"https://www.instagram.com/nx.abhinav/"}
          target="_blank"
          className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
        >
          <FaInstagram size={22} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abhinav28/"}
          target="_blank"
          className="p-3 border border-slate-600 rounded-full hover:scale-125 duration-200"
        >
          <FaLinkedin size={22} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
