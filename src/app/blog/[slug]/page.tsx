import type { Metadata } from 'next';

import { blog } from '@/app/source';
import { MDXContent } from '@content-collections/mdx/react';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import defaultComponents from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';

import { metadata as meta } from '@/app/config';
import { buttonVariants } from '@/components/ui/button';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

import { Heading, headingTypes } from '@/lib/mdx/default-components';
import { cn } from '@/lib/utils';

import { HTMLAttributes } from 'react';

export async function generateStaticParams() {
  const params = blog.generateParams();
  return params.map((param) => ({ slug: param.slug.toString() }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      authors: meta.author.name,
      modifiedTime: new Date(page.data.date ?? page.file.name).toISOString()
    }
  }) satisfies Metadata;
}

export default async function BlogPage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <main className="my-24 flex-1 px-4">
      <div className="container rounded-xl border bg-muted/30 py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-muted-foreground">{page.data.description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[3fr_1fr]">
        <div className="prose prose-code:before:hidden prose-code:after:hidden dark:prose-invert min-w-full lg:px-32">
          <MDXContent
            code={body}
            components={{
              ...defaultComponents,
              img: (props) => <ImageZoom className='rounded-lg' {...(props as any)} />,
              code: ({ children, className, ...props }) => (
                <code className={cn('', className)} {...props}>
                  {children}
                </code>
              ),
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
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="mb-1 text-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          {/*<Control url={page.url} />*/}
        </div>
      </article>
    </main>
  );
}