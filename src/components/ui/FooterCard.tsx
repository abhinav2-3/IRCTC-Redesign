import { footer } from "@/utils/data";
import Link from "next/link";
import React from "react";

const FooterCard = () => {
  return (
    <div className="w-[23%]">
      <span className="text-blue-600 mt-8 mb-6">Company</span>
      <div className="w-full flex flex-col gap-4">
        {footer?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col text-slate-400 hover:text-slate-300 duration-200"
            >
              <Link href="#">{item}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCard;
