"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#f7f5ef]">
      <div className="h-16 w-16 rounded-full border-4 border-orange-300 border-t-transparent animate-spin" />
      <span className="mt-4 text-base font-semibold uppercase tracking-[0.2em] text-stone-600">
        Loading
      </span>
    </div>
  );
}
