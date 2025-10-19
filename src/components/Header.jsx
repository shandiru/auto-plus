"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-[0_2px_20px_rgba(255,255,255,0.15)]"
          : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
      }}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/dcba-logo.svg"
            alt="Derby City Boxing Academy Logo"
            className="h-10 w-auto md:h-12"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["About", "Classes", "Team", "Locations"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-300"
                style={{
                  color: "#E5E5E5",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Button (Desktop) */}
        <div className="hidden md:flex">
          <button
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(to right, #555, #999)",
              color: "#FFFFFF",
              boxShadow: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 0 10px rgba(255,255,255,0.4)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Join Today
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          style={{ color: "#FFFFFF" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6 font-medium transition-all duration-300"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)", color: "#E5E5E5" }}
        >
          {["About", "Classes", "Pricing", "Locations"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="transition"
              style={{ color: "#E5E5E5" }}
              onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E5E5")}
            >
              {item}
            </a>
          ))}

          <button
            onClick={toggleMenu}
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(to right, #555, #999)",
              color: "#FFFFFF",
              boxShadow: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 0 10px rgba(255,255,255,0.4)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Join Today
          </button>
        </div>
      )}
    </nav>
  );
}
