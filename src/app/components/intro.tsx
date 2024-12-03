import Image from 'next/image'
import React from 'react'

function intro() {
  return (
    
    <section className='flex flex-col items-center justify-center h-full md:gap-5 mb-8'>
      
      <div className='items-center justify-center flex flex-col'>
        <p className='text-xs font-semibold'>INTRO</p>
        <h1 className='font-bold'>WHO AM I</h1>
        <p className='text-gray-500 uppercase text-sm sm:text-base mt-2'>should you even care?</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 rounded-md md:mx-6 p-2 shadow-[0_35px_60px_-15px_rgba(0,6,5,0.3)] w-full my-15 h-full mt-10 py-10 px-10 '>
        <p className='text-md md:text-xl  text-gray-600'>I’m Ngqiqo, a front-end developer on a journey to create and grow. If building the future excites you, then yes—maybe you should.</p>
        <img 
        src="/boy.png" 
        alt=""
        className='rounded-full h-36 w-36 md:justify-center  md:h-48 md:w-48 shadow-lg ml-24' />
      </div>
    </section>
  )
}

export default intro