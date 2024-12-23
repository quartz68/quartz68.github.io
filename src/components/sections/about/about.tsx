import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';


function About() {
  return (
    <section className="w-full py-8 pt-16" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-5xl">
              read me
            </h2>
            <div className="space-y-4">
              <div className='flex flex-col w-full items-center'>
                <p className="max-w-[700px] text-lg/relaxed">
                    I believe in a future where information and intelligence are abundant and accessible.
                </p>
                {/* <div className="flex max-lg:hidden w-full h-32 overflow-hidden rounded-l-full items-center justify-center">
                  <Image src="/images/about/banner.jpg" alt="David's Vista view" width={1024} height={768} />
                </div> */}
              </div>
              <div className="flex gap-2">
                {/* <Button asChild variant={'outline'}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button> */}
                <Button asChild>
                  <Link href="/about">more me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
