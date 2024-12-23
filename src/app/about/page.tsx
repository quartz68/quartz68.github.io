'use client';
import { Contact } from '@/components/sections';

import Signature from "@/../public/images/signature.svg";


export default function About() {

  return (
    <main className="my-24 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Read Me
          </h1>
        </div>
      </section>
      <section className="container min-w-full prose dark:prose-invert mt-12 lg:px-32">
        <p className="text-lg leading-relaxed mb-4">
          Dang it! You blew my cover. 😅
        </p>
        <p className="text-lg leading-relaxed mb-4">
          In that case, hi there! I&apos;m Steven Wang, or if you prefer my Chinese name, 王梓萌 ( wáng zǐ méng / Zimeng Wang ). Welcome to my little corner.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I&apos;m an undergraduate student majoring in Information Sciences and Technology at the Pennsylvania State University, and I also work as a software developer at a startup company based in central Pennsylvania. I love to see the impact of my learning and creation on the people around me.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I believe in a future where information and capacity of intelligence are abundant and accessible. I&apos;m passionate about technology as a driving force for change in the world.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I love exploring ideas and stories. I am drawn to science fiction (especially the New Wave and Cyberpunk ones), as well as history and philosophy. For balance, I unwind with video games, movies, and music. When I see beauty in life, I like to capture it through my camera lens.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I value connecting and resonating with people. I’m trying hard to overcome the challenges of expressing myself confidently and showing my appreciation of other people in English. If you want to chat, feel free to reach out to me, I&apos;d love to hear from you!
        </p>
        <div className="relative w-48 self-center mt-8">
          <Signature className="fill-foreground" />
        </div>
      </section>
    </main>
  );
}
