import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Downbar from "@/components/navbar/Downbar";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-[#0b011d]">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <div className='fixed bottom-6 z-50'>
        <Downbar />
        </div>
      </div>
    </main>
  );
}
