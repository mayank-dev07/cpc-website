import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import Domain from "./Domain";
import Home from "./Home";
import Members from "./Members";
import Events from "./Events";
import Countdown from "./Countdown";
import EventTimeline from "./EventTimeline";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col relative justify-center items-center">
        <ScrollSpy offsetTop={"64px"}>
          <div
            id="home"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center   px-2 md:px-12 gap-4 md:gap-12 py-12 md:py-16 md:py-0"
          >
            <Home />
          </div>

          <div className="w-full h-full flex justify-center items-center bg-cover ">
            <div className="h-full py-16 flex flex-col justify-center items-center gap-16 backdrop-grayscale w-full ">
              <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 py-10 md:py-16">
                <p className="text-[#0EC9AC] text-4xl md:text-6xl text-center">
                  Welcome To KIET
                </p>
                <p className="text-4xl  md:text-7xl  text-slate-300 text-center">
                  Cyber Cell Team
                </p>
              </div>
            </div>
          </div>

          <div
            id="domain"
            className="h-full py-20 flex flex-col justify-center items-center gap-8 z-50"
          >
            <Domain />
          </div>
          <div
            id="event"
            className="h-full flex flex-col justify-center items-center py-16"
          >
            <Events />
          </div>
          <div
            id="timeline"
            className="h-full py-16 flex flex-col justify-center items-center gap-8"
          >
            <div></div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <p className="text-[#0EC9AC] text-2xl ">Our Timeline</p>
              <p className="text-4xl ">About Club</p>
            </div>
            <EventTimeline />
          </div>

          <div
            id="newsletter"
            className="h-full pt-12 flex flex-col justify-center items-center gap-8"
          >
            <Newsletter />
          </div>

          <div
            id="members"
            className="h-full py-16 flex flex-col justify-center items-center gap-8"
          >
            <Members />
          </div>
        </ScrollSpy>
      </div>
    </>
  );
};

export default Main;
