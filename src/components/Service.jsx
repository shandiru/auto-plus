"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSwap, { Card } from "./CardSwap";

export default function OurServices() {
  const [viewport, setViewport] = useState("desktop");

  useEffect(() => {
    const detectViewport = () => {
      if (window.innerWidth < 640) setViewport("mobile");
      else if (window.innerWidth < 1024) setViewport("tablet");
      else setViewport("desktop");
    };
    detectViewport();
    window.addEventListener("resize", detectViewport);
    return () => window.removeEventListener("resize", detectViewport);
  }, []);

  const services = [
    {
      id: 0,
      title: "Auto Electricians",
      description:
        "Our professional auto electricians handle all electrical faults, retrofits, and repairs using the latest tools to keep your vehicle performing at its best.",
      stats: [
        { value: "1,000+", label: "Electrical Repairs Completed" },
        { value: "97%", label: "First-Time Fix Rate" },
      ],
      image:
        "a1.png",
    },
    {
      id: 1,
      title: "Key Cutting",
      description:
        "We provide quick, precise key cutting for all makes and models — mobile, reliable, and done on-site for your convenience.",
      stats: [
        { value: "400+", label: "Keys Cut On-Site" },
        { value: "99%", label: "Accuracy in Blade Matching" },
      ],
      image:
        "ke.png",
    },
    {
      id: 2,
      title: "Key Programming",
      description:
        "From lost keys to new remotes, we program and sync keys for all car brands, ensuring seamless access and start-up every time.",
      stats: [
        { value: "350+", label: "Keys Programmed Successfully" },
        { value: "100%", label: "Compatibility Guarantee" },
      ],
      image:
        "k1.png",
    },
    {
      id: 3,
      title: "Diagnostics",
      description:
        "Using dealer-level diagnostic equipment, we identify electrical faults quickly and accurately — saving time, money, and guesswork.",
      stats: [
        { value: "95%", label: "Faults Detected Within 30 Minutes" },
        { value: "500+", label: "Vehicles Diagnosed Across Nottinghamshire" },
      ],
      image:
        "d1.png",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  // Dynamically adjust size
  const getSize = () => {
    if (viewport === "mobile") return { width: 340, height: 420 };
    if (viewport === "tablet") return { width: 700, height: 420 };
    return { width: 900, height: 380 }; // desktop fixed height
  };

  const { width, height } = getSize();

  return (
    <section
      className="relative overflow-hidden bg-[#000000] text-white font-inter py-16 md:py-20 border-t border-[#1A1A1A]"
      id="services"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl opacity-70">
        <div
          className="absolute left-1/2 top-[25%] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,59,59,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Section Badge */}
        <p
          data-aos="fade-down"
          className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-5"
        >
          Our Services
        </p>

        {/* Heading */}
        <h2
          data-aos="zoom-in"
          className="mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          Expert <span className="italic text-[#FF3B3B]">Auto Electrical</span>{" "}
          Solutions
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-10 text-sm sm:text-base text-[#AAAAAA] max-w-2xl mx-auto"
        >
          From diagnostics to key programming, we bring professional-grade
          service directly to your driveway.
        </p>

        {/* GSAP Card Stack */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative mx-auto flex w-full items-center justify-center overflow-visible mt-36 sm:mt-36 md:mt-36"
          style={{ height }}
        >
          <CardSwap width={width} height={height} delay={5000} pauseOnHover>
            {services.map((s) => (
              <Card key={s.id}>
                <article className="rounded-2xl border border-[#1E1E1E] bg-[#0C0C0C] shadow-[0_8px_40px_rgba(0,0,0,0.45)] overflow-hidden backdrop-blur-md">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-[#1E1E1E] bg-[#111111]">
                    <h3 className="text-[#FF3B3B] font-semibold text-base sm:text-lg tracking-wide">
                      {s.title}
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#FF4B4B]/70"></div>
                      <div className="w-2 h-2 rounded-full bg-[#FF9F43]/70"></div>
                      <div className="w-2 h-2 rounded-full bg-[#4BFF75]/70"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
                    {/* Text */}
                    <div className="text-left order-2 md:order-1">
                      <p className="mb-6 sm:mb-8 text-[14px] sm:text-[15px] leading-relaxed text-[#CCCCCC]">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {s.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex-1 min-w-[120px] sm:min-w-[140px] rounded-xl border border-[#222] bg-[#121212] p-3 sm:p-4 text-center"
                          >
                            <div className="text-xl sm:text-2xl font-semibold text-white">
                              {stat.value}
                            </div>
                            <div className="text-[11px] sm:text-xs text-gray-500 mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden rounded-xl order-1 md:order-2">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </article>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
