import Image from "next/image";
import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Sitemap from "@/components/Sitemap";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Loader />
      {/* <Navbar /> */}
      <Sitemap />
      <Hero />
      <About />
      <ProgressBar />
      <Skills />
      <Experience />
      <Project />
      <Footer />
      <Background />
    </>
  );
}
