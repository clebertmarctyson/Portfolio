import { useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = ["home", "about", "skills", "services", "portfolio", "contact"];

  return (
    <header className="bg-white sticky top-0 flex justify-between items-center md:flex-col mb-8 py-4 lg:flex-row lg:py-2 lg:mb-0">
      <h1 className="text-xl font-bold md:my-4 md:text-2xl lg:my-0">
        Marc Tyson
      </h1>

      <nav className="hidden md:flex">
        <ul className="flex flex-col gap-4 text-sm uppercase md:flex-row md:mx-auto md:items-center">
          {items.map((item) => (
            <li>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <nav className="bg-white flex fixed top-0 right-0 w-1/2 h-screen p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm uppercase md:flex-row md:mx-auto md:items-center">
            {items.map((item) => (
              <li>
                <a onClick={() => setMenuOpen(!menuOpen)} href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {menuOpen ? (
        <RiMenuFoldLine
          className="fixed top-4 right-4 cursor-pointer text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : (
        <RiMenuUnfoldLine
          className="fixed top-4 right-4 cursor-pointer text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
    </header>
  );
};

export default Header;
