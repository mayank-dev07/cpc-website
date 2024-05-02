import React, { useState, useEffect } from 'react';

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

    console.log(difference)
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
      <div className='flex justify-center gap-8 h-full'>
        <div className='flex flex-col justify-center w-100 px-2 py-2 h-[50px] gap-5'>
        DAYS <div className='border-2 p-5'>
           
           {days}
        </div></div>
        <div className='flex flex-col justify-center w-100 px-2 py-2 h-[50px] gap-5 uppercase '>
        hours
        <div className='border-2 p-5'>
        {hours} 
        </div></div>
        <div className='flex flex-col justify-center w-100 px-2 py-2 h-[50px] gap-5 uppercase '>
        minutes
        <div className='border-2 p-5'>
        {minutes} 
        </div></div>
        <div className='flex flex-col justify-center w-100 px-2 py-2 h-[50px] gap-5 uppercase '>
        seconds
        <div className='border-2 p-5'>
        {seconds} 
        </div></div>

    </div>
  );
};

export default Countdown;
