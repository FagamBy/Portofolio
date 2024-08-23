import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Sertifikat from "./pages/Sertifikat";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="bg-[#2e3440] w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <header className={`${styles.boxWidth}`}>
          <Navbar />
        </header>
      </div>

      <main className={`${styles.boxWidth}`}>
        <Home />
        <About />
        <Skills/>
        <Sertifikat/>
        <Project/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
