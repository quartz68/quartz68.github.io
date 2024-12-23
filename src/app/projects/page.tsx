import { project } from '@/app/source';

import React from 'react';

import ProjectCard from '@/components/sections/projects/project-card';
import { createMetadata } from '@/lib/metadata';

import { metadata as meta } from '@/app/config';
import type { CollectionPage, WithContext } from 'schema-dts';

const title = 'Projects';
const description = 'Here are some projects I have worked on.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/projects',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: `${meta.site.url}/projects`
};

export default function ProjectsPage(): React.ReactElement {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Projects
          </h1>
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.data.title}
            href={project.url}
            description={project.data.description}
            key={`project_${index}`}
            tags={project.data.tags}
            thumbnail={project.data.cover}
          />
        ))}
      </section>
    </main>
  );
}
