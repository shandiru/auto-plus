"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link"; // ✅ Import HashLink

export default function Header() {
  const accent = "#FF3B3B";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll fix for all routes
  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust for fixed header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-inter ${
        isScrolled
          ? "bg-[#000000]/95 backdrop-blur-md border-b border-[#1A1A1A]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 lg:py-5">
        {/* ✅ Logo */}
        <Link smooth to="/#home" scroll={scrollWithOffset} className="flex items-center">
          <img
            src="/logo.png"
            alt="AutoPlus Logo"
            className="h-14 w-auto lg:h-16 object-contain"
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wide">
          {["Home", "Services", "FAQ", "Contact", "WhyChooseUs", "Review"].map(
            (item) => (
              <Link
                key={item}
                smooth
                to={`/#${item.toLowerCase()}`} // ✅ always reference homepage sections
                scroll={scrollWithOffset}
                className="text-[#CCCCCC] hover:text-[#FF3B3B] transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* ✅ Call Now Button */}
        <a
          href="tel:+447495159438"
          className="hidden lg:flex items-center gap-2 bg-[#FF3B3B] text-white text-sm font-medium px-5 py-2 rounded-full shadow-[0_0_20px_rgba(255,59,59,0.3)] hover:bg-[#ff5555] transition"
        >
          <FiPhone size={16} />
          Call Now
        </a>

        {/* ✅ Hamburger Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#000000]/95 border-t border-[#1A1A1A] backdrop-blur-md">
          <nav className="flex flex-col items-center py-6 space-y-4 text-sm uppercase tracking-wide">
            {["Home", "Services", "FAQ", "Contact", "WhyChooseUs", "Review"].map(
              (item) => (
                <Link
                  key={item}
                  smooth
                  to={`/#${item.toLowerCase()}`}
                  scroll={scrollWithOffset}
                  className="text-[#CCCCCC] hover:text-[#FF3B3B] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            <a
              href="tel:+447495159438"
              className="flex items-center gap-2 bg-[#FF3B3B] text-white text-sm font-medium px-5 py-2 rounded-full shadow-[0_0_20px_rgba(255,59,59,0.3)] hover:bg-[#ff5555] transition"
              onClick={() => setIsOpen(false)}
            >
              <FiPhone size={16} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
