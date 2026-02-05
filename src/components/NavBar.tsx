"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import hivelogo from "@/assets/images/TheHiveLogo.png";
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-300 flex flex-col lg:flex-row items-center justify-between px-4 z-10 shadow-md rounded-b-md">
      {/* Fila superior: Logo + Dropdown */}
      <div className="w-full flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-white font-bold text-2xl">The</span>
          <span className="text-black font-bold text-2xl">Hive</span>
          <Image src={hivelogo} alt="Logo" width={55} height={55} />
        </Link>

        {/* Desktop SearchBar */}
        <div className="hidden lg:flex items-center mr-24">
          <SearchBar />
        </div>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="text-black font-bold text-sm px-3 py-2 rounded hover:bg-yellow-400 transition"
          >
            ☰
          </button>

          <div
            className={`absolute right-0 mt-2 w-36 rounded overflow-hidden bg-yellow-300 shadow-lg
          transform transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0 shadow-xl" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
          >
            <button
              className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow-400 transition"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
                setOpen(false);
              }}
            >
              About
            </button>

            <Link
              href="#"
              className="block px-4 py-2 text-sm text-black hover:bg-yellow-400 transition"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const footer = document.getElementById("contact");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </Link>
            {/* SearchBar móvil */}
            <div className="lg:hidden px-4 py-2">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
