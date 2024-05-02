import React from "react";
import { CalendarDays, MapPin } from 'lucide-react';
import Countdown from "./Countdown";

const Events = () => {
  return (
    <>
      <div className=" w-full h-full bg-cover bg-no-repeat bg-[url('src/assets/cpc_paralax.jpg')] ">
      <div className="flex flex-col justify-center items-center backdrop-grayscale w-full h-full">

      <div className="h-full w-full md:w-1/2 py-2 flex flex-col gap-16 ">

    <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-[#0EC9AC] text-2xl  ">Our Events</p>
      </div>
        <div className="  text-center flex gap-10 justify-center ">
        <div className="flex gap-4 ">
    <CalendarDays />
yg87ig8uig89h9
        </div>
        <div className="flex gap-1 py-2 border-[0.5px] ">

        </div>
        <div className="flex gap-4">
       <MapPin/>
       y8g87gi78
        </div>

      </div>
      <div className="  text-center backdrop-blur-sm font-bold  text-6xl  ">
         <p className="">BOOTCAMP</p>
          
      </div>
      <div className=" text-center" >
        <p>Our festival annually gathers popular groups, performers, DJs, musicians, and
        their fans from all over the world in one place. Enjoy your favorite music live at Event Festival!</p>
      </div>
     
     <div className="flex justify-center items-center">
          <button className="bg-[#0EC9AC] w-52 py-3 font-semibold rounded-sm shadow-md shadow-[#0EC9AC] ">REGISTER</button>
     </div>
     <Countdown targetDate={"2024-05-07T12:12:12"} />

          
      
        </div>
      </div>
      </div>


      {/* <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-[#0EC9AC] text-2xl ">Our Events</p>
      </div>
      <div className="h-[500px]  w-full flex flex-col md:flex-row ">
        <div className="w-1/2 "></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="py-8 w-10/12 text-center text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, error! Sequi dolore officia nesciunt sed dicta
          </div>
          <button className="border-2 border-[#0EC9AC] rounded-lg px-4 py-2 text-xl">
            Register -&gt;
          </button>
        </div>

      </div> */}
    </>
  );
};

export default Events;
