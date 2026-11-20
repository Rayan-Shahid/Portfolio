"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import Project from "@/components/Project";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = PROJECTS.find((p) => p.slug === selectedProject);

  return (
    <section
      id="projects"
      className="pb-section"
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="container">
        {/* Top hover preview panel */}
        {activeProject && (
          <div className="hidden md:block mb-8 pointer-events-none">
            <Image
              src={activeProject.thumbnail}
              alt={activeProject.title}
              width={600}
              height={400}
              className="w-full max-w-md object-cover aspect-[3/2] object-top"
            />
          </div>
        )}

        {/* Project list with original hover dim + GSAP arrow animation */}
        <div className="group/projects flex flex-col">
          {PROJECTS.map((project, index) => (
            <Project
              key={project.slug}
              index={index}
              project={project}
              onMouseEnter={(slug) => setSelectedProject(slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
