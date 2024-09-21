import React from "react";

const Members = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-12">
        <p className=" text-cyan-500 text-xl ">Our Members</p>
        <p className="text-4xl ">Meet Our Team</p>
      </div>
      <div className="flex flex-wrap flex-row w-full justify-center items-center px-0 md:px-8 lg:px-12 gap-8 lg:gap-12">
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Kernel Security & Dark Web
           <br />
          <p className="text-xl text-white font-bold">Suryansh Deshwal</p>
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Web Application Security
          <br />
          <p className="text-xl text-white font-bold">Yatharth Singh</p>
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Digital Forensics 
          <br />
          <br />
          <p className="text-xl text-white font-bold ">Rohit Gangwar</p>
          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/security.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Digital Forensics & Network Security 
          <br />
          <p className="text-xl text-white font-bold">Vijay Yadav</p>
          </p>
        </div>
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/database.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Web Application & Cloud Security 
          <br />
          <p className="text-xl text-white font-bold">Aryan Sharma</p>

          </p>
        </div>{" "}
        <div className="h-full md:min-h-[180px] w-10/12 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-slate-800 rounded-lg p-5 flex flex-col  ">
          <div className="w-full flex justify-center ">
            <img src="/globe.png" alt="" width={"50px"} />
          </div>
          <p className="text-center text-xl  text-cyan-500 pt-4 ">
          Reversing & Malware Analysis
          <br />
          <p className="text-xl text-white font-bold">Indu Shekhar Pandey</p>
          </p>
          
        </div>{" "}
        
      </div>
    </>
  );
};

export default Members;
