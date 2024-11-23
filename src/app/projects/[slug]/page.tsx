import type { Metadata } from 'next';

import { MDXContent } from '@content-collections/mdx/react';
import defaultComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

import { notFound } from 'next/navigation';
import { project } from '@/app/source';

import Header from './header';
import Image from 'next/image';

import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';
import { Heading, headingTypes, MDXLink } from '@/lib/mdx/default-components';
import { cn } from '@/lib/utils';

import { HTMLAttributes } from 'react';

export async function generateStaticParams({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // @ts-ignore
  return project.generateParams([slug]);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: page.data.cover || "",
          type: 'image/png'
        }
      ],
      authors: meta.author.name
      // modifiedTime: page.data.date.toISOString()
    },
    twitter: {
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: page.data.cover || ""
        }
      ]
    }
  }) satisfies Metadata;
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row gap-8 h-fit items-center'>
          <Header metadata={page.data} />
          { page.data.cover &&
            <div className='mt-4 max-h-64 rounded-lg overflow-hidden flex items-center justify-center'>
              <Image
              src={page.data.cover}
              width={1280}
              height={832}
              alt={`Image of ${page.data.title}`}
              className="w-full h-full object-cover"
              />
            </div>
          }
        </div>
        <div className="prose min-w-full dark:prose-invert mt-12 lg:px-32">
          <MDXContent
            code={body}
            components={{
              ...defaultComponents,
              img: (props) => <ImageZoom className='rounded-lg' {...(props as any)} />,
              ...Object.fromEntries(
                headingTypes.map((type) => [
                  type,
                  (props: HTMLAttributes<HTMLHeadingElement>) => (
                    <Heading as={type} {...props} />
                  )
                ])
              )
            }}
          />
        </div>
      </div>
    </main>
  );
}
