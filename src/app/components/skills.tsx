'use client'
import React, { useState } from 'react';

function DevelopmentCard() {
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

function NetworkCard() {
  return (
    <div className='p-4 bg-white flex flex-col gap-5'>
      <p className='text-gray-500 font-Sora text-2xl'>Ensuring seamless connectivity and secure network solutions to keep everything running smoothly.</p>
      <div className='grid grid-cols-4 gap-1'>
        <div className='bg-black text-white h-10 text-sm items-center justify-center flex border-r-2 rounded-bl-md transition px-4 transform hover:scale-125 hover:font-semibold hover:mr-3'>Configuration</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'>Diagnosis</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 transition transform px-4 hover:scale-125 hover:font-semibold hover:mx-3'> Security Protocols</div>
        <div className='bg-black text-white text-sm items-center justify-center flex border-r-2 rounded-tr-md transition px-4 transform hover:scale-125 hover:font-semibold hover:ml-3 '> TCP/IP Routing</div>

      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCard, setActiveCard] = useState<'development' | 'networkSecurity' | null>('development');

  return (
    <section className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col items-center justify-center mt-16'>
        <p className='text-xs font-semibold'>SKILLS</p>
        <h1 className='font-bold'>CLIMBING THE TECH LADDER</h1>
        <p className='text-gray-500 text-sm sm:text-base mt-2'>Constant learning, new tech everytime!</p>
      </div>
      
      <main className='mt-8 mb-16 pt-8 px-8 pb-6 flex flex-col md:flex-row items-center gap-4 h-full w-full rounded-md shadow-[0_35px_60px_-15px_rgba(0,6,5,0.3)]'>
        {/* Left Side - Display Card */}
        <div className={`w-full md:w-1/2 flex items-center ${!activeCard ? 'hidden' : ''} hidden md:flex`}>
          {activeCard === 'development' && <DevelopmentCard />}
          {activeCard === 'networkSecurity' && <NetworkCard />}
        </div>

        {/* Right Side - Buttons */}
        <ul className='w-full md:w-1/2 flex flex-col gap-0'>
          <li onClick={() => setActiveCard('development')} className='justify-center hover:bg-black p-4 hover:text-white flex flex-col items-center'>
            <h2 className='uppercase text-2xl font-bold font-Sora'>development</h2>
          </li>
          <li onClick={() => setActiveCard('networkSecurity')} className='justify-center hover:bg-black p-4 hover:text-white flex flex-col items-center'>
            <h2 className='uppercase text-2xl font-bold font-Sora'>Networking</h2>
          </li>
          {/* <button
            onClick={() => setActiveCard('development')}
            className='flex-1 text-black transition bg-[#8e7f9b] hover:bg-[#b4a0da] font-semibold py-4'
          >
            DEVELOPMENT
          </button>

          <button
            onClick={() => setActiveCard('networkSecurity')}
            className='flex-1 bg-[#8e7f9b] hover:bg-[#b4a0da] text-black font-semibold py-4'
          >
            NETWORKING
          </button> */}

          {/* Close Card Button */}
          {activeCard && (
            <button
              onClick={() => setActiveCard('development')}
              className='mt-4 bg-gray-500 uppercase text-white font-bold py-2 '
            >
              Close
            </button>
          )}
        </ul>
      </main>
    </section>
  );
}
