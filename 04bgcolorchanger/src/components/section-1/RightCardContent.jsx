import React from 'react'
import {ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
     <div className='  p-8 absolute h-full w-full top-0 left-0  flex flex-col justify-between'>
                <h2 className='bg-white h-10 w-10 rounded-full text-xl font-semibold flex justify-center items-center '>
                    {props.id+1}
                </h2>
            <div>
                 <p className='mb-6 text-white  w-[90]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores animi praesentium, est molestias deserunt recusandae.
                </p>
                <div className='flex justify-between '>
                    <button className='bg-blue-700 text-white  px-6 py-2 rounded-full font-light'> 
                        {props.tag}
                    </button>
                    <button className='bg-blue-700 text-white  px-3 py-2 rounded-full'> <ArrowRight/> </button>
                </div>
            </div>
            </div>
    
  )
}

export default RightCardContent