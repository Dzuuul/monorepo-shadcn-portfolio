"use client"

import * as React from "react";

export function Home() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Konten lainnya */}
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="text-lg">This is the home page content.</p>
      </div>
    </div>
  );
}