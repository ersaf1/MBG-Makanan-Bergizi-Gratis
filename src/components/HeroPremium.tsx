"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Play, Users, ChefHat, MapPin } from "lucide-react";
import Image from "next/image";
import { CountUp } from "./CountUp";

const stats = [
  { value: 3, suffix: "M+", label: "Penerima Manfaat", icon: Users },
  { value: 500, suffix: "+", label: "Dapur Aktif", icon: ChefHat },
  { value: 100, suffix: "+", label: "Wilayah", icon: MapPin },
];

export function HeroPremium() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-building.png"
        alt="Gedung MBG"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-slate-900/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-10" />

      {/* Decorative blur orbs */}
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px] z-10" />
      <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] z-10" />

      <div className="relative z-20 mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-32 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 mb-10"
        >
          <span className="text-base">🇮🇩</span>
          <span className="text-xs font-medium text-white/80 tracking-wide">
            Program Nasional Indonesia
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[52px] sm:text-[68px] md:text-[80px] lg:text-[88px] xl:text-[96px] font-bold leading-[0.92] tracking-[-3px] text-white max-w-4xl"
        >
          Makan Bergizi
          <br />
          Untuk Masa Depan
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Indonesia
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-7 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed"
        >
          Program penyediaan makanan sehat dan bergizi untuk mendukung generasi
          Indonesia yang lebih kuat, cerdas, dan sehat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#program"
            className="inline-flex items-center gap-2.5 h-[60px] px-10 rounded-full bg-white text-slate-900 text-[15px] font-semibold shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 hover:scale-[1.03] active:scale-[1.01] transition-all duration-300"
          >
            Jelajahi Program
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#proses"
            className="inline-flex items-center gap-2.5 h-[60px] px-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 text-white text-[15px] font-medium hover:bg-white/15 hover:border-white/35 transition-all duration-300"
          >
            <Play className="h-4 w-4" />
            Lihat Distribusi
          </a>
        </motion.div>

        {/* Floating Glass Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 inline-block"
        >
          <div className="bg-white/[0.12] backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl shadow-black/20 px-8 py-7 sm:px-12 sm:py-9">
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8 sm:gap-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <stat.icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-display font-bold text-white leading-none">
                        <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                      </div>
                      <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-14 bg-white/15" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex flex-col items-start gap-2"
        >
          <span className="text-xs text-white/40 tracking-wide">
            Scroll untuk melihat perjalanan MBG
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-white/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
