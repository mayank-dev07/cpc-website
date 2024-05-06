import React from "react";
import { ReactTyped } from "react-typed";
import MyTerminal from "./MyTerminal";
// import Terminal from "./Terminal";

const Home = () => {
  return (
    <>
      <div className="h-full bg-cover w-full md:w-1/2 flex justify-between items-center">
        <div className="w-full h-full">
          <div
            className=" w-full h-[347px]
           flex flex-col"
          >
            <MyTerminal />
          </div>
        </div>
      </div>
      <div className=" h-full w-full md:w-1/2 mt-8 md:mt-0">
        <div className="text-2xl md:text-3xl lg:text-5xl text-center text-[#0EC9AC] flex justify-center item-center pt-8 md:py-6 md: w-full">
          Cyber&nbsp;Peace&nbsp;
          <ReactTyped
            strings={["Security", "Cell"]}
            typeSpeed={70}
            backSpeed={60}
            showCursor={true}
            loop
          />
        </div>

        <div className="text-base md:text-lg text-center  subpixel-antialiased  font-light py-2 md:py-4 px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </>
  );
};

export default Home;
