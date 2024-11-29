'use client'
import React, { useState } from 'react';


function NgqiqoCard() {
  return (
    <div className='p-4 bg-white flex flex-col gap-5'>
      <p className='text-gray-500 font-Sora text-2xl'>Creating responsive and efficient applications with:</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='bg-black text-white items-center justify-center flex border-r-2 rounded-bl-md transition transform hover:scale-125 hover:font-semibold hover:mr-3'> React</div>
        <div className='bg-black text-white items-center justify-center flex border-r-2 transition transform hover:scale-125 hover:font-semibold hover:mx-3'> Node.js</div>
        <div className='bg-black text-white items-center justify-center flex border-r-2 transition transform hover:scale-125 hover:font-semibold hover:mx-3'> HTML</div>
        <div className='bg-black text-white items-center justify-center flex border-r-2 rounded-tr-md transition transform hover:scale-125 hover:font-semibold hover:ml-3 h-10'> CSS</div>

      </div>
    </div>
  );
}

function FacebookCard() {
  return (
    <div className='p-4 bg-white flex flex-col gap-5'>
      <p className='text-gray-500 font-Sora text-2xl'>Ensuring seamless connectivity and secure network solutions to keep everything running smoothly.</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-bl-md transition px-4 transform hover:scale-125 hover:font-semibold hover:mr-3'>Configuration</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'>Diagnosis</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'> Security Protocols</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-tr-md transition px-4 transform hover:scale-125 hover:font-semibold hover:ml-3 '> TCP/IP Routing</div>

      </div>
    </div>
  );
}

function CabGoCard() {
  return (
    <div className='p-4 bg-white flex flex-col gap-5'>
      <p className='text-gray-500 font-Sora text-2xl'>Ensuring seamless connectivity and secure network solutions to keep everything running smoothly.</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-bl-md transition px-4 transform hover:scale-125 hover:font-semibold hover:mr-3'>Configuration</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'>Diagnosis</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'> Security Protocols</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-tr-md transition px-4 transform hover:scale-125 hover:font-semibold hover:ml-3 '> TCP/IP Routing</div>

      </div>
    </div>
  );
}

function SwssrCard() {
  return (
    <div className='p-4 bg-white flex flex-col gap-5'>
      <p className='text-gray-500 font-Sora text-2xl'>Ensuring seamless connectivity and secure network solutions to keep everything running smoothly.</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-bl-md transition px-4 transform hover:scale-125 hover:font-semibold hover:mr-3'>Configuration</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'>Diagnosis</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'> Security Protocols</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-tr-md transition px-4 transform hover:scale-125 hover:font-semibold hover:ml-3 '> TCP/IP Routing</div>

      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCard, setActiveCard] = useState<'ngqiqo' | 'facebook' | 'cabgo' | 'swssr' | null>('ngqiqo');

  return (
    <section className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col items-center justify-center mt-16'>
        <p className='text-xs font-semibold'>PROJECTS</p>
        <h1 className='font-bold'>EXPANDING TECH</h1>
        <p className='text-gray-500 text-sm sm:text-base mt-2'>Projects that push my boundaries</p>
      </div>
      
      <main className='mt-8 mb-16 pt-8 px-8 pb-6 grid md:grid-cols-2 items-center gap-2 h-full w-full rounded-md shadow-[0_35px_60px_-15px_rgba(0,6,5,0.3)]'>
        {/* Left Side - Display Card */}
        <div className={`w-full flex items-center ${!activeCard ? 'hidden' : ''} hidden md:flex`}>
          {activeCard === 'ngqiqo' && <NgqiqoCard/>}
        </div>


        {/* Right Side - Buttons */}
        <ul className='w-full flex flex-col gap-0 justify-center items-center'>
          {/* <li onClick={() => setActiveCard('ngqiqo')} className='group justfity-center flex flex-col active:bg-black items-center p-4 hover:bg-black hover:text-white'>
            <h2 className='uppercase font-bold text-2xl font-Sora'>ngqiqo portfolio</h2>
            <div className='text-gray-400 text-md justify-center md:text-lg'>Personal portfolio that showcases skills</div>
            <a href="https://ngqiqo.vercel.app" 
              className='reletive uppercase hidden group-hover:inline-block line-through group-hover:text-orange-500 transition-all duration-300'
            >View
             <span 
                className="absolute inset-0 bottom-0 left-0 h-[2px] bg-orange-500 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"
              ></span>
            </a>
          </li> */}
         <li
  onClick={() => setActiveCard('ngqiqo')}
  className="group grid grid-cols-1 md:grid-cols-[75%,25%] gap-4 items-center p-4 hover:bg-black hover:text-white active:bg-black"
>
  {/* Left Section */}
  <div className="flex flex-col">
    <h2 className="uppercase font-bold text-2xl font-Sora">ngqiqo portfolio</h2>
    <div className="text-gray-400 text-md md:text-lg">
      Personal portfolio that showcases skills
    </div>
  </div>

  {/* Right Section (View Link) */}
  <div className="w-full md:w-1/4 flex justify-center items-center">
    <a
      href="https://ngqiqo.vercel.app"
      className="uppercase text-sm w-full md:w-auto md:text-base hidden group-hover:inline-block md:block line-through group-hover:text-orange-500 transition-all duration-300"
    >
      View
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-orange-500 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"
      ></span>
    </a>
  </div>
</li>


          
        </ul>
      </main>
    </section>
  );
}
