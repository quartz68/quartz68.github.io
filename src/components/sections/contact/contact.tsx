'use client';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';

import Image from 'next/image';

import { contact } from '@/components/sections/contact/config';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';

import Link from '@/components/motion/link';
function Contact() {
  return (
    <MotionWrap className="w-full py-16 lg:py-20" id="contact">
      <div className="px-4 md:px-6">
        <div className="py-3">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <TextReveal>Contact Me</TextReveal>
          </h2>
          {/* <p className="max-w-[600px] text-muted-foreground">
            <TextReveal>
              Feel free to reach out!
            </TextReveal>
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row w-full items-center md:gap-16">
            <div className="flex w-full md:w-2/3 h-56 overflow-hidden rounded-r-full items-center justify-center">
              <Image src="/images/contact/banner.jpg" alt="David's Vista view" width={1024} height={768} />
            </div>
          <div className="flex flex-col w-full md:w-1/3 gap-4 py-3">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <Link
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'text-md h-min w-min p-0 font-normal'
                )}
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Socials</p>
              <div className="flex flex-row gap-4 py-1">
                {contact.socials.map(({ Icon, name, href }, index) => (
                  <Link
                    target="_blank"
                    href={href}
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'text-md h-min w-min gap-1 p-0'
                    )}
                    key={`contact-social_${index}`}
                  >
                    {Icon && <Icon className="h-6 w-6" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
