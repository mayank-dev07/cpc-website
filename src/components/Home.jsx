import React from "react";
import { ReactTyped } from "react-typed";
import MyTerminal from "./MyTerminal";
import Encryption from "./Encryption";
// import Terminal from "./Terminal";

const Home = () => {
  return (
    <>
      <div className="h-full w-11/12 md:w-10/12 lg:w-1/2 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-full h-[347px]
           flex flex-col justify-center items-center"
          >
            <MyTerminal />
          </div>
        </div>
      </div>
      {/* <div className=" h-full w-full md:w-1/2 mt-8 md:mt-0"> */}
      {/* <Encryption /> */}
      {/* </div> */}
    </>
  );
};

export default Home;
