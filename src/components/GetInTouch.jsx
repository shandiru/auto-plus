"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactCard() {
  return (
    <section className="relative bg-[#000000] text-[#F5F5F5] font-inter py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-block border border-[#FF3B3B33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#FF6B6B] mb-6">
            Contact Us
          </p>
          <h2 className="text-5xl font-medium text-white">
            Get in Touch with{" "}
            <span className="italic font-[Instrument_Serif] text-[#FF3B3B]">
              Our Experts
            </span>
          </h2>
        </div>

        {/* Card */}
        <motion.div
          whileHover={{
            y: -6,
            borderColor: "rgba(255, 59, 59, 0.4)",
            boxShadow: "0 0 40px rgba(255, 59, 59, 0.35)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center justify-between rounded-2xl border border-[#FF3B3B22] bg-gradient-to-br from-[#000000] to-[#1A1A1A] p-10 md:p-12 transition-all duration-500 cursor-pointer overflow-hidden relative"
        >
          {/* Left Side: Name + Job + Socials */}
          <div className="text-center md:text-left md:w-2/3 space-y-6">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-2">
                Micheal
              </h3>
              <p className="text-[#CCCCCC] text-base">
                Head Auto Electrician
              </p>
            </div>

            {/* Contact Info */}
           

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 pt-4">
              <motion.a
                href="https://wa.me/447495159438"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#FF3B3B22] hover:border-[#FF3B3B] hover:text-[#FF3B3B] text-[#CCCCCC] transition-all"
              >
                <FaWhatsapp size={22} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/Autoplusnottingham/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#FF3B3B22] hover:border-[#FF3B3B] hover:text-[#FF3B3B] text-[#CCCCCC] transition-all"
              >
                <FaInstagram size={22} />
              </motion.a>

              <motion.a
                href="https://web.facebook.com/p/AutoPlus-Nottingham-100092195330520"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#FF3B3B22] hover:border-[#FF3B3B] hover:text-[#FF3B3B] text-[#CCCCCC] transition-all"
              >
                <FaFacebook size={22} />
              </motion.a>

              <motion.a
                href="tel:+447495159438"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#FF3B3B22] hover:border-[#FF3B3B] hover:text-[#FF3B3B] text-[#CCCCCC] transition-all"
              >
                <FaPhone size={22} />
              </motion.a>
            </div>
          </div>

          {/* Right Side: Logo */}
          <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
            <motion.img
              src="/logo.png" // Replace with your actual logo path
              alt="AutoPlus Nottingham Logo"
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(255,59,59,0.5)]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
