import Image from 'next/image'
import React from 'react'

function intro() {
  return (
    
    <section className='flex flex-col items-center justify-center h-full sm:p-8 lg:p-16 mx-8 mb-8'>
      
      <div className='items-center justify-center flex flex-col'>
        <p className='text-xs font-semibold'>INTRO</p>
        <h1 className='font-bold'>WHO AM I</h1>
        <p className='text-gray-500 text-sm sm:text-base mt-2'>Should you even care?</p>
      </div>
      
      <div className='grid grid-cols-2 gap-4 rounded-md md:mx-6 p-2 px-8 shadow-[0_35px_60px_-15px_rgba(0,6,5,0.3)] w-full my-15 mx-8 h-full mt-10 pt-10 '>
        <p className='text-xl  text-gray-600'>I’m Ngqiqo, a front-end developer on a journey to create and grow. If building the future excites you, then yes—maybe you should.</p>
        <img 
        src="/boy.png" 
        alt=""
        className='rounded-full h-38 w-38 md:justify-end sm:h-40 sm:w-40 md:h-48 md:w-48 shadow-lg ml-16' />
      </div>
    </section>
  )
}

export default intro