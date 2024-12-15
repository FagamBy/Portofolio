import LenisWrapper from "@/components/LenisWrapper";
import Navbar from "@/components/Navbar";
import About from "@/components/sect/About";
import Experience from "@/components/sect/Experience";
import Homes from "@/components/sect/Homes";
import Project from "@/components/sect/Project";
import Skills from "@/components/sect/Skills";

export default function Home() {
  return (
    <LenisWrapper>
      <main className="bg-[#2e3440] w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <header className="w-full">
            <Navbar />
          </header>
        </div>

        <div className="w-full">
          <Homes />
          <About />
          <Skills />
          <Experience />
          <Project />
        </div>
      </main>
    </LenisWrapper>
  );
}
