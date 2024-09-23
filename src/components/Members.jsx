import React from "react";

const Members = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-12">
        <p className=" text-cyan-500 text-xl ">Our Members</p>
        <p className="text-4xl ">Meet Our Team</p>
      </div>
      <div className="flex flex-wrap flex-row w-full h-fit justify-center items-center px-0 md:px-8 gap-8 lg:gap-12">
      <div className="hover-container  ">
  <div className="content-default bg-[#030213] ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <p className="text-xl text-white font-bold">Suryansh Deshwal</p>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
  <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500  ">
      Kernel Security & Dark Web
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Suryansh Deshwal</p>
  </div>
</div>

</div>

<div className="hover-container ">
  <div className="content-default bg-[#030213] ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <p className="text-xl text-white font-bold">Yatharth Singh</p>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
  <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500 pt-4 ">
    Web Application Security
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Yatharth Singh</p>
  </div>
</div>

</div>
        <div className="hover-container ">
  <div className="content-default bg-[#030213] ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <p className="text-xl text-white font-bold">Rohit Gangwar</p>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
    <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500 pt-4  ml-6">
    Digital Forensics
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Rohit Gangwar</p>
  </div>
</div>

</div>
        <div className="hover-container ">
  <div className="content-default bg-[#030213] ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <p className="text-xl text-white font-bold">Vijay Yadav</p>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
  <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500  ">
    Digital Forensics & Network Security
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Vijay Yadav</p>
  </div>
</div>

</div>
             <div className="hover-container ">
  <div className="content-default bg-[#030213] ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <p className="text-xl text-white font-bold">Aryan Sharma</p>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
  <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500  ">
    Web Application & Cloud Security 
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Aryan Sharma</p>
  </div>
</div>

</div>
        <div className="hover-container ">
  <div className="content-default bg-[#030213]  ">
    <div className="flex flex-col items-center gap-4">
      <img
        src="./img4.jpeg"
        width="120px"
        alt="Profile"
        className="rounded-full"
      />
      <div className="text-xl text-white font-bold justify-center items-center">
        <p>Indu Shekhar</p>
        <p className="ml-8">Pandey</p>
      </div>
    </div>
  </div>
  
  <div className="content-hover">
  <img
    src="./img4.jpeg"
    className="w-full h-full object-cover "
    alt="Profile Hover relative"
  />
  <div className="w-full h-1/3 flex flex-col backdrop-blur-sm bg-[#030213]/70 absolute bottom-0">
    <p className="text-center text-sm text-cyan-500  ">
    Reversing & Malware Analysis
    </p>
    <p className="text-sm text-center w-full text-white font-bold ">Indu Shekhar Pandey</p>
  </div>
</div>

</div>
        
      </div>
    </>
  );
};

export default Members;

