import Image from "next/image";
import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <Loader />
    <Navbar/>
    <Hero />
    <ProgressBar/>
    <About/>
    <Skill />
    <Background />
    </>
  );
}
