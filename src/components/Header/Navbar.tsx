import { SetStateAction, useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the hamburger menu

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/home"); // Default active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // State to manage submenu visibility

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
    setIsSubMenuOpen(false); // Close the submenu when a link is clicked
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prev => !prev); // Toggle submenu visibility
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
          href="/home"
          className={`text-white dark:text-cyan-400 dark:hover:text-white ${
            activeLink === "/home" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/home")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-white dark:text-cyan-400 dark:hover:text-white ${
            activeLink === "/about" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/about")}
        >
          About us
        </Link>
        <div className="relative">
          <Link
            href="/machine"
            className={`text-white dark:text-cyan-400 dark:hover:text-white ${
              activeLink === "/machine" ? "border-b-2 border-cyan-400" : ""
            }`}
            onClick={() => handleLinkClick("/machine")}
          >
            Our Machineries
          </Link>
        </div>
        <div className="relative">
          <Link
            href="/product"
            className={`text-white dark:text-cyan-400 dark:hover:text-white ${
              activeLink === "/product" ? "border-b-2 border-cyan-400" : ""
            }`}
            onClick={toggleSubMenu} // Toggle submenu on click
          >
            Products
          </Link>
          {isSubMenuOpen && (
            <div className="hidden left-0 z-10 absolute lg:flex flex-col items-start space-y-[5px] bg-cyan-950 shadow-lg mt-2 ml-0 p-[10px] rounded-lg w-[150px] font-semibold text-[14px] text-white text-left">
              <Link
                href="/product/elastic"
                className="block hover:bg-cyan-400 px-3 py-2 w-full hover:text-black"
                onClick={() => handleLinkClick("/product/elastic")}
              >
                Elastic
              </Link>
              <Link
                href="/product/drawstring"
                className="block hover:bg-cyan-400 px-3 py-2 w-full hover:text-black"
                onClick={() => handleLinkClick("/product/drawstring")}
              >
                Drawstring
              </Link>
              <Link
                href="/product/jaquard"
                className="block hover:bg-cyan-400 px-3 py-2 w-full hover:text-black"
                onClick={() => handleLinkClick("/product/jaquard")}
              >
                Jaquard Elastic
              </Link>
              <Link
                href="/product/tape"
                className="block hover:bg-cyan-400 px-3 py-2 w-full hover:text-black"
                onClick={() => handleLinkClick("/product/tape")}
              >
                Twill Tape
              </Link>
              <Link
                href="/product/belt"
                className="block hover:bg-cyan-400 px-3 py-2 w-full hover:text-black"
                onClick={() => handleLinkClick("/product/belt")}
              >
                Belt
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/capecity"
          className={`text-white dark:text-cyan-400 dark:hover:text-white ${
            activeLink === "/capecity" ? "border-b-2 border-cyan-400" : ""
          }`}
          onClick={() => handleLinkClick("/capecity")}
        >
          Production Capacity
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
