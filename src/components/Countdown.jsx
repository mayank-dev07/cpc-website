import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  // Convert the targetDate string to a Date object
  const targetDateTime = new Date(targetDate);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = targetDateTime - new Date();
    let timeLeft = {};
   console.log(difference); 

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>
    {timeLeft.seconds>0 ?  
      <div className="flex justify-center gap-2 md:gap-8 h-[0px]">
        <div className="flex flex-col items-center justify-center w-100 px-2 py-2 h-[50px] gap-5 font-bold">
          DAYS{" "}
          <div className="border-2 p-4 w-[65px] text-center text-2xl font-bold bg-gray-800 border-gray-800 rounded-md shadow-md shadow-[#0EC9AC] text-[#0EC9AC]">
            {days}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-100 px-2 py-2 h-[50px] gap-5 font-bold uppercase ">
          hours
          <div className="border-2 p-4 w-[65px] text-center text-2xl font-bold bg-gray-800 border-gray-800 rounded-md shadow-md shadow-[#0EC9AC] text-[#0EC9AC]">
            {hours}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-100 px-2 py-2 h-[50px] gap-5 font-bold uppercase ">
          minutes
          <div className="border-2 p-4 w-[65px] text-center text-2xl font-bold bg-gray-800 border-gray-800 rounded-md shadow-md shadow-[#0EC9AC] text-[#0EC9AC]">
            {minutes}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-100 px-2 py-2 h-[50px] gap-5 font-bold uppercase ">
          seconds
          <div className="border-2 p-4 w-[65px] text-center text-2xl font-bold bg-gray-800 border-gray-800 rounded-md shadow-md shadow-[#0EC9AC] text-[#0EC9AC]">
            {seconds}
          </div>
        </div>
      </div> :
      <div className="w-full h-full flex justify-center  ">
      <div className=" flex justify-center items-center px-6 py-3 font-bold bg-gray-800 border-gray-800 rounded-md shadow-md shadow-[#0EC9AC] text-[#0EC9AC]">

      <p>EVENT IS GOING 0N ... </p>
      </div>
       
      </div> }
      </>
  );
};

export default Countdown;
