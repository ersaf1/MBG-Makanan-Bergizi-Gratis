"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  MapPin,
  School,
  Utensils,
  TrendingUp,
  Users,
} from "lucide-react";
import { CountUp } from "./CountUp";
import { MBGTruck } from "./MBGTruck";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

      {/* Driving truck */}
      <div className="absolute bottom-28 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-drive opacity-40">
          <MBGTruck size={72} color="#3b82f6" accentColor="#06b6d4" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-surface-card px-4 py-1.5 text-xs font-medium text-muted uppercase tracking-[1.5px] border border-hairline mb-8"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-teal" />
              Program Nasional Indonesia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-[52px] sm:text-[64px] lg:text-[72px] font-normal leading-[1.05] tracking-[-1.5px] text-ink"
            >
              <span className="block">Makan Bergizi</span>
              <span className="block mt-1 text-gradient">Untuk Masa Depan</span>
              <span className="block mt-1">Indonesia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-lg leading-[1.55] text-body max-w-lg"
            >
              Program makanan sehat untuk mendukung generasi Indonesia yang
              lebih kuat, cerdas, dan sehat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-on-primary hover:bg-primary-active active:bg-primary-active transition-colors duration-150"
              >
                Pelajari Program
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#dampak"
                className="inline-flex items-center gap-2 rounded-md bg-canvas px-6 py-3 text-sm font-medium text-ink border border-hairline hover:bg-surface-card transition-colors duration-150"
              >
                Lihat Dampak
              </a>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-14 flex gap-3"
            >
              <div className="rounded-lg bg-surface-card border border-hairline px-5 py-4">
                <div className="text-2xl sm:text-3xl font-display font-normal tracking-[-0.5px] text-ink">
                  <CountUp end={12} suffix="M+" />
                </div>
                <div className="text-xs text-muted mt-0.5 uppercase tracking-[1px] font-medium">
                  Penerima Manfaat
                </div>
              </div>
              <div className="rounded-lg bg-surface-card border border-hairline px-5 py-4">
                <div className="text-2xl sm:text-3xl font-display font-normal tracking-[-0.5px] text-primary">
                  <CountUp end={98} suffix="%" />
                </div>
                <div className="text-xs text-muted mt-0.5 uppercase tracking-[1px] font-medium">
                  Distribusi Berhasil
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card - dark surface */}
              <div className="bg-surface-dark rounded-xl p-6 animate-float-slow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-on-dark-soft font-medium uppercase tracking-[1px]">
                      Dashboard Overview
                    </p>
                    <p className="text-xl font-display text-on-dark mt-1 tracking-[-0.3px]">
                      Monitoring Real-time
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-dark-elevated">
                    <TrendingUp className="h-4 w-4 text-accent-teal" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Utensils, label: "Total Meals", value: "12.4M", color: "text-primary" },
                    { icon: School, label: "Active Schools", value: "1,247", color: "text-accent-teal" },
                    { icon: Users, label: "Beneficiaries", value: "8.2M", color: "text-accent-amber" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-surface-dark-elevated p-4"
                    >
                      <stat.icon className={`h-4 w-4 mb-2 ${stat.color}`} />
                      <p className="text-base font-semibold text-on-dark">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-on-dark-soft mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-surface-dark-soft p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-on-dark-soft uppercase tracking-[1px]">
                      Distribusi Harian
                    </p>
                    <BarChart3 className="h-3.5 w-3.5 text-on-dark-soft" />
                  </div>
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent-amber opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating truck card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-8 bg-canvas rounded-xl p-4 shadow-card border border-hairline animate-float"
              >
                <div className="flex items-center gap-3">
                  <MBGTruck size={44} color="#3b82f6" accentColor="#06b6d4" />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      500+ Truk
                    </p>
                    <p className="text-xs text-muted">Distribusi Aktif</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating map card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-canvas rounded-xl p-4 shadow-card border border-hairline animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-card">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      34 Provinsi
                    </p>
                    <p className="text-xs text-muted">Terjangkau</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </section>
  );
}
