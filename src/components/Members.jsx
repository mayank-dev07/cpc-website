import React from "react";

const Members = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-12">
        <p className="text-[#0EC9AC] text-2xl ">Our Members</p>
        <p className="text-4xl ">Meet Our Team</p>
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center items-center px-0 md:px-8 lg:px-12 gap-8 lg:gap-12">
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Network Security
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Network Security
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Network Security
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Network Security
          </p>
        </div>
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/database.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Database Security
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/globe.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Cloud Security
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl text-[#0EC9AC] pt-4 ">
            Network Security
          </p>
        </div>
      </div>
    </>
  );
};

export default Members;
