// Main.js
import React from 'react';
import ScrollSpy from "react-ui-scrollspy";
import Domain from './Domain';
import Home from './Home';
import Members from './Members';

const Main = () => {
  return (
    <ScrollSpy offsetTop={"64px"}>
      <div id="first" className='min-h-screen flex flex-col md:flex-row justify-center items-center  w-full  px-8 md:px-12 gap-4 md:gap-12 py-12 md:py-16 md:py-0'>
       <Home/>
      </div>

      <div id="second" className='min-h-screen py-12  flex flex-col justify-center items-center gap-16'>
   <Domain/>
      </div>


      <div id="members" className='min-h-screen flex flex-col justify-center items-center gap-16'>
   <Members/>
      </div>
    </ScrollSpy>
  );
};

export default Main;
