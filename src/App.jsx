import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Sertifikat from "./pages/Sertifikat";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Service from "./pages/Service";

const App = () => {
  return (
    <div className="bg-[#2e3440] w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Home />
        <About />
        <Service/>
        <Sertifikat/>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
