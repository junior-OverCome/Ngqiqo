'use client'
import React from 'react'
import { useState, useEffect } from 'react'

// const scroll = () => {
//   return (
//     <div>scroll</div>
//   )
// }

// export default scroll
export default function scroll(){
  const [scrollText, setScrollText] = useState("Explore");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollText("You're doing it");
      } else {
        setScrollText("Explore");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center h-40 pt-8 mt-28 mb-16">
      <div className="flex flex-col items-center">
        <h2 className="text-xs uppercase font-semibold animate-bounce mb-4 text-gray-400">
          {scrollText}
        </h2>
        <span
          className="w-1 h-16 bg-orange-300 animate-bounce rounded-lg"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  )
} 