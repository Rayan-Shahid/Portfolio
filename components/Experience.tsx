"use client";

import SectionTitle from "@/components/SectionTitle";
import { MY_EXPERIENCE } from "@/lib/data";
// import Experience from '@/components/Experience';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      tl.from(".experience-item", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  // Exit animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="py-section" id="my-experience">
      <div className="container" ref={containerRef}>
        <SectionTitle title="My Experience" />
        <div className="grid gap-14">
          {MY_EXPERIENCE.map((item) => (
            <div className="experience-item" key={item.title}>
              <p className="text-xl text-muted-foreground">{item.company}</p>
              <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                {" "}
                {item.title}{" "}
              </p>
              <p className="text-lg text-muted-foreground"> {item.duration} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
