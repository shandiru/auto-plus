"use client";
import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Wrench } from "lucide-react";

export default function Footer() {
  const accent = "#FF3B3B";

  return (
    <footer className="bg-[#000000] text-white font-inter border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1A1A1A] pb-12">
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Auto<span className="text-[#FF3B3B]">Plus</span>
            </h2>
            <p className="text-[#CCCCCC] text-sm mt-4 leading-relaxed max-w-[260px]">
              Professional mobile auto electricians providing expert diagnostics,
              key programming, and electrical repairs across Nottinghamshire.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contact</h4>
            <ul className="space-y-3 text-[#CCCCCC] text-sm">
              <li className="flex items-center gap-3 hover:text-[#FF3B3B] transition-colors">
                <Phone size={18} color={accent} />
                <a href="tel:+447495159438">+44 7495 159438</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#FF3B3B] transition-colors">
                <Mail size={18} color={accent} />
                <a href="mailto:info@autoplusnottingham.co.uk">
                  info@autoplusnottingham.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 hover:text-[#FF3B3B] transition-colors">
                <MapPin size={18} color={accent} className="mt-1" />
                <span>Nottinghamshire, United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3 text-[#CCCCCC] text-sm">
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                Auto Electrical Repairs
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                Diagnostics
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                Key Cutting
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                Key Programming
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                Dashcam Installation
              </li>
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-[#CCCCCC] text-sm">
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/faq">FAQ</a>
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/contact">Contact</a>
              </li>
              {/* Added Terms & Privacy links */}
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li className="hover:text-[#FF3B3B] transition-colors cursor-pointer">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-[#777777] gap-4">
          <p>
            © {new Date().getFullYear()} AutoPlus Nottingham. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/p/AutoPlus-Nottingham-100092195330520"
              className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/Autoplusnottingham/"
              className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 border border-[#1A1A1A] rounded-full hover:bg-[#FF3B3B] transition"
            >
              <Wrench size={16} />
            </a>
          </div>
        </div>

        {/* Powered by Ansely */}
        <div className="mt-6 text-center text-xs text-[#777777]">
          <span>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF3B3B] font-semibold tracking-wide hover:underline hover:text-[#ff5c5c] transition-colors duration-300"
            >
              Ansely
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
