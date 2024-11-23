'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';

import Signature from "@/../public/images/signature.svg";

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="flex flex-col md:flex-row md:gap-16 lg:gap-32 w-full container py-16"
      ref={container}
    >
      <div className="flex py-16">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-6xl font-light sm:text-6xl md:text-7xl lg:text-8xl">
              <TextReveal>Hi👋</TextReveal>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <Reveal>I&apos;m</Reveal>
                <Reveal>Steven</Reveal>
              </span>
              <div className="flex w-full items-center justify-end">
                <Reveal className="flex w-44 md:w-56 lg:w-72">
                    <Signature className="fill-foreground"/>
                </Reveal>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full aspect-square h-auto self-center">
        <Image
          src="/images/hero.png"
          alt="Hero image"
          width={1024}
          height={1024}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

export default Hero;
