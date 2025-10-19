"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServices() {
  const [active, setActive] = useState(0);

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
        "https://images.unsplash.com/photo-1625047509168-7c43c6a5745d?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1615652669283-1e44b43fafd6?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1613544922001-4a9bdb8b13a2?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1607860108855-0b8c74d73cd3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // allows animation on both scroll up & down
    });

    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % services.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#000000] text-white font-inter py-24 border-t border-[#1A1A1A]"
      id="services"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl opacity-70">
        <div
          className="absolute left-1/2 top-[25%] -translate-x-1/2 w-[1400px] h-[1400px] rounded-full blur-[150px]"
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
          className="inline-block border border-[#ff3b3b33] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#ff6666] mb-6"
        >
          Our Services
        </p>

        {/* Heading */}
        <h2
          data-aos="zoom-in"
          className="mb-3 text-4xl md:text-5xl font-semibold text-white"
        >
          Expert <span className="italic text-[#FF3B3B]">Auto Electrical</span>{" "}
          Solutions
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-20 text-base text-[#AAAAAA] max-w-2xl mx-auto"
        >
          From diagnostics to key programming, we bring professional-grade
          service directly to your driveway.
        </p>

        {/* 3D Card Stack */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative mx-auto flex h-[520px] w-full max-w-[940px] items-center justify-center [perspective:1400px] [transform-style:preserve-3d]"
        >
          {services.map((s, i) => {
            const offset = i - active;
            const depth = Math.abs(offset);
            const isActive = offset === 0;
            const translateY = offset * 50;
            const translateZ = -depth * 120;
            const scale = 1 - depth * 0.08;

            return (
              <div
                key={s.id}
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
                className="absolute w-full transition-all duration-[1100ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex: 100 - depth,
                  opacity: isActive ? 1 : 0.65,
                  filter: isActive ? "none" : "blur(2px) brightness(0.8)",
                }}
              >
                <article className="rounded-2xl border border-[#ff3b3b33] bg-[#0A0A0A]/95 shadow-[0_0_50px_rgba(255,59,59,0.15)] backdrop-blur-md overflow-hidden hover:shadow-[0_0_60px_rgba(255,59,59,0.25)] transition-shadow duration-700">
                  {/* Header */}
                  <div className="bg-[#141414]/80 px-6 py-3 text-left border-b border-[#ff3b3b33]">
                    <h3 className="text-lg md:text-xl font-semibold text-[#FF3B3B] tracking-wide">
                      {s.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-10">
                    {/* Text */}
                    <div className="text-left">
                      <p className="mb-8 text-[15px] leading-relaxed text-[#CCCCCC]">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {s.stats.map((stat) => (
                          <div
                            key={stat.label}
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="flex-1 min-w-[140px] rounded-lg border border-[#ff3b3b33] bg-[#111111]/60 p-4 text-center transition hover:bg-[#1A1A1A]"
                          >
                            <div className="text-2xl font-semibold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-[#AAAAAA] mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      data-aos="fade-left"
                      className="relative h-56 md:h-64 overflow-hidden rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover rounded-xl transition-transform duration-[1200ms] hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14 flex justify-center gap-2"
        >
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-[#FF3B3B] scale-125 shadow-[0_0_15px_rgba(255,59,59,0.8)]"
                  : "bg-[#FF3B3B]/20 hover:bg-[#FF3B3B]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
