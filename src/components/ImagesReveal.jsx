"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const accent = "#00FF70";

  const faqs = [
    { q: "What is Cryptix?", a: "Cryptix is a digital platform designed to make crypto investing intuitive, secure, and fast — all from one place." },
    { q: "Is Cryptix secure?", a: "Yes. Cryptix uses end-to-end encryption, biometric authentication, and cold wallet storage for maximum security." },
    { q: "Which cryptocurrencies are supported?", a: "We support Bitcoin, Ethereum, Solana, Cardano, and many other popular digital assets — all easily tradable." },
    { q: "What are the fees for transactions?", a: "Cryptix maintains competitive, transparent fees — no hidden charges or inflated spreads." },
    { q: "How fast are transactions?", a: "Most transactions are processed instantly, but network congestion may occasionally cause short delays." },
    { q: "Do I need to verify my identity?", a: "Yes. To comply with financial regulations, all users must complete a quick and secure KYC verification process." },
    { q: "Can I access Cryptix on mobile?", a: "Absolutely! Cryptix is optimized for both Android and iOS, offering the same secure, seamless experience." },
    { q: "How can I contact support?", a: "Our 24/7 support team is available via live chat or email. Expect quick, knowledgeable help anytime." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#0A0A0A] text-white font-inter py-24 px-6 border-t border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto border border-[#1E1E1E]">
        {/* Header */}
        <div className="p-10 border-b border-[#1E1E1E]">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Your Questions, Answered
          </h2>
          <p className="text-gray-400 mt-3 text-base max-w-2xl">
            Find everything you need to know about Cryptix, from security to supported assets.
          </p>
        </div>

        {/* FAQ Two Columns with Independent Heights */}
        <div className="md:columns-2 border-t border-[#1E1E1E] [column-gap:0]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`break-inside-avoid border-b border-[#1E1E1E] p-6 sm:p-8 cursor-pointer transition-colors ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${openIndex === i ? "bg-[#0F0F0F]" : "hover:bg-[#111]"}`}
            >
              {/* Question */}
              <div className="flex justify-between items-center select-none">
                <h3 className="text-lg sm:text-xl font-medium">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={20} color={accent} />
                </motion.div>
              </div>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
