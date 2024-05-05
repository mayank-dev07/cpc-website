import React, { useState } from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Clock, MapPin } from "lucide-react";
const EventTimeline = () => {
  return (
    <>
      <div className="w-10/12 md:w-1/2 h-full flex justify-center items-center">
        <Timeline
          items={[
            {
              color: "#0EC9AC",
              dot: <Clock size={40} className="bg-[#00142C] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-[#0EC9AC] text-lg rounded-lg shadow-md shadow-[#0EC9AC] px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#00142C] border-[#00142C] rounded-lg text-sm md:text-base">
                        29 May 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Heading
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
              color: "#0EC9AC",
              dot: <Clock size={40} className="bg-[#00142C] " />,
              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-[#0EC9AC] text-lg rounded-lg shadow-md shadow-[#0EC9AC] px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#00142C] border-[#00142C] rounded-lg text-sm md:text-base">
                        29 May 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Heading
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
              color: "#0EC9AC",
              dot: <Clock size={40} className="bg-[#00142C] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-[#0EC9AC] text-lg rounded-lg shadow-md shadow-[#0EC9AC] px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#00142C] border-[#00142C] rounded-lg text-sm md:text-base">
                        29 May 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Heading
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
              color: "#0EC9AC",
              dot: <Clock size={40} className="bg-[#00142C] " />,

              children: (
                <>
                  <div className="h-full mb-4 w-full flex flex-col bg-slate-800 text-[#0EC9AC] text-lg rounded-lg shadow-md shadow-[#0EC9AC] px-3 md:px-8 py-4">
                    <div className="w-full flex justify-between items-center">
                      <span className=" w-fit px-3 py-1 bg-[#00142C] border-[#00142C] rounded-lg text-sm md:text-base">
                        29 May 2024
                      </span>
                      <div className="flex gap-4 text-sm md:text-base">
                        <MapPin />
                        E-Block 301
                      </div>
                    </div>
                    <span className=" font-bold px-1 py-2 text-lg md:text-xl text-center">
                      Heading
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
          ]}
        />
      </div>
    </>
  );
};
export default EventTimeline;
