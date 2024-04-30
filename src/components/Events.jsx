import React from "react";

const Events = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-[#0EC9AC] text-2xl ">Our Events</p>
        {/* <p className="text-4xl font-serif">Meet Our Team</p> */}
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
      </div>
    </>
  );
};

export default Events;
