import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import ExperienceCard from './experience-card';

import { experiences } from '@/components/sections/experience/config';


function Experiences() {
  return (
    <section className="w-full py-16" id="experiences">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-5xl">
              My Experience
            </h2>
          </div>
          <div className="grid gap-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience_${index}`}
                name={experience.name}
                description={experience.description}
                company={experience.company}
                duration={experience.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
