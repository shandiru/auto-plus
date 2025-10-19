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
      once: false, // animate again when scrolling back up
    });
  }, []);

  return (
    <section
      className="relative bg-[#000000] text-[#F5F5F5] font-inter py-24 px-6 overflow-hidden"
      id="whychooseus"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p
          data-aos="fade-down"
          className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-6"
        >
          Benefits
        </p>
        <h2
          data-aos="zoom-in"
          className="text-5xl font-medium text-white"
        >
          Why Choose{" "}
          <span className="italic font-[Instrument_Serif] text-[#ff3b3b]">
            Us?
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#aaaaaa] mt-4 mb-16 text-base"
        >
          Everything you need for expert mobile auto electrical service — fast,
          reliable, and professional.
        </p>

        {/* Cards */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid md:grid-cols-3 gap-8"
        >
          {/* 🚗 CARD 1 — Car Drive Animation */}
          <motion.div
            data-aos="zoom-in-up"
            data-aos-delay="150"
            onHoverStart={() => setActiveCard(1)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            whileHover={{
              y: -8,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 40px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#1a1a1a] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="relative h-28 mb-10 overflow-hidden">
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                key={activeCard === 1 ? "car-animating" : "car-static"}
                initial={{ x: "-50%", rotate: 0 }}
                animate={
                  activeCard === 1
                    ? {
                        x: ["-50%", "150%", "-150%", "-50%"],
                        opacity: [1, 0, 0, 1],
                        rotate: [0, 2, -2, 0],
                      }
                    : { x: "-50%", opacity: 1, rotate: 0 }
                }
                transition={{
                  duration: 4.5,
                  ease: "easeInOut",
                }}
              >
                {/* Glow Trail */}
                {activeCard === 1 && (
                  <motion.div
                    className="absolute -left-10 top-1/2 w-28 h-10 bg-gradient-to-r from-[#ff3b3b55] to-transparent blur-lg rounded-full"
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

                {/* Headlight Beam */}
                {activeCard === 1 && (
                  <motion.div
                    className="absolute left-[90%] top-1/2 w-24 h-6 bg-gradient-to-r from-[#ffcccc]/40 to-transparent blur-md"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scaleX: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Car Icon */}
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
                  <Car className="w-28 h-28 text-[#ff3b3b] drop-shadow-[0_0_30px_rgba(255,59,59,0.9)]" />
                </motion.div>
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Fully Mobile Auto Electricians
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              We come to you — saving time, hassle, and towing costs.
            </p>
          </motion.div>

          {/* 🔧 CARD 2 — Wrench Motion */}
          <motion.div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            onHoverStart={() => setActiveCard(2)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            whileHover={{
              y: -8,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 40px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#1a1a1a] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-10 relative">
              {activeCard === 2 && (
                <motion.div
                  className="absolute w-16 h-16 bg-[#ff3b3b33] blur-2xl rounded-full"
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
                    ? {
                        rotate: [0, -30, 30, 0],
                        y: [0, -6, 6, 0],
                      }
                    : { rotate: 0, y: 0 }
                }
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Wrench className="w-24 h-24 text-[#ff3b3b] drop-shadow-[0_0_25px_rgba(255,59,59,0.7)]" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Trusted by Garages & Traders
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              Partnered with leading Nottingham workshops for reliable
              electrical expertise.
            </p>
          </motion.div>

          {/* ⚙️ CARD 3 — CPU Pulse */}
          <motion.div
            data-aos="zoom-in-up"
            data-aos-delay="450"
            onHoverStart={() => setActiveCard(3)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
            whileHover={{
              y: -8,
              borderColor: "rgba(255,59,59,0.4)",
              boxShadow: "0 0 40px rgba(255,59,59,0.25)",
            }}
            className="relative rounded-2xl border border-[#ff3b3b22] bg-gradient-to-br from-[#000000] to-[#1a1a1a] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-10 relative">
              {activeCard === 3 && (
                <motion.div
                  className="absolute w-24 h-24 rounded-full border border-[#ff3b3b55]"
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
                <Cpu className="w-24 h-24 text-[#ff3b3b] drop-shadow-[0_0_25px_rgba(255,59,59,0.7)]" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Advanced Diagnostics & Retrofits
            </h3>
            <p className="text-[#cccccc] text-sm leading-relaxed">
              Using the latest tools to deliver accurate, efficient, and lasting
              electrical solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
