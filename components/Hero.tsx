

"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="h-screen flex justify-between items-center">

       
        <div className="container mx-auto">

                <h1 className="text-6xl sm:text-[80px] leading-[.95]">
                  <span>FRONTEND</span>
                  <br />
                  <span className="ml-4">DEVELOPER</span>
                </h1>
                <p className="mt-6 text-lg max-w-lg">
                  Hey, I'm Rayan, a frontend developer passionate about
                building modern, responsive, and interactive web
                experiences.
                </p>
                <button className="mt-9 px-6 py-3 rounded-full">
                Let's Talk
                </button>
                <div className="flex items-center gap-2 mt-3">
                <span className="size-3 rounded-full bg-green-500"></span>
                <span className="text-sm">
                  Open to opportunities
                </span>
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