"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { TrendUp, Heart, GraduationCap, Users } from "@phosphor-icons/react";

const stats = [
  {
    icon: Users,
    value: 3,
    suffix: "M+",
    label: "Anak Terbantu",
    desc: "Penerima manfaat di seluruh Indonesia",
    span: "lg:col-span-2",
  },
  {
    icon: TrendUp,
    value: 25,
    suffix: "%",
    label: "Stunting Turun",
    desc: "Penurunan prevalensi stunting",
    span: "lg:col-span-1",
  },
  {
    icon: GraduationCap,
    value: 35,
    suffix: "%",
    label: "Fokus Naik",
    desc: "Peningkatan konsentrasi belajar",
    span: "lg:col-span-1",
  },
  {
    icon: Heart,
    value: 92,
    suffix: "%",
    label: "Kehadiran Naik",
    desc: "Tingkat kehadiran siswa meningkat",
    span: "lg:col-span-2",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ImpactPremium() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark-elevated to-surface-dark" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-amber/5 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="eyebrow mb-4">Dampak Nyata</span>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-normal tracking-[-0.04em] text-on-dark leading-[1.02]">
            Dampak Nyata Untuk
            <br />
            <span className="text-gradient">Masa Depan Indonesia</span>
          </h2>
        </motion.div>

        {/* Bento Grid — Double-Bezel Dark */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`group ${stat.span}`}
            >
              {/* Outer Shell */}
              <div className="bezel-dark h-full">
                {/* Inner Core */}
                <div className="bezel-dark-inner bg-white/[0.03] p-8 h-full flex flex-col justify-between shadow-inner-highlight-dark transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white/[0.05]">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15 mb-6">
                      <stat.icon
                        className="h-5 w-5 text-primary"
                        weight="light"
                      />
                    </div>
                    <div className="text-5xl sm:text-6xl font-display font-medium text-on-dark leading-none tabular-nums">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white/80">
                      {stat.label}
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-white/30">{stat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
