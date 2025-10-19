"use client";
import React from "react";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaSpotify,
} from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <section className="bg-[#0B0B0B] text-gray-400 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-gray-500 gap-6 md:gap-16 flex-wrap px-6 text-center">
        {/* Title */}
        <span className="text-[13px] uppercase tracking-[3px] text-gray-500 mb-4 md:mb-0">
          Trusted by Top Companies
        </span>

        {/* Icons Container */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-3xl md:text-4xl">
          <FaApple className="hover:text-white transition duration-300" />
          <FaGoogle className="hover:text-white transition duration-300" />
          <FaAmazon className="hover:text-white transition duration-300" />
          <FaMicrosoft className="hover:text-white transition duration-300" />
          <FaSpotify className="hover:text-white transition duration-300" />
        </div>

        {/* Optional Text */}
        <span className="text-[12px] text-gray-600 mt-4 md:mt-0">and more...</span>
      </div>
    </section>
  );
}
