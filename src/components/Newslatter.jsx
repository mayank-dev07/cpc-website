import { px } from 'framer-motion'
import React from 'react'

export const Newslatter = () => {
  return (
    <div className='flex flex-col justify-center items-center  h-full text-4xl  font-serif gap-16
    '>NEWSLETTER
    <div className='w-full flex justify-evenly items-center gap-6'>

    <div className='w-5/12 flex justify-center items-center py-4 bg-green-200 gap-6'>
     <div className='w-1/2'>
        <img src='database.png' />
     </div>
     <div className='flex text-base font-sans w-1/2'>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</span>
     </div>
    </div>
    <div className='w-5/12 flex justify-center items-center py-16 h-full'>
     <div className=''>
        <img src='database.png' />
     </div>
     <div className='flex text-base font-sans '>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</span>
     </div>
    </div>
    </div>
    </div>
  )
}
