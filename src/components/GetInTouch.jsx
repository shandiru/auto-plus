"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";

export default function ContactCard() {
  return (
    <section className="relative bg-[#04070D] text-[#D5DBE6] font-inter py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-block border border-[rgba(216,231,242,0.07)] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#AEB7C5] mb-6">
            Contact Us
          </p>
          <h2 className="text-5xl font-medium text-[#D5DBE6]">
            Get in Touch with{" "}
            <span className="italic font-[Instrument_Serif] text-[#9FC6D1]">
              Our Expert
            </span>
          </h2>
        </div>

        {/* Card */}
        <motion.div
          whileHover={{
            y: -6,
            borderColor: "rgba(216,231,242,0.15)",
            boxShadow: "0 0 40px rgba(159,198,209,0.25)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center justify-between rounded-2xl border border-[rgba(216,231,242,0.07)] bg-gradient-to-br from-[#04070D] to-[#0E141B] p-10 md:p-12 transition-all duration-500 cursor-pointer overflow-hidden relative"
        >
          {/* Left Side: Name + Job + Socials */}
          <div className="text-center md:text-left md:w-2/3 space-y-6">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-2">
                Micheal
              </h3>
              <p className="text-[#AEB7C5] text-base">
                Head Auto Electrician
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 pt-4">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#0E141B] border border-[rgba(159,198,209,0.15)] hover:border-[#9FC6D1] hover:text-[#9FC6D1] text-[#AEB7C5] transition-all"
              >
                <FaWhatsapp size={22} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#0E141B] border border-[rgba(159,198,209,0.15)] hover:border-[#9FC6D1] hover:text-[#9FC6D1] text-[#AEB7C5] transition-all"
              >
                <FaInstagram size={22} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#0E141B] border border-[rgba(159,198,209,0.15)] hover:border-[#9FC6D1] hover:text-[#9FC6D1] text-[#AEB7C5] transition-all"
              >
                <FaFacebook size={22} />
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.2 }}
                className="p-4 rounded-xl bg-[#0E141B] border border-[rgba(159,198,209,0.15)] hover:border-[#9FC6D1] hover:text-[#9FC6D1] text-[#AEB7C5] transition-all"
              >
                <FaPhone size={22} />
              </motion.a>
            </div>
          </div>

          {/* Right Side: Logo */}
          <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
            <motion.img
              src="/logo.png" // 👈 Replace with your logo image path
              alt="Company Logo"
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(159,198,209,0.5)]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
