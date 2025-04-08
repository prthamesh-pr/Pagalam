import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { MapPin, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
    { title: "Enquire", href: "/enquire" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-dark-brown flex justify-between items-center h-16 px-4">
        <div className="shrink-0 flex justify-between">
          <NavLink to="/">
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>

        <div className="text-white gap-8 hidden md:flex">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="size-4" />
            <span>Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="size-4" />
            <span>+(91) 9601051104</span>
          </div>
        </div>

        {isMobile && (
          <button
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Toggle icons */}
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center h-10 bg-white">
        {!isMobile && (
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-light-brown font-bold hover:bg-gray-100"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-dot-icon lucide-dot"
                      >
                        <circle cx="12.1" cy="12.1" r="1" />
                      </svg>
                    )}
                    {link.title}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={toggleMenu} className="p-2">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <NavLink
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
                    onClick={toggleMenu} // Close menu when clicking a link
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Overlay Background for Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
