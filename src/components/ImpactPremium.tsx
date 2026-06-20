"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { TrendingUp, Heart, GraduationCap, Users } from "lucide-react";

const stats = [
  { icon: Users, value: 3, suffix: "M+", label: "Anak Terbantu", desc: "Penerima manfaat di seluruh Indonesia" },
  { icon: TrendingUp, value: 25, suffix: "%", label: "Stunting Turun", desc: "Penurunan prevalensi stunting" },
  { icon: GraduationCap, value: 35, suffix: "%", label: "Fokus Naik", desc: "Peningkatan konsentrasi belajar" },
  { icon: Heart, value: 92, suffix: "%", label: "Kehadiran Naik", desc: "Tingkat kehadiran siswa meningkat" },
];

export function ImpactPremium() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-[2px] mb-4">
            Dampak Nyata
          </p>
          <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-2px] text-white leading-[1.05]">
            Dampak Nyata Untuk
            <br />
            <span className="text-gradient">Masa Depan Indonesia</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group text-center p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 mx-auto mb-5">
                <stat.icon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-white">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <p className="mt-2 text-sm font-semibold text-white/90">{stat.label}</p>
              <p className="mt-1 text-xs text-white/40">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

