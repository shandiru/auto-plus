"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutoPlusTestimonial() {
  const accent = "#FF3B3B"; // 🔴 AutoPlus Red

  const testimonials = [
    {
      name: "David H.",
      role: "Customer from Nottingham",
      text: "“AutoPlus came to my home the same day and fixed a complex electrical issue that other garages couldn’t. Professional, fast, and friendly service.”",
      img: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Samantha R.",
      role: "Fleet Manager, Nottinghamshire",
      text: "“We use AutoPlus regularly for our company vehicles. Their mobile diagnostics and key programming save us time and money — highly recommended!”",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      name: "Ben L.",
      role: "Auto Trader Partner",
      text: "“They’ve been our go-to team for all electrical diagnostics and coding work. Reliable, knowledgeable, and always on time.”",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
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

  // Typewriter Effect
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
    }, 25);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-[#000000] text-white font-inter py-20 md:py-24 px-4 sm:px-6 overflow-hidden border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto border border-[#1A1A1A] bg-[#0A0A0A] rounded-md">
        {/* Header */}
        <div className="text-center py-10 sm:py-12 border-b border-[#1A1A1A] px-4">
          {/* Small red pill heading */}
          <p className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-6">
            Review
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug">
            What Our{" "}
            <span className="text-[#FF3B3B] italic">Customers Say</span>
          </h2>
          <p className="text-[#CCCCCC] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Real feedback from our happy customers across Nottinghamshire who
            trust AutoPlus for all their electrical and diagnostic needs.
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row relative overflow-hidden">
          {/* LEFT SIDE */}
          <div
            className="flex-1 relative p-8 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#1A1A1A]
            [background-image:radial-gradient(900px_700px_at_20%_20%,rgba(255,59,59,0.06),transparent_70%)] min-h-[380px] sm:min-h-[420px]"
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
                <p className="text-[20px] sm:text-[22px] md:text-[26px] leading-relaxed text-[#EEEEEE] max-w-[62ch] min-h-[150px]">
                  {typedText}
                  {isTyping && (
                    <span className="animate-pulse text-[#FF3B3B]">|</span>
                  )}
                </p>

                {/* Name + Role */}
                <div className="mt-8 sm:mt-12">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-[#AAAAAA] text-[14px] sm:text-[15px]">
                    {t.role}
                  </p>
                </div>

                {/* Counter */}
                <p className="absolute bottom-4 sm:bottom-6 right-8 sm:right-10 text-[#666666] text-sm">
                  {index + 1}/{testimonials.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE - Buttons */}
          <div className="md:w-[320px] flex flex-col justify-end bg-[#0A0A0A] border-l border-t border-[#1A1A1A]">
            {/* Previous */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex items-center gap-1 justify-start px-8 py-6 border-b border-[#1A1A1A] hover:text-[#FF3B3B] transition-colors"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </motion.button>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center gap-1 justify-end px-8 py-6 hover:text-[#FF3B3B] transition-colors"
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
