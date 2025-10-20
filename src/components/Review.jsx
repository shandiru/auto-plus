"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoPlusTestimonial() {
  const accent = "#FF3B3B";

  const testimonials = [
    {
      name: "Cally Keetley .",
      role: "Customer from Nottingham",
      text: "Rang on the Monday, got an appointment for Tuesday with plenty of upfront and transparent information about costs. Mike was quick and efficient and fixed the issue (fault with electric windows) in less than an hour.",
      img: "c.png",
    },
    {
      name: "Tommy Merrall .",
      role: "Customer from Nottingham",
      text: "BMW X5 electrical issues, 4 hours later car fixed and running. 5 star thank you!",
      img: "t.png",
    },
    {
      name: "Sylwia Ksiazkiewicz.",
      role: "Customer from Nottingham",
      text: "Professional and quick. Highly recommended!",
      img: "s.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  // ✅ Safe Typewriter (no undefined)
  useEffect(() => {
    let i = 0;
    const text = String(t.text || "");
    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (i < text.length && typeof text[i] === "string") {
        setTypedText((prev) => prev + text[i-1]);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [index, t.text]);

  return (
    <section
      className="bg-[#000000] text-white font-inter py-20 md:py-24 px-4 sm:px-6 overflow-hidden border-t border-[#1A1A1A]"
      id="review"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto border border-[#1A1A1A] bg-[#0A0A0A] rounded-md overflow-hidden"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="text-center py-10 sm:py-12 border-b border-[#1A1A1A] px-4"
        >
          <p className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-6">
            Review
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            What Our{" "}
            <span className="text-[#FF3B3B] italic">Customers Say</span>
          </h2>

          <p className="text-[#CCCCCC] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Real feedback from our happy customers across Nottinghamshire who
            trust AutoPlus for all their electrical and diagnostic needs.
          </p>
        </div>

        {/* Main Section */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row overflow-hidden"
        >
          {/* LEFT SIDE */}
          <div className="flex-1 p-8 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A]/60 [background-image:radial-gradient(900px_700px_at_20%_20%,rgba(255,59,59,0.06),transparent_70%)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col h-auto"
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

                {/* Review Text */}
                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#EEEEEE] mb-8 sm:mb-10">
                  {typedText}
                  {isTyping && (
                    <span className="animate-pulse text-[#FF3B3B]">|</span>
                  )}
                </p>

                {/* Name + Role */}
                <div className="mt-auto">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-[#AAAAAA] text-sm sm:text-base">
                    {t.role}
                  </p>
                </div>

                {/* Counter */}
                <p className="mt-4 text-[#666666] text-xs sm:text-sm">
                  {index + 1}/{testimonials.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-[320px] flex flex-col justify-end bg-[#0A0A0A] border-t md:border-t-0 border-l border-[#1A1A1A]">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex items-center gap-1 justify-start px-8 py-5 border-b border-t border-[#1A1A1A] hover:text-[#FF3B3B] transition-colors"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center gap-1 justify-end px-8 py-5 hover:text-[#FF3B3B] transition-colors"
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
