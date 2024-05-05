import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Countdown from "./Countdown";

const Events = () => {
  return (
    <>
      <div className=" w-full h-full bg-cover bg-no-repeat bg-fixed bg-[url('cpc_paralax.jpg')]">
        <div className="flex flex-col justify-center items-center backdrop-grayscale w-full h-full py-12">
          <div className="h-full w-full md:w-1/2 py-4 flex flex-col gap-12 ">
            <div className="  text-center flex gap-6 md:gap-10 justify-center ">
              <div className="flex gap-4 ">
                <CalendarDays />
                29 May 2024
              </div>
              <div className="flex gap-1 py-2 border-[0.5px] "></div>
              <div className="flex gap-4">
                <MapPin />
                E-Block 301
              </div>
            </div>
            <div className="w-full  text-center  font-bold  text-6xl">
              <p className="w-full text-[#0EC9AC] text-5xl md:text-7xl ">
                BOOTCAMP
              </p>
              {/* <p className="text-5xl md:text-7xl text-gray-500"> EVENTS</p> */}
            </div>
            <div className=" text-center  w-full flex justify-center">
              <p className="w-11/12">
                Our festival annually gathers popular groups, performers, DJs,
                musicians, and their fans from all over the world in one place.
                Enjoy your favorite music live at Event Festival!
              </p>
            </div>

            <div className="flex justify-center items-center">
              <button className="bg-[#0EC9AC] w-52 py-3 font-semibold rounded-sm ">
                REGISTER
              </button>
            </div>
            <div className="h-full w-full pt-6">
              <Countdown targetDate={"2024-05-07T12:12:12"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
