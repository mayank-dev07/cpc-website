import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Domain = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-[#0EC9AC] text-2xl ">Our Domain</p>
        <p className="text-4xl ">What We Offer</p>
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center items-center  gap-8 ">
        <div className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col hover:scale-110 transition-transform duration-500">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-[#0EC9AC]  py-4">
            Network&nbsp;Security
          </p>
          <p className="text-center  text-base ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit,
          </p>
        </div>
        <div className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col  hover:scale-110 transition-transform duration-500">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/database.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-[#0EC9AC]  py-4">
            Database&nbsp;Security
          </p>
          <p className="text-center  text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit,
          </p>
        </div>{" "}
        <div
          // data-aos="zoom-in-up"
          className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col  hover:scale-110 transition-transform duration-500"
        >
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/globe.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-[#0EC9AC]  py-4">
            Cloud&nbsp;Security
          </p>
          <p className="text-center  text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit,
          </p>
        </div>{" "}
        <div
          // data-aos="zoom-in-up"
          className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col  hover:scale-110 transition-transform duration-500"
        >
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-[#0EC9AC]  py-4">
            Network&nbsp;Security
          </p>
          <p className="text-center  text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit,
          </p>
        </div>
      </div>
    </>
  );
};

export default Domain;
