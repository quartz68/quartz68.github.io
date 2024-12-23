import React from 'react';
import ProjectCard from './project-card';

import MotionWrap from '@/components/motion-wrap';

import { project } from '@/app/source';


function Projects() {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <section className="w-full py-16" id="projects">
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <h2 className="text-4xl sm:text-5xl md:text-5xl">
          My Projects
        </h2>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
