import Navbar from "@/components/Navbar";
import About from "@/components/sect/About";
import Homes from "@/components/sect/Homes";
import Project from "@/components/sect/Project";
import Sertifikat from "@/components/sect/Sertifikat";
import Skills from "@/components/sect/Skills";

export default function Home() {
  return (
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
        <Sertifikat />
        <Project />
      </div>
    </main>
  );
}
