import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import domain from "../constants/domain";

const Domain = () => {
  useEffect(() => {
    AOS.init();
    console.log(domain);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-transparent bg-clip-text text-cyan-500 text-2xl ">
          Our Domain
        </p>
        <p className="text-4xl ">What We Offer</p>
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center items-center  gap-8 ">
        {domain.map((item, index) => (
          <div
            key={index}
            className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col hover:scale-110 transition-transform duration-500"
          >
            <div className="w-full flex justify-center py-4">
              <img src={item.img} alt="" width={"40px"} />
            </div>
            <p className="w-full flex justify-center items-center text-2xl text-center text-transparent bg-clip-text text-cyan-500  py-4">
              {item.name}
            </p>
            <p className="text-center  text-base ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              reiciendis illo impedit,
            </p>
          </div>
        ))}
        {/* <div className="min-h-[280px] w-10/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded- p-5 flex flex-col  hover:scale-110 transition-transform duration-500">
          <div className="w-full flex justify-center py-4">
            <img src="/database.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-transparent bg-clip-text text-cyan-500  py-4">
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
            <img src="/globe.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-transparent bg-clip-text text-cyan-500  py-4">
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
            <img src="/security.png" alt="" width={"40px"} />
          </div>
          <p className="w-full flex justify-center items-center text-2xl md:text-3xl text-transparent bg-clip-text text-cyan-500  py-4">
            Network&nbsp;Security
          </p>
          <p className="text-center  text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reiciendis illo impedit,
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Domain;
