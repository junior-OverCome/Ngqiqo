"use client";

import React, { useEffect, useState } from "react";

export default function Scroll() {
  const [scrollText, setScrollText] = useState("Scroll to explore");

  useEffect(() => {
    const handleScroll = () => {
      setScrollText(window.scrollY > 80 ? "Keep going" : "Scroll to explore");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{scrollText}</span>
      <span className="h-12 w-[2px] animate-pulse rounded-full bg-orange-400" aria-hidden="true" />
    </div>
  );
}
