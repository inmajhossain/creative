import { SetStateAction, useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the hamburger menu

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/home"); // Default active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleLinkClick = (Link: SetStateAction<string>) => {
    setActiveLink(Link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="relative">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex flex-col items-end">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="bg-white p-1 rounded-[5px] text-cyan-950 text-4xl" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex lg:justify-around lg:w-[600px] text-[18px] flex flex-col lg:flex-row items-end text-right w-[100px] ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <Link
          href="/"
          className={`text-white dark:text-cyan-400 ${
            activeLink === "/" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/home")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-white dark:text-cyan-400 ${
            activeLink === "/about" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/about")}
        >
          About us
        </Link>
        <Link
          href="/machineries"
          className={`text-white dark:text-cyan-400 ${
            activeLink === "/machineries" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/machineries")}
        >
          Our Machineries
        </Link>
        <Link
          href="/products"
          className={`text-white dark:text-cyan-400 ${
            activeLink === "/products" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/products")}
        >
          Products
        </Link>
        <Link
          href="/production"
          className={` text-white dark:text-cyan-400 ${
            activeLink === "/production" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/production")}
        >
          Production Capacity
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
