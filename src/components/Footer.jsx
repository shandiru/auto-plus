"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-400 py-10 border-t border-[#1a1a1a] font-inter">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* 🔹 Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Kombat
            </h2>
            <span className="text-[#D0182B] text-xl font-semibold">
              Kinetics
            </span>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-[#D0182B] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-[#D0182B] transition-colors"
              >
              Classes
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-[#D0182B] transition-colors"
              >
               Team
              </a>
            </li>
           
            <li>
              <a
                href="#locations"
                className="hover:text-[#D0182B] transition-colors"
              >
                Locations
              </a>
            </li>
          </ul>
        </div>

        {/* 🔸 Divider */}
        <div className="border-t border-[#1a1a1a] my-6"></div>

        {/* 🔹 Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Kombat Kinetics Derby. All rights reserved.
          </p>
          <p className="text-center md:text-right mt-2 md:mt-0">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D0182B] hover:text-white font-semibold transition-colors"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
