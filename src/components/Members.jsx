import React from "react";

const Members = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-[#0EC9AC] text-2xl ">Our Members</p>
        <p className="text-4xl font-serif">Meet Our Team</p>
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center items-center  gap-12">
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
        </div>{" "}
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
        </div>{" "}
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
        </div>{" "}
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
        </div>
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/database.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Database Security
          </p>
        </div>{" "}
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/globe.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Cloud Security
          </p>
        </div>{" "}
        <div className="min-h-[100px] w-8/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center py-4">
            <img src="src/assets/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-3xl text-[#0EC9AC] font-serif py-4">
            Network Security
          </p>
        </div>
      </div>
    </>
  );
};

export default Members;
