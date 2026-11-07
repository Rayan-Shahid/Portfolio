"use client";
import ProjectDetails from "./ProjectDetails";
import { PROJECTS } from "../lib/data";
import SectionTitle from "./SectionTitle";
import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TechText from "./TechText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const imageContainer = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.innerWidth < 768) return;

      const handleMousemove = (e: MouseEvent) => {
        if (!containerRef.current || !imageContainer.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageContainer.current.getBoundingClientRect();

        const offsetTop = e.clientY - containerRect.y;
        if (
          containerRect.y > e.clientY ||
          containerRect.bottom < e.clientY ||
          containerRect.x > e.clientX ||
          containerRect.right < e.clientX
        ) {
          gsap.to(imageContainer.current, { opacity: 0, duration: 0.3 });
          return;
        }
        gsap.to(imageContainer.current, {
          y: offsetTop - imageRect.height / 2,
          opacity: 1,
          duration: 0.8, // or whatever duration you like
        });
      };
      window.addEventListener("mousemove", handleMousemove);

      return () => {
        window.removeEventListener("mousemove", handleMousemove);
      };
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  const [SelectedProject, setSelectedProject] = useState<string | null>(
    PROJECTS[0].slug,
  );

  const handleMouseEnter = (slug: string) => {
    setSelectedProject(slug);
  };

  return (
    <section id="selected-projects" className="py-section py-20">
      <div className="container">
        <SectionTitle title="Main Project" />
        <div className="group/projects relative" ref={containerRef}>
          <div
            ref={imageContainer}
            className="absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
          >
            {PROJECTS.map((project) => (
              <Image
                key={project.slug}
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={500}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${project.slug === SelectedProject ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

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
