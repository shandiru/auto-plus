"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhone, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-[#000000] text-white font-inter overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
        alt="Auto Electrical Hero"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.35]"
      />

      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0A0A0A]/90"></div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] rounded-full blur-[140px] sm:blur-[160px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,59,0.3) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl">
        {/* Tagline */}
        <p
          data-aos="fade-down"
          className="text-[#FF6666] tracking-[4px] sm:tracking-[6px] uppercase text-[11px] sm:text-xs md:text-sm mb-4 border border-[#ff3b3b33] inline-block rounded-full px-4 sm:px-6 py-[6px]"
        >
          AutoPlus Nottingham
        </p>

        {/* Heading */}
        <h1
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight md:leading-[1.2] mb-5 sm:mb-6 text-white"
        >
          Reliable{" "}
          <span className="text-[#FF3B3B] italic block sm:inline">
            Auto Electricians
          </span>{" "}
          You Can Trust
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#AAAAAA] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Mobile auto electrical repairs, diagnostics, and key programming —
          done at your home, workplace, or garage with professional-grade
          precision.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="tel:+447495159438"
            className="flex items-center gap-2 bg-[#FF3B3B] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_0_20px_rgba(255,59,59,0.4)] hover:bg-[#ff5555] hover:shadow-[0_0_35px_rgba(255,59,59,0.6)] transition-all duration-300 text-sm sm:text-base"
          >
            <FiPhone size={18} />
            Call Now
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 border border-[#ff3b3b66] text-[#FF3B3B] font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#FF3B3B] hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            View Services
            <FiArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[150px] bg-gradient-to-t from-[#000000] to-transparent"></div>
    </section>
  );
}
