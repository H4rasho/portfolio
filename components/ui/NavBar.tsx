import React, { useState } from "react";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="blocktext-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:text-tertiary "
      aria-current="page"
    >
      {children}
    </a>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-4 rounded w-full text-text mb-6">
      <div className="container flex flex-wrap mx-auto w-full">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 
          text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex justify-center flex-col mt-2 md:flex-row gap-8 md:mt-0 md:text-xl md:font-medium">
            <li>
              <Link href="#welcome">Inicio</Link>
            </li>
            <li>
              <Link href="#about">Acerca de mi</Link>
            </li>
            <li>
              <Link href="#experience">Experiencia</Link>
            </li>
            <li>
              <Link href="#projects">Proyectos</Link>
            </li>
            <li>
              <Link href="#contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
