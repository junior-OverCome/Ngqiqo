// app/loading.tsx

"use client"; // Ensure it's a client component if you need interactivity

import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <span className="mt-4 text-lg font-semibold animate-bounce text-gray-700 dark:text-gray-200">
        Loading...
      </span>
    </div>
  );
}
