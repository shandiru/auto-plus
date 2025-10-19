"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CryptoTestimonial() {
  const accent = "#00FF70";

  const testimonials = [
    {
      name: "Danielle R.",
      role: "Blockchain enthusiast",
      text: "“Cryptix makes buying and converting crypto incredibly intuitive. No more juggling between platforms, everything is here, fully optimized.”",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Sophie L.",
      role: "Lead Developer at Quantum Ledger",
      text: "“Security and ease of use are my top priorities. Cryptix delivers on both with style.”",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Michael L.",
      role: "Crypto investor",
      text: "“A seamless experience from start to finish. Cryptix makes managing digital assets so simple and secure.”",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  // ✨ Typewriter animation effect
  useEffect(() => {
    setTypedText("");
    setIsTyping(true);
    let i = 0;
    const text = t.text;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25); // typing speed
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-[#0A0A0A] text-white font-inter py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto border border-[#1E1E1E] bg-[#0E0E0E]">
        {/* Header */}
        <div className="text-center py-10 sm:py-12 border-b border-[#1E1E1E] px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug">
            Trusted by Crypto Enthusiasts Worldwide
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Join a growing community of investors who choose Cryptix for its seamless
            experience, security, and premium design.
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row relative overflow-hidden">
          {/* LEFT SIDE */}
          <div
            className="flex-1 relative p-8 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#1E1E1E]
            [background-image:radial-gradient(900px_700px_at_20%_20%,rgba(255,255,255,0.06),transparent_70%)] min-h-[380px] sm:min-h-[420px]"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 p-8 sm:p-10 md:p-14"
              >
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="relative">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div
                      className="absolute -right-3 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accent }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black/70 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>

                {/* Quote with typing animation */}
                <p className="text-[20px] sm:text-[22px] md:text-[26px] leading-relaxed text-gray-100 max-w-[62ch] min-h-[150px]">
                  {typedText}
                  {isTyping && <span className="animate-pulse text-[#00FF70]">|</span>}
                </p>

                {/* Name + Role */}
                <div className="mt-8 sm:mt-12">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-gray-400 text-[14px] sm:text-[15px]">{t.role}</p>
                </div>

                {/* Counter */}
                <p className="absolute bottom-4 sm:bottom-6 right-8 sm:right-10 text-gray-500 text-sm">
                  {index + 1}/{testimonials.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE - Buttons at bottom */}
          <div className="md:w-[320px] flex flex-col justify-end bg-[#0E0E0E] border-l border-t border-[#1E1E1E]">
            {/* Previous */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex items-center gap-1 justify-start px-8 py-6 border-b border-[#1E1E1E] hover:text-[#00FF70] transition-colors"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </motion.button>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center gap-1 justify-end px-8 py-6 hover:text-[#00FF70] transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
