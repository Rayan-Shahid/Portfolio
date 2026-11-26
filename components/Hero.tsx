"use client";
import ParticleText from "./ParticleText";
import SpecularButton from "./SpecularButton";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden select-text">
      <div className="min-h-[100svh] md:h-screen flex items-center">
        <div className="container mx-auto py-24 md:py-0">
          <h1 className="text-6xl sm:text-[80px] leading-[.95]">
            <span
              className="block relative w-full h-[240px] sm:h-[300px] md:h-[360px] pointer-events-auto select-none"
            >
              <ParticleText
                text="FRONTEND ENGINEER"
                particleSize={2.2}
                density={3}
                color="currentColor"
                highlightColor="#00aeff"
                highlightMode="motion"
                shape="circle"
                intro="gather"
                scatter={190}
                gatherDuration={1600}
                stagger={420}
                clickBurst
                burstStrength={1}
                pointerRepel={42}
                repelRadius={120}
                idleDrift={0.8}
                trigger="mount"
                fontSize="clamp(3.5rem, 13vw, 9rem)"
                fontWeight={800}
                fontFamily="inherit"
                glow
              />
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg max-w-lg mb-4">
            Hey, I'm Rayan, a frontend developer passionate about building
            modern, responsive, and interactive web experiences.
          </p>
          <SpecularButton
            size="md"
            radius={18}
            tint="#ffffff"
            tintOpacity={0.04}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            idleIntensity={0.35}
            shineSize={10}
            shineFade={34}
            thickness={1.2}
            glow={2}
            followMouse
            proximity={250}
            autoAnimate={true}
            onClick={() => console.log("clicked")}
          >
            Let's Talk{" "}
          </SpecularButton>
          {/* <button className="mt-9 px-6 py-3 rounded-full">Let's Talk</button> */}
          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-[#B9E9FF]"></span>
            <span className="text-sm">Open to opportunities</span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center md:absolute md:bottom-[10%] md:right-[4%] md:flex md:flex-col md:gap-8 md:text-right md:mt-0">
            <div>
              <h2 className="text-2xl md:text-4xl">2+</h2>
              <p className="text-xs md:text-base">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl">10</h2>
              <p className="text-xs md:text-base">Completed Projects</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl">1000+</h2>
              <p className="text-xs md:text-base">Hours Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
