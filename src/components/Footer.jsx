import React from "react";
import { Instagram, Globe, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className=" mt-auto flex z-20 h-16 bg-slate-800 border-[1px] border-[#00142C] text-[#0EC9AC] justify-between items-center gap-8 w-full font-medium  px-12">
      <div>$~Cyber Peace Center</div>
      <div className="flex justify-center md:justify-end md:w-max mt-2 md:mt-0 me-2">
        <div className=" text-primary mx-4">
          <Globe />
        </div>
        <div className="text-primary mx-4">
          <Instagram />
        </div>
        <div className="text-primary mx-4">
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
