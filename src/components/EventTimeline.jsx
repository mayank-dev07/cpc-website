import React, { useState } from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Clock, MapPin } from "lucide-react";
const EventTimeline = () => {
  return (
    <>
      <div className="w-10/12 md:w-1/2 h-full flex justify-center items-center ">
        <Timeline
          items={[
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                      25 April 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                     Null
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />

                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,
              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        8 Januray 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      BreachVerse
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        7 December 2023
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Expert session:Dr. Kamakshi Sharma
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />

                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        October 2023
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Awareness Month
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        27 May 2023
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      CySec 1.0
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />

                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        8 March 2023
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Foundation Day
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />
                    </div>
                  </div>
                </>
              ),
            },
            {
              color: "#06b6d4",
              dot: <Clock size={40} className="bg-[#030213] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-cyan-500 text-lg rounded-lg shadow-md shadow-cyan-500 px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#030213] border-[#030213] rounded-lg text-sm md:text-base">
                        5 December 2022
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Expert session:Mr. Sanchay Singh
                    </span>
                    <div className="w-full flex flex-col md:flex-row justicy-evenly items-center gap-4">
                      <img
                        src="test2.jpg"
                        alt=""
                        className="w-full md:w-1/2 h-52 bg-cover"
                      />

                      <p className="px-1 text-slate-400 text-sm md:text-base w-full md:w-1/2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, eaque nihil eligendi eum, laudantium
                        recusandae tempora porro, esse quod omnis ducimus
                        nesciunt sit iste necessitatibus rem repellat sequi.
                        Repudiandae aperiam officia deserunt quo cumque nam
                        aspernatur possimus eveniet sapiente laudantium magnam
                        voluptates ab odio voluptatibus, eius dolorem. Odit, nam
                        nobis.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};
export default EventTimeline;
