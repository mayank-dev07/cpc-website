import React from "react";
import { ReactTyped } from "react-typed";
// import Terminal from "./Terminal";

const Home = () => {
  return (
    <>
      <div className=" h-full w-full md:w-1/2 ">
        <div className="text-2xl md:text-5xl lg:text-6xl text-center text-[#0EC9AC] flex justify-center item-center py-6 md: w-full">
          Cyber&nbsp;Peace&nbsp;
          <ReactTyped
            strings={["Security", "Cell"]}
            typeSpeed={70}
            backSpeed={60}
            showCursor={true}
            //               .dollar-cursor {
            //   cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><text x="0" y="12" font-size="12">$</text></svg>'), auto;
            // }

            loop
          />
        </div>

        <div className="text-base md:text-xl text-center  subpixel-antialiased  font-light py-2 md:py-4 px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div className=" h-full w-full md:w-1/2 flex justify-center items-center">
        <img src="src\assets\cyber.png"></img>
      </div>
    </>
  );
};

export default Home;
