// "use client";
import React from "react";
const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center  w-full h-full">
      <div className="w-full flex items-start justify-center ">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full relative"
          src="/encryption.webm"
        />
        <div className="w-full h-full flex justify-center items-center bg-cover absolute">
          <div className="h-full  flex flex-col justify-center items-center gap-16  w-full ">
            <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 py-10 md:py-16">
              <p className="text-transparent bg-clip-text text-cyan-500 text-4xl md:text-6xl text-center">
                Welcome To KIET
              </p>
              <p className="text-4xl  md:text-7xl  text-slate-300 text-center">
                Cyber Cell Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encryption;
