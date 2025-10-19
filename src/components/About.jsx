"use client";
import React, { useEffect, useState } from "react";

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" />
    <path
      d="M4 20a8 8 0 0 1 16 0"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const testimonials = [
  {
    id: 0,
    title: "Emily's E-commerce Success",
    text: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "70%", label: "growth in sales" },
      { value: "50%", label: "rise in engagement" },
    ],
  },
  {
    id: 1,
    title: "Max's SaaS Revolution",
    text: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth.",
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "60%", label: "increase in ROI" },
      { value: "45%", label: "boost in revenue" },
    ],
  },
  {
    id: 2,
    title: "Sophia's Retail Breakthrough",
    text: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "40%", label: "gain in retention" },
      { value: "50%", label: "surge in profits" },
    ],
  },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#04070D] text-white py-24">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl opacity-80">
        <div
          className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 35%, rgba(120,160,255,0.08) 0%, rgba(4,7,13,0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow */}
        <div className="mx-auto mb-6 inline-block rounded-full border border-white/10 px-4 py-1 text-sm uppercase tracking-wider text-gray-400">
          Our Clients
        </div>

        {/* Heading */}
        <h2 className="mb-3 text-4xl font-medium md:text-5xl">
          Success Stories to{" "}
          <span className="font-serif italic text-gray-300">Inspire</span>
        </h2>
        <p className="mb-16 text-lg text-gray-400">
          Discover how businesses and creators achieve results
        </p>

        {/* 3D Stack */}
        <div className="relative mx-auto flex h-[470px] w-full max-w-[920px] items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
          {testimonials.map((t, i) => {
            const offset = i - active;
            const depth = Math.abs(offset);
            const isActive = offset === 0;

            const translateY = offset * 44;
            const translateZ = -depth * 80;
            const scale = 1 - depth * 0.06;

            return (
              <div
                key={t.id}
                className={`absolute w-full transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]`}
                style={{
                  transform: `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex: 100 - depth,
                  opacity: isActive ? 1 : 0.7,
                  filter: isActive ? "none" : "blur(1px)",
                }}
              >
                <article className="rounded-2xl border border-white/10 bg-[#0A0F18]/95 shadow-[0_0_45px_rgba(120,160,255,0.16)] backdrop-blur-md">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-[#0B111C]/95 px-5 py-2 rounded-t-2xl">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <UserIcon className="text-gray-400" />
                  </div>

                  {/* Body */}
                  <div className="grid items-center gap-8 p-8 md:grid-cols-2">
                    <div className="text-left">
                      <h3 className="mb-2 text-xl font-semibold">{t.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-300/80">
                        {t.text}
                      </p>
                      <div className="flex gap-5">
                        {t.stats.map((s) => (
                          <div
                            key={s.label}
                            className="flex-1 rounded-lg border border-white/10 bg-white/5 p-4 text-center transition hover:bg-white/[0.08]"
                          >
                            <div className="text-2xl font-semibold">
                              {s.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-52 overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="h-full w-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                active === i
                  ? "bg-white scale-125"
                  : "bg-white/15 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="mx-auto mt-16 max-w-3xl text-lg italic leading-relaxed text-gray-400">
          “They grasped our <span className="text-white">pain points</span>, knew
          exactly who we needed to reach, and helped us stand out. Their
          solutions delivered real,{" "}
          <span className="text-white">impactful results!</span>”
        </p>
      </div>
    </section>
  );
}
