"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Play, Users, ForkKnife, MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import { CountUp } from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function HeroPremium() {
  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden pb-16 lg:pb-24">
      {/* Background Image */}
      <Image
        src="/images/hero-building.png"
        alt="Gedung MBG"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Multi-layer overlay — cinematic depth */}
      <div className="absolute inset-0 bg-surface-dark/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/85 via-surface-dark/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-surface-dark/20 z-10" />

      {/* Ambient orbs — warm-tinted */}
      <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-primary/12 rounded-full blur-[180px] z-10" />
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-accent-amber/8 rounded-full blur-[140px] z-10" />

      <div className="relative z-20 mx-auto max-w-[1280px] px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* ── Left: Editorial Typography ── */}
          <div className="pt-32 lg:pt-40">
            {/* Eyebrow */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                Program Nasional Indonesia
              </span>
            </motion.div>

            {/* Massive Serif Headline */}
            <motion.h1
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 font-display text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.04em] text-white"
            >
              Makan Bergizi
              <br />
              Untuk Masa Depan
              <br />
              <span className="text-gradient">Indonesia</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.7}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 text-lg text-white/50 max-w-md leading-relaxed"
            >
              Program penyediaan makanan sehat dan bergizi untuk mendukung generasi
              Indonesia yang lebih kuat, cerdas, dan sehat.
            </motion.p>

            {/* CTA Buttons — Button-in-Button pattern */}
            <motion.div
              custom={0.9}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#program"
                className="inline-flex items-center gap-2.5 pl-6 pr-1.5 py-1.5 rounded-full bg-white text-surface-dark text-[14px] font-medium shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
              >
                <span>Jelajahi Program</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-dark/[0.06] group-hover:bg-surface-dark/10 group-hover:translate-x-0.5 transition-all duration-500">
                  <ArrowRight className="h-4 w-4" weight="bold" />
                </span>
              </a>
              <a
                href="#proses"
                className="inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/10 text-white text-[14px] font-medium hover:bg-white/[0.12] hover:border-white/15 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
              >
                <Play className="h-4 w-4" weight="fill" />
                <span>Lihat Distribusi</span>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.2 }}
              className="mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
              >
                <ArrowDown className="h-4 w-4 text-white/25" weight="light" />
              </motion.div>
              <span className="text-[11px] text-white/30 tracking-widest uppercase">
                Scroll
              </span>
            </motion.div>
          </div>

          {/* ── Right: Floating Glass Stat Panel ── */}
          <motion.div
            custom={1.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hidden lg:flex lg:justify-end"
          >
            <div className="w-full max-w-md">
              {/* Main glass card */}
              <div className="relative rounded-[2rem] overflow-hidden">
                {/* Glass surface */}
                <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem]" />
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] rounded-[calc(2rem-1px)]" />

                <div className="relative p-10">
                  {/* Hero stat */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Users className="h-4 w-4 text-white/25" weight="light" />
                      <span className="text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">
                        Penerima Manfaat
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-7xl font-display font-normal text-white leading-none tabular-nums">
                        <CountUp end={3} suffix="" duration={2.5} />
                      </span>
                      <span className="text-2xl font-display font-normal text-primary leading-none">
                        Juta+
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mb-8" />

                  {/* Secondary stats */}
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <ForkKnife className="h-3.5 w-3.5 text-white/20" weight="light" />
                        <span className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Dapur Aktif</span>
                      </div>
                      <span className="text-3xl font-display font-normal text-white/90 leading-none tabular-nums">
                        <CountUp end={500} suffix="+" duration={2.5} />
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-3.5 w-3.5 text-white/20" weight="light" />
                        <span className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Wilayah</span>
                      </div>
                      <span className="text-3xl font-display font-normal text-white/90 leading-none tabular-nums">
                        <CountUp end={100} suffix="+" duration={2.5} />
                      </span>
                    </div>
                  </div>

                  {/* Growth chart */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-white/15 uppercase tracking-[0.2em]">
                        Pertumbuhan 2024–2026
                      </span>
                      <span className="text-[11px] text-accent-teal font-medium tabular-nums">
                        +47.2%
                      </span>
                    </div>
                    {/* Sparkline */}
                    <div className="relative h-16">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="h-px bg-white/[0.04]" />
                        ))}
                      </div>
                      {/* Bars */}
                      <div className="relative h-full flex items-end gap-[3px]">
                        {[28, 35, 32, 48, 55, 50, 65, 60, 78, 72, 88, 82].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                              delay: 1.8 + i * 0.06,
                              duration: 1,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex-1 rounded-[3px] origin-bottom"
                            style={{
                              height: `${h}%`,
                              background: i >= 10
                                ? "linear-gradient(to top, rgba(204,120,92,0.5), rgba(204,120,92,0.2))"
                                : "linear-gradient(to top, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/20 blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas via-canvas/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
