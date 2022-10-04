import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Home */}
      <Home />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default App;
