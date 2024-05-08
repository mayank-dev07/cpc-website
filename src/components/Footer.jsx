import React from "react";
import { Instagram, Globe, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full mt-auto flex flex-col md:flex-row z-20 h-full py-4 bg-slate-800 text-transparent bg-clip-text text-cyan-500 justify-center md:justify-between items-center gap-4 w-full font-medium  px-12">
      <div className=" w-full flex justify-center md:justify-start">
        $~Cyber&nbsp;Peace&nbsp;Center
      </div>
      <div className="flex justify-center md:justify-end md:w-max ">
        <div className=" text-cyan-500 px-4">
          <Globe />
        </div>
        <div className="text-cyan-500 px-4">
          <Instagram />
        </div>
        <div className="text-cyan-500 px-4">
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
