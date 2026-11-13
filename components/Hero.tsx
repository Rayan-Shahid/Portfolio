"use client";
import ParticleText from "./ParticleText";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden select-text">
      <div className="h-screen flex justify-between items-center">
        <div className="container mx-auto">
          <h1 className="text-6xl sm:text-[80px] leading-[.95]">
            <span
              className="block relative w-full h-[360px] pointer-events-auto select-none"
              style={{ width: "100%", height: 360 }}
            >
              <ParticleText
                text="FRONTEND DEVELOPER"
                particleSize={2.2}
                density={3}
                color="currentColor"
                highlightColor="#ff5a36"
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
          <p className="mt-6 text-lg max-w-lg">
            Hey, I'm Rayan, a frontend developer passionate about building
            modern, responsive, and interactive web experiences.
          </p>
          <button className="mt-9 px-6 py-3 rounded-full">Let's Talk</button>
          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-green-500"></span>
            <span className="text-sm">Open to opportunities</span>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[4%] flex flex-col gap-8 text-right">
          <div>
            <h2 className="text-4xl">2+</h2>
            <p>Years of Experience</p>
          </div>

          <div>
            <h2 className="text-4xl"> 10 </h2>
            <p>Completed Projects</p>
          </div>

          <div>
            <h2 className="text-4xl">1000+</h2>
            <p>Hours Worked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
