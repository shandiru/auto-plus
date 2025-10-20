"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Wrench, Cpu } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      className="relative bg-[#000000] text-[#F5F5F5] font-inter py-20 px-6 sm:px-8 lg:py-24 overflow-hidden"
      id="whychooseus"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p
          data-aos="fade-down"
          className="inline-block border border-[#ff3b3b33] text-[11px] sm:text-xs tracking-[3px] uppercase px-5 py-1 rounded-full text-[#ff6666] mb-6"
        >
          Benefits
        </p>
        <h2
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white"
        >
          Why Choose{" "}
          <span className="italic font-[Instrument_Serif] text-[#ff3b3b]">
            Us?
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#aaaaaa] mt-4 mb-14 sm:mb-16 text-sm sm:text-base max-w-2xl mx-auto px-2"
        >
          Everything you need for expert mobile auto electrical service — fast,
          reliable, and professional.
        </p>

        {/* Cards Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* 🚗 CARD 1 — Car Drive */}
          <motion.div
            data-aos="zoom-in-up"
            onHoverStart={() => setActiveCard(1)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            whileHover={{
              y: -6,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 35px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#141414] p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="relative h-24 sm:h-28 mb-6 sm:mb-10 overflow-hidden">
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                key={activeCard === 1 ? "car-animating" : "car-static"}
                initial={{ x: "-50%", rotate: 0 }}
                animate={
                  activeCard === 1
                    ? {
                        x: ["-50%", "140%", "-140%", "-50%"],
                        opacity: [1, 0, 0, 1],
                        rotate: [0, 2, -2, 0],
                      }
                    : { x: "-50%", opacity: 1, rotate: 0 }
                }
                transition={{ duration: 4.5, ease: "easeInOut" }}
              >
                {activeCard === 1 && (
                  <motion.div
                    className="absolute -left-10 top-1/2 w-20 sm:w-28 h-6 sm:h-10 bg-gradient-to-r from-[#ff3b3b55] to-transparent blur-lg rounded-full"
                    animate={{
                      scaleX: [1, 2, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <motion.div
                  animate={
                    activeCard === 1
                      ? { y: [0, -3, 3, 0] }
                      : { y: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Car className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 text-[#ff3b3b] drop-shadow-[0_0_25px_rgba(255,59,59,0.8)]" />
                </motion.div>
              </motion.div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Fully Mobile Auto Electricians
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              We come to you — saving time, hassle, and towing costs.
            </p>
          </motion.div>

          {/* 🔧 CARD 2 — Wrench */}
          <motion.div
            data-aos="zoom-in-up"
            onHoverStart={() => setActiveCard(2)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            whileHover={{
              y: -6,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 35px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#141414] p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-6 sm:mb-10 relative">
              {activeCard === 2 && (
                <motion.div
                  className="absolute w-14 sm:w-16 h-14 sm:h-16 bg-[#ff3b3b33] blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              )}
              <motion.div
                animate={
                  activeCard === 2
                    ? { rotate: [0, -30, 30, 0], y: [0, -6, 6, 0] }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Wrench className="w-20 sm:w-24 h-20 sm:h-24 text-[#ff3b3b] drop-shadow-[0_0_25px_rgba(255,59,59,0.7)]" />
              </motion.div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Trusted by Garages & Traders
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              Partnered with Nottingham’s top workshops for dependable service.
            </p>
          </motion.div>

          {/* ⚙️ CARD 3 — CPU */}
          <motion.div
            data-aos="zoom-in-up"
            onHoverStart={() => setActiveCard(3)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
            whileHover={{
              y: -6,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 35px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#141414] p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-6 sm:mb-10 relative">
              {activeCard === 3 && (
                <motion.div
                  className="absolute w-20 sm:w-24 h-20 sm:h-24 rounded-full border border-[#ff3b3b55]"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              )}
              <motion.div
                animate={
                  activeCard === 3
                    ? { scale: [1, 1.2, 1] }
                    : { scale: 1 }
                }
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <Cpu className="w-20 sm:w-24 h-20 sm:h-24 text-[#ff3b3b] drop-shadow-[0_0_25px_rgba(255,59,59,0.7)]" />
              </motion.div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Advanced Diagnostics & Retrofits
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              Using dealer-grade tools to deliver fast, accurate, and lasting
              results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
