import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Header />

      <Home />

      <About />

      <Skills />

      <Services />

      <Portfolio />

      <Contact />
    </div>
  );
};

export default App;
