"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { CountUp } from "./CountUp";
import {
  Truck,
  School,
  ChefHat,
  Users,
  TrendingUp,
  MapPin,
  Zap,
  ShieldCheck,
} from "lucide-react";

const liveStats = [
  { icon: Truck, label: "Truk Aktif", value: 523, suffix: "", color: "bg-blue-500", trend: "+12 hari ini" },
  { icon: School, label: "Sekolah Terjangkau", value: 1247, suffix: "+", color: "bg-cyan-500", trend: "+34 minggu ini" },
  { icon: ChefHat, label: "Dapur Operasional", value: 518, suffix: "", color: "bg-emerald-500", trend: "98.2% aktif" },
  { icon: Users, label: "Penerima Manfaat", value: 2.4, suffix: "M", prefix: "", color: "bg-amber-500", trend: "+120rb bulan ini" },
];

const regions = [
  { name: "Jawa", schools: 4200, status: "active", progress: 92 },
  { name: "Sumatera", schools: 2800, status: "active", progress: 78 },
  { name: "Kalimantan", schools: 1500, status: "active", progress: 65 },
  { name: "Sulawesi", schools: 1200, status: "expanding", progress: 54 },
  { name: "Papua", schools: 600, status: "expanding", progress: 38 },
];

const recentActivity = [
  { time: "2 menit lalu", text: "523 paket dikirim ke SDN 01 Jakarta", icon: Truck },
  { time: "15 menit lalu", text: "Quality check selesai — Dapur Bandung", icon: ShieldCheck },
  { time: "1 jam lalu", text: "Distribusi Sulawesi mencapai target harian", icon: TrendingUp },
];

export function DashboardOverview() {
  return (
    <section className="py-20 lg:py-24 bg-canvas relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-600 uppercase tracking-[1px]">Live Dashboard</span>
          </div>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Monitoring Real-Time
          </h2>
          <p className="mt-3 text-base text-muted max-w-lg mx-auto">
            Pantau distribusi makanan bergizi di seluruh Indonesia secara langsung
          </p>
        </AnimatedSection>

        {/* Live stat cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10" staggerDelay={0.1}>
          {liveStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="group relative rounded-xl bg-white border border-slate-100 p-5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-default"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color}/10`}>
                    <stat.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    {stat.trend}
                  </div>
                </div>
                <div className="font-display text-[28px] sm:text-[32px] font-normal tracking-[-0.5px] text-slate-900">
                  {stat.prefix || ""}
                  {typeof stat.value === "number" && stat.value % 1 !== 0
                    ? stat.value.toFixed(1)
                    : <CountUp end={stat.value as number} />}
                  {stat.suffix}
                </div>
                <p className="mt-1 text-xs text-slate-500 font-medium">{stat.label}</p>

                {/* Subtle gradient border on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main dashboard grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map / Distribution Panel */}
          <AnimatedSection className="lg:col-span-2 rounded-xl bg-white border border-slate-100 p-6" delay={0.2}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Peta Distribusi</h3>
                <p className="text-xs text-slate-500 mt-0.5">Jangkauan per wilayah</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> Aktif
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Ekspansi
                </span>
              </div>
            </div>

            {/* Visual map representation */}
            <div className="relative bg-slate-50 rounded-lg p-6 mb-6 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }} />
              <div className="relative flex flex-wrap justify-center gap-3">
                {regions.map((region, i) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group"
                  >
                    <div className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default">
                      <MapPin className="h-3.5 w-3.5 text-blue-500" />
                      <span className="text-sm font-medium text-slate-700">{region.name}</span>
                      <span className="text-[11px] text-slate-400">{region.schools.toLocaleString()}</span>
                      {region.status === "active" && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Region progress */}
            <div className="space-y-3">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-sm font-medium text-slate-700 w-20">{region.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${region.status === "active" ? "bg-blue-500" : "bg-amber-400"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 w-10 text-right">{region.progress}%</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Activity feed */}
          <AnimatedSection className="rounded-xl bg-white border border-slate-100 p-6" delay={0.3}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Aktivitas Terkini</h3>
                <p className="text-xs text-slate-500 mt-0.5">Update real-time</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                <Zap className="h-3 w-3 text-emerald-600" />
                <span className="text-[11px] font-medium text-emerald-600">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 border border-blue-100">
                    <item.icon className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-700 leading-snug">{item.text}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status summary */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-blue-50 p-3 text-center">
                  <p className="text-lg font-display text-blue-700">99.7%</p>
                  <p className="text-[11px] text-blue-500 mt-0.5">Uptime Sistem</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 text-center">
                  <p className="text-lg font-display text-emerald-700">4.8/5</p>
                  <p className="text-[11px] text-emerald-500 mt-0.5">Kepuasan</p>
                </div>
              </div>
            </div>

            {/* Partners row */}
            <div className="mt-5 pt-5 border-t border-slate-100">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-[1px] mb-3">Mitra Utama</p>
              <div className="flex flex-wrap gap-2">
                {["🏫 Sekolah", "🍳 Dapur MBG", "🏪 UMKM", "🌾 Petani", "🏥 Kesehatan"].map((p) => (
                  <span key={p} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
