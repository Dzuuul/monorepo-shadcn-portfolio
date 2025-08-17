"use client";

import * as React from "react";

export function AboutMe() {
  return (
    <section id="about-me">
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Konten lainnya */}
          <h1 className="text-2xl font-bold">Welcome to the About Me Page</h1>
          <p className="text-lg">This is the about me page content.</p>
        </div>
      </div>
    </section>
  );
}
