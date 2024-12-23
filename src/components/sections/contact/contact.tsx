'use client';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';

import Image from 'next/image';

import { contact } from '@/components/sections/contact/config';

import { cn } from '@/lib/utils';

import Link from '@/components/motion/link';

function Contact() {
  return (
    <section className="w-full py-8" id="contact">
      <div className="px-4 md:px-6">
        <div className="pb-6">
          <h2 className="text-4xl sm:text-5xl md:text-5xl">
            touch me
          </h2>
          {/* <p className="max-w-[600px] text-muted-foreground">
            
              Feel free to reach out!
            
          </p> */}
        </div>
        <div className="flex flex-col w-full items-center">
            <div className="relative flex w-full h-56 overflow-hidden rounded-r-full items-center justify-center">
              <Image src="/images/contact/banner.jpg" alt="Touching view at David's Vista" width={1024} height={768} className='object-cover h-full' />
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                [insert touching view here]
              </div>
            </div>
          <div className="flex flex-col w-full gap-3 py-3">
            <div>
              <p className="text-lg">Electronic Mail</p>
              <Link
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'text-lg h-min w-min p-0 font-normal'
                )}
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </div>
            <div>
              <p className="text-lg">Social Networking Cyber Identities</p>
              <div className="flex flex-row gap-4 py-1">
                {contact.socials.map(({ Icon, name, href }, index) => (
                    <Link
                      target="_blank"
                      href={href}
                      className={cn(
                        buttonVariants({ variant: 'link' }),
                        'text-lg [&_svg]:size-5 h-min gap-1 p-0'
                      )}
                      key={`contact-social_${index}`}
                    >
                    {Icon && <Icon className='size-5' />}
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
