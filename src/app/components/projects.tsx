import React from 'react'

const projects = () => {
  return (
    <section className='flex flex-col h-full w-full justify-center items-center pt-16 my-16'>
      <div className='flex flex-col items-center'>
      <p className='text-xs font-semibold'>PROJECTS</p>
        <h1 className='font-bold'>CRAFTING WITH CODE</h1>
        <p className='text-gray-500 text-sm sm:text-base mt-2'>Projects that push my boundaries</p>
      </div>
      <div className='grid grid-cols-2 rounded-md my-12 px-8 grap-6 items-center justify-center w-full h-40 shadow-[0_35px_60px_-15px_rgba(0,6,5,0.3)]'>
        <div className='justify-center items-center'>description</div>
        <div className='flex flex-col items-center justify-center'>
          <p>Project 1</p>
          <p>Project 2</p>
          <p>Project 3</p>
          <p>Project 4</p>
          <p>Project 5</p>
          <button className='cursor-pointer bg-blue-300 w-full rounded-md px-2 '>project 6</button>
          
        </div>
      </div>

    </section>
  )
}

export default projects