import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between flex-col top-0 w-full items-center bg-white lg:flex-row md:sticky">
      <h1 className="font-bold text-3xl my-4 md:mb-1 lg:my-0">Marc</h1>

      <ul className="flex flex-col gap-2 md:gap-4 lg:gap-6 py-4 items-center md:flex-row">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfilio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
