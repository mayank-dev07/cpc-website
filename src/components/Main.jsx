import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import Domain from "./Domain";
import Home from "./Home";
import Members from "./Members";
import Events from "./Events";
import Countdown from "./Countdown";
import EventTimeline from "./EventTimeline";
import Newsletter from "./Newsletter";
import ParticleWave from "./Particles";
import Encryption from "./Encryption";

const Main = () => {
  return (
    <>
      <div className="fixed h-full w-full flex justify-center items-center">
        <img
          src="/cpclogo.png"
          alt=""
          className="opacity-80 md:opacity-20 h-1/2 md:h-full w-full md:w-1/2 bg-cover mt-20 xl:mt-0 flex items-center z-50"
        />
        {/* <ParticleWave /> */}
        <video
          autoPlay
          muted
          loop
          className="rotate-180 opacity-90 absolute flex justify-center items-center  h-full w-full z-[1] object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className="w-full h-full flex flex-col relative justify-center items-center">
        <ScrollSpy offsetTop={"64px"}>
          <div
            id="home"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center px-2 md:px-6 gap-10 md:gap-16 py-20  md:py-0"
          >
            <Home />
          </div>

          <Encryption />
          <div
            id="domain"
            className="h-full py-20 flex flex-col justify-center items-center gap-8 z-50"
          >
            <Domain />
          </div>
          <div
            id="event"
            className="h-full flex flex-col justify-center items-center py-8 md:py-16"
          >
            <Events />
          </div>
          <div
            id="timeline"
            className="h-full flex flex-col justify-center items-center gap-8 backdrop-grayscale-0 py-4 md:py-6"
          >
            <div className="w-full flex flex-col justify-center items-center gap-4 mb-20">
              <p className=" text-cyan-500 text-2xl pt-16">Our Timeline</p>
              <p className="text-4xl ">About Club</p>
            </div>
            <EventTimeline />
          </div>

          <div
            id="newsletter"
            className="h-full flex flex-col justify-center items-center gap-8 py-4 md:py-12"
          >
            <Newsletter />
          </div>

          <div
            id="members"
            className="h-full py-10 md:py-16 flex flex-col justify-center items-center gap-8"
          >
            <Members />
          </div>
          {/* <div className="w-full h-full "> */}
          {/* <div className="w-full h-full z-[-10] opacity-100 absolute flex items-center justify-center bg-cover"> */}
          {/* <video
            className="w-screen h-[700px] transform object-contain"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          /> */}
          {/* </div> */}
          {/* </div> */}
        </ScrollSpy>
      </div>
    </>
  );
};

export default Main;
