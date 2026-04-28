import React from 'react'
import {ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between  '>

      <div className='p-7'>
        <h3 className='text-4xl font-bold mb-7'> Prospective <br />
              <span className='italic   
              bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-pink-500 
              bg-clip-text text-transparent'
              >
                customer </span> <br />
              segmentation
        </h3>

        <p className=' font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem distinctio laborum assumenda hic, consequuntur ex doloribus, excepturi soluta cumque vel voluptatibus totam! At quidem maiores, distinctio quisquam ex placeat!</p>
        </div>
      
      <div className='mb-7' > <ArrowUpRight  size={70} />  </div>

    </div>
  )
}

export default LeftContent