import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Sitemap from "@/components/Sitemap";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Loader />
      <Sitemap />
      <Hero />
      <About />
      <ProgressBar />
      <Skills />
      <Experience />
      <ProjectsSection />
      <Footer />
      <Background />
    </>
  );
}
