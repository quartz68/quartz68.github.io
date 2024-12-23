'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useRef } from 'react';

import Signature from "@/../public/images/signature.svg";

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="flex flex-col md:flex-row md:gap-16 lg:gap-32 w-full py-16 bg-secondary"
      ref={container}
    >
      <div className="flex py-8">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-6xl font-light sm:text-6xl md:text-7xl lg:text-8xl">
              People of Earth,
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                your attention, please.
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full self-center">
        <Signature className="fill-foreground" />
      </div> */}
    </section>
  );
}

export default Hero;
