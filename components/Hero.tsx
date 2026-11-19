"use client";
import ParticleText from "./ParticleText";
import SpecularButton from "./SpecularButton";

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
          <p className="mt-6 text-lg max-w-lg mb-4">
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
