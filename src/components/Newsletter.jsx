import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className=" w-full h-full bg-cover bg-no-repeat bg-fixed ">
        <div className="flex flex-col justify-center items-center backdrop-grayscale w-full h-full py-12 gap-6">
          <div className="w-full flex flex-col justify-center items-center gap-4 pt-4">
            <p className=" text-cyan-500 text-2xl ">Our Newsletters</p>
            <p className="text-4xl">Club Preview</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-evenly items-center gap-8">
            <div className="min-h-[280px] w-11/12 sm:w-8/12 md:w-11/12 lg:w-5/12 bg-slate-800 p-5 rounded flex flex-col md:flex-row  rounded-xl gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src="/cpc_paralax.jpg"
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <span className="text-xl text-center font-bold underline underline-offset-4">
                  Heading
                </span>
                <span className="py-3 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla ipsa repellat nemo eligendi iste, blanditiis recusandae
                  neque sapiente minima tempora at nesciunt commodi cum,
                  consectetur labore nostrum id et enim.
                </span>
                <button className="border-[1px] border-slate-700 py-2 text-xl">
                  Preview
                </button>
              </div>
            </div>
            <div className="min-h-[280px]  w-11/12 sm:w-8/12 md:w-11/12 lg:w-5/12 bg-slate-800 p-5 rounded flex flex-col md:flex-row  rounded-xl gap-8">
              <div className="w-full lg:w-1/2">
                <img
                  src="/cpc_paralax.jpg"
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <span className="text-xl text-center font-bold underline underline-offset-4">
                  Heading
                </span>
                <span className="py-3 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla ipsa repellat nemo eligendi iste, blanditiis recusandae
                  neque sapiente minima tempora at nesciunt commodi cum,
                  consectetur labore nostrum id et enim.
                </span>
                <button className="border-[1px] border-slate-700 py-2 text-xl">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
