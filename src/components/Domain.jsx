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
        <p className="text-4xl font-serif">What We Offer</p>
      </div>
      <div
        className="flex flex-wrap flex-row w-full justify-center items-center  gap-12"
        // data-aos="zoom-in"
        // data-aos-duration="1500"
      >
        <div
          // data-aos="zoom-in-up"
          className="min-h-[400px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col hover:scale-110 transition-transform duration-500"
        >
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
          <p className="text-center font-serif text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit, ducimus quae consequatur enim aliquam,
            nesciunt laboriosam, fuga odit excepturi beatae debitis. Animi neque
            laborum voluptatum aut optio?
          </p>
        </div>
        <div className="min-h-[400px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  hover:scale-110 transition-transform duration-500">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/database.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Database Security
          </p>
          <p className="text-center font-serif text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit, ducimus quae consequatur enim aliquam,
            nesciunt laboriosam, fuga odit excepturi beatae debitis. Animi neque
            laborum voluptatum aut optio?
          </p>
        </div>{" "}
        <div
          // data-aos="zoom-in-up"
          className="min-h-[400px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  hover:scale-110 transition-transform duration-500"
        >
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/globe.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Cloud Security
          </p>
          <p className="text-center font-serif text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit, ducimus quae consequatur enim aliquam,
            nesciunt laboriosam, fuga odit excepturi beatae debitis. Animi neque
            laborum voluptatum aut optio?
          </p>
        </div>{" "}
        <div
          // data-aos="zoom-in-up"
          className="min-h-[400px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  hover:scale-110 transition-transform duration-500"
        >
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
          <p className="text-center font-serif text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit, ducimus quae consequatur enim aliquam,
            nesciunt laboriosam, fuga odit excepturi beatae debitis. Animi neque
            laborum voluptatum aut optio?
          </p>
        </div>
      </div>
    </>
  );
};

export default Domain;
