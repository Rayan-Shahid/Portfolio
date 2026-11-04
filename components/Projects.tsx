"use client";
import ProjectDetails from "./ProjectDetails";
import { PROJECTS } from "../lib/data";
import SectionTitle from "./SectionTitle";
import { useState, useRef } from "react";

export default function Projects() {
  const imageContainer = useRef<HTMLDivElement>(null);

  const [SelectedProject, setSelectedProject] = useState<string | null>(
    PROJECTS[0].slug,
  );

  const handleMouseEnter = (slug: string) => {
    setSelectedProject(slug);
  };

  return (
    <section id="selected-projects" className="py-section">
      <div className="container">
        <SectionTitle title="Main Project" />
        <div className="group/projects relative">
          <div
            ref={imageContainer}
            className="absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
          ></div>

          <div className="flex flex-col max-md:gap-10">
            {PROJECTS.map((data, index) => (
              <ProjectDetails
                key={data.slug}
                project={data}
                index={index}
                SelectedProject={SelectedProject}
                onMouseEnter={handleMouseEnter}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
