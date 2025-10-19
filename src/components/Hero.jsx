"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Car, Wrench, Cpu } from "lucide-react";

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative bg-[#04070D] text-[#D5DBE6] font-inter py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="inline-block border border-[rgba(216,231,242,0.07)] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#AEB7C5] mb-6">
          Benefits
        </p>
        <h2 className="text-5xl font-medium text-[#D5DBE6]">
          Why Choose{" "}
          <span className="italic font-[Instrument_Serif] text-[#D5DBE6]/80">
            Us?
          </span>
        </h2>
        <p className="text-[#AEB7C5] mt-4 mb-16 text-base">
          Everything you need for expert mobile auto electrical service —
          fast, reliable, and professional.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 🚗 CARD 1 */}
          {/* 🚗 CARD 1 — Car Drive Animation */}
<motion.div
  onHoverStart={() => setActiveCard(1)}
  onHoverEnd={() => setActiveCard(null)}
  onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
  whileHover={{
    y: -8,
    borderColor: "rgba(216,231,242,0.15)",
    boxShadow: "0 0 40px rgba(159,198,209,0.25)",
  }}
  className="relative rounded-2xl border border-[rgba(216,231,242,0.07)] bg-gradient-to-br from-[#04070D] to-[#0E141B] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
>
  <div className="relative h-28 mb-10 overflow-hidden">
    {/* Car Motion */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      key={activeCard === 1 ? "car-animating" : "car-static"}
      initial={{ x: "-50%", rotate: 0 }}
      animate={
        activeCard === 1
          ? {
              x: ["-50%", "150%", "-150%", "-50%"], // exits right → enters left → ends center
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
          className="absolute -left-10 top-1/2 w-28 h-10 bg-gradient-to-r from-[#9FC6D1]/30 to-transparent blur-lg rounded-full"
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

      {/* Headlight Beams */}
      {activeCard === 1 && (
        <motion.div
          className="absolute left-[90%] top-1/2 w-24 h-6 bg-gradient-to-r from-[#E3F9FF]/40 to-transparent blur-md"
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
            ? { y: [0, -3, 3, 0] } // suspension bounce
            : { y: 0 }
        }
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Car className="w-28 h-28 text-[#9FC6D1] drop-shadow-[0_0_40px_rgba(159,198,209,0.9)]" />
      </motion.div>
    </motion.div>

    {/* Dust Trail when car leaves */}
    {activeCard === 1 && (
      <motion.div
        className="absolute bottom-[40%] left-1/2 w-20 h-4 bg-[#9FC6D1]/10 blur-2xl rounded-full"
        animate={{
          x: ["-50%", "200%"],
          opacity: [0.6, 0],
          scaleX: [1, 2],
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          repeat: 1,
        }}
      />
    )}
  </div>

  <h3 className="text-2xl font-semibold text-white mb-3">
    Fully Mobile Auto Electricians
  </h3>
  <p className="text-[#AEB7C5] text-sm leading-relaxed">
    We come to you — saving time, hassle, and towing costs.
  </p>
</motion.div>

          {/* 🔧 CARD 2 — Wrench Tightening Motion */}
          <motion.div
            onHoverStart={() => setActiveCard(2)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            whileHover={{
              y: -8,
              borderColor: "rgba(216,231,242,0.15)",
              boxShadow: "0 0 40px rgba(159,198,209,0.25)",
            }}
            className="relative rounded-2xl border border-[rgba(216,231,242,0.07)] bg-gradient-to-br from-[#04070D] to-[#0E141B] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-10 relative">
              {/* Motion behind wrench: spark-like glow */}
              {activeCard === 2 && (
                <motion.div
                  className="absolute w-16 h-16 bg-[#9FC6D1]/10 blur-2xl rounded-full"
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

              {/* Wrench Motion */}
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
                <Wrench className="w-24 h-24 text-[#9FC6D1] drop-shadow-[0_0_25px_rgba(159,198,209,0.6)]" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Trusted by Garages & Traders
            </h3>
            <p className="text-[#AEB7C5] text-sm leading-relaxed">
              Partnered with leading Nottingham workshops for reliable electrical
              expertise.
            </p>
          </motion.div>

          {/* ⚙️ CARD 3 — CPU Power Pulse */}
          <motion.div
            onHoverStart={() => setActiveCard(3)}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
            whileHover={{
              y: -8,
              borderColor: "rgba(216,231,242,0.15)",
              boxShadow: "0 0 40px rgba(159,198,209,0.25)",
            }}
            className="relative rounded-2xl border border-[rgba(216,231,242,0.07)] bg-gradient-to-br from-[#04070D] to-[#0E141B] p-10 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="flex justify-center mb-10 relative">
              {/* Glowing pulse ring */}
              {activeCard === 3 && (
                <motion.div
                  className="absolute w-24 h-24 rounded-full border border-[#9FC6D1]/20"
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

              {/* CPU Pulse */}
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
                <Cpu className="w-24 h-24 text-[#9FC6D1] drop-shadow-[0_0_25px_rgba(159,198,209,0.6)]" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Advanced Diagnostics & Retrofits
            </h3>
            <p className="text-[#AEB7C5] text-sm leading-relaxed">
              Using the latest tools to deliver accurate, efficient, and lasting
              electrical solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
