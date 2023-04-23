import { useState } from "preact/hooks";
import Burger from "./icons/Burger";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <button className="sm:hidden" onClick={toggleMenu}>
        <Burger />
      </button>
      <nav>
        <ul
          className={`flex gap-4 text-xl cursor-pointer font-semibold ${
            isMenuOpen ? "flex-col" : "hidden sm:flex"
          }`}
        >
          <li>
            <a
              className="hover:border-b-2 hover:border-amber-500 transition-colors duration-100 ease-in-out"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:border-b-2 hover:border-amber-500 transition-colors duration-100 ease-in-out"
              href="#experiencie"
            >
              Experiencie
            </a>
          </li>
          <li>
            <a
              className="hover:border-b-2 hover:border-amber-500 transition-colors duration-100 ease-in-out"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:border-b-2 hover:border-amber-500 transition-colors duration-100 ease-in-out"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
