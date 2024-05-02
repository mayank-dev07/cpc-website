import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import Domain from "./Domain";
import Home from "./Home";
import Members from "./Members";
import Events from "./Events";
import Countdown from "./Countdown";

const Main = () => {
  return (
    <ScrollSpy offsetTop={"64px"}>
      <div
        id="first"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center  w-full  px-8 md:px-12 gap-4 md:gap-12 py-12 md:py-16 md:py-0 "
      >
        <Home />
      </div>

      <div className="w-full h-[500px]   bg-cover flex justify-center items-center  bg-fixed bg-[url('src/assets/test2.jpg')]">
        <div className="h-full py-8 flex flex-col justify-center items-center gap-16 backdrop-blur-sm w-full ">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <p className="text-[#0EC9AC] text-6xl text-center">
              Welcome To KIET
            </p>
            <p className="text-7xl font-serif text-slate-300 text-center">
              Cyber Peace Team
            </p>
          </div>
        </div>
      </div>

      <div
        id="second"
        className="h-full py-8  flex flex-col justify-center items-center gap-16"
      >
        <Domain />
      </div>

      <div
        id="event"
        className="h-full py-32 flex flex-col justify-center items-center gap-16"
      >
        <Events />
      </div>

      <div
        id="members"
        className="h-full py-32 flex flex-col justify-center items-center gap-16"
      >
        <Members />
      </div>
    </ScrollSpy>
  );
};

export default Main;
