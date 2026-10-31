import Image from "next/image";
import Loader from "@/components/Loader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Loader />
    <Navbar/>
    <Hero />
    <Background />
    </>
  );
}
