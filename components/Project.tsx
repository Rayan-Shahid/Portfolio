"use client";

import TransitionLink from "@/components/TransitionLink";
import type { Project as ProjectData } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

interface Props {
  index: number;
  project: ProjectData;
  onMouseEnter: (slug: string) => void;
}

const Project = ({ index, project, onMouseEnter }: Props) => {
  const iconRef = useRef<SVGSVGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP({ scope: iconRef });

  const handleEnter = contextSafe!(() => {
    onMouseEnter(project.slug);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Prevent stacked infinite timelines
    tlRef.current?.kill();

    gsap.set(iconRef.current, { autoAlpha: 1 });
    gsap.set(".icon-box, .icon-line, .icon-head", {
      opacity: 0,
      strokeDasharray: 1,
      strokeDashoffset: 1,
    });

    tlRef.current = gsap
      .timeline({ repeat: -1, repeatDelay: 1 })
      .to(".icon-box", { opacity: 1, strokeDashoffset: 0 })
      .to(".icon-line", { opacity: 1, strokeDashoffset: 0 }, "<0.2")
      .to(".icon-head", { opacity: 1, strokeDashoffset: 0 })
      .to(iconRef.current, { autoAlpha: 0 }, "+=1");
  });

  const handleLeave = () => {
    tlRef.current?.kill();
    tlRef.current = null;
  };

  return (
    <TransitionLink
      href={`/projects/${project.slug}`}
      className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-opacity"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {/* Mobile only: on desktop the preview panel in ProjectList is used */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={600}
        height={400}
        sizes="100vw"
        className="md:hidden w-full object-cover mb-6 aspect-[3/2] object-top"
      />

      <div className="flex gap-2 md:gap-5">
        <div className="font-anton text-muted-foreground">
          _{(index + 1).toString().padStart(2, "0")}.
        </div>

        <div>
          <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left group-focus-visible:bg-left">
            {project.title}
            <span className="text-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
              <svg
                ref={iconRef}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  className="icon-box"
                  pathLength={1}
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
                <path className="icon-line" pathLength={1} d="M10 14 21 3" />
                <path className="icon-head" pathLength={1} d="M15 3h6v6" />
              </svg>
            </span>
          </h4>

          <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
            {project.techStack.slice(0, 3).map((tech, idx, arr) => (
              <div className="gap-3 flex items-center" key={tech}>
                <span>{tech}</span>
                {idx !== arr.length - 1 && (
                  <span className="inline-block size-2 rounded-full bg-background-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default Project;
