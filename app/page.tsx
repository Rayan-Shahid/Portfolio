import Image from "next/image";
import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <ProgressBar />
      <Skills />
      <Experience />
      <Projects />
      <Background />
    </>
  );
}
