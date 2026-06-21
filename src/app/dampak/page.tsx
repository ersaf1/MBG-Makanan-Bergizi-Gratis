"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { CountUp } from "@/components/CountUp";
import {
  TrendingUp, Heart, GraduationCap, Brain, Scale,
  MapPin, Star, Quote, ArrowUpRight, BarChart3,
  User,
} from "lucide-react";

const heroStats = [
  { value: 2.4, suffix: "M", label: "Anak Terbantu", icon: Heart },
  { value: 24, suffix: "%", label: "Penurunan Stunting", icon: TrendingUp },
  { value: 35, suffix: "%", label: "Fokus Belajar Naik", icon: Brain },
  { value: 92, suffix: "%", label: "Kehadiran Naik", icon: GraduationCap },
];

const healthMetrics = [
  { label: "Berat Badan Ideal", before: "58%", after: "76%", improvement: "+31%", icon: Scale },
  { label: "Hemoglobin Normal", before: "64%", after: "82%", improvement: "+28%", icon: Heart },
  { label: "Tinggi Badan Sesuai Usia", before: "61%", after: "79%", improvement: "+30%", icon: BarChart3 },
  { label: "Indeks Massa Tubuh Normal", before: "55%", after: "73%", improvement: "+33%", icon: TrendingUp },
];

const academicImpact = [
  { metric: "Nilai Rata-rata Matematika", before: 62, after: 78, unit: "" },
  { metric: "Nilai Rata-rata Bahasa", before: 65, after: 81, unit: "" },
  { metric: "Tingkat Kelulusan", before: 84, after: 94, unit: "%" },
  { metric: "Partisipasi Ekstrakurikuler", before: 42, after: 68, unit: "%" },
];

const provinceData = [
  { name: "DKI Jakarta", schools: 1200, students: "450K", impact: "Sangat Tinggi" },
  { name: "Jawa Barat", schools: 2100, students: "780K", impact: "Sangat Tinggi" },
  { name: "Jawa Tengah", schools: 1800, students: "620K", impact: "Tinggi" },
  { name: "Jawa Timur", schools: 1900, students: "710K", impact: "Tinggi" },
  { name: "Sumatera Utara", schools: 800, students: "310K", impact: "Tinggi" },
  { name: "Sulawesi Selatan", schools: 650, students: "240K", impact: "Sedang" },
  { name: "Kalimantan Timur", schools: 420, students: "160K", impact: "Sedang" },
  { name: "Papua", schools: 280, students: "95K", impact: "Berkembang" },
];

const testimonials = [
  {
    quote: "Anak saya sekarang lebih semangat ke sekolah. Sebelum MBG, dia sering bolos karena lapar. Sekarang nilainya naik terus.",
    name: "Ibu Ratna Sari",
    role: "Orang Tua Siswa, SDN 03 Jakarta",
    avatar: "bg-pink-100 text-pink-600",
  },
  {
    quote: "Sebagai guru, saya melihat perubahan signifikan. Anak-anak lebih fokus, tidak mengantuk, dan aktif bertanya di kelas.",
    name: "Pak Ahmad Hidayat",
    role: "Guru SDN 12 Bandung",
    avatar: "bg-primary/10 text-primary",
  },
  {
    quote: "Program MBG mengubah pola makan keluarga kami. Anak-anak jadi tahu pentingnya makan sayur dan buah setiap hari.",
    name: "Ibu Dewi Lestari",
    role: "Orang Tua Siswa, SDN 07 Surabaya",
    avatar: "bg-purple-100 text-purple-600",
  },
  {
    quote: "Dapur kami bangga bisa berkontribusi. Setiap hari kami memasak untuk 2000 anak dengan standar kebersihan tertinggi.",
    name: "Pak Budi Santoso",
    role: "Kepala Dapur MBG Yogyakarta",
    avatar: "bg-primary/10 text-primary",
  },
];

export default function DampakPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-surface-soft to-canvas overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary-active uppercase tracking-[1px]">Dampak Terukur</span>
              </div>
              <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] font-normal tracking-[-1.5px] text-ink">
                Angka yang <span className="text-gradient">Berbicara</span>
              </h1>
              <p className="mt-4 text-lg text-body max-w-2xl mx-auto leading-relaxed">
                Data real menunjukkan bagaimana MBG mengubah kesehatan, prestasi,
                dan masa depan jutaan anak Indonesia.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
              {heroStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-xl bg-white border border-hairline p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 mx-auto mb-3">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-display text-[36px] font-normal tracking-[-0.5px] text-ink">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Health Impact */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Kesehatan</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Peningkatan Status Kesehatan
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-5">
              {healthMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-white border border-hairline p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5">
                        <m.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-ink">{m.label}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/5 text-xs font-semibold text-primary">
                      <ArrowUpRight className="h-3 w-3" />
                      {m.improvement}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] text-muted-soft uppercase tracking-[1px] mb-1">Sebelum</p>
                      <p className="text-2xl font-display text-muted-soft line-through">{m.before}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-primary uppercase tracking-[1px] mb-1">Sesudah</p>
                      <p className="text-2xl font-display font-medium text-primary-active">{m.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Performance */}
        <section className="py-24 bg-surface-soft">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Akademik</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Prestasi Belajar Meningkat
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {academicImpact.map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-5 rounded-xl bg-white border border-hairline"
                >
                  <span className="text-sm font-medium text-body-strong w-56 shrink-0">{item.metric}</span>
                  <div className="flex-1 flex items-center gap-4">
                    <span className="text-sm text-muted-soft w-12 text-right">{item.before}{item.unit}</span>
                    <div className="flex-1 h-3 rounded-full bg-surface-card overflow-hidden relative">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.after}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary w-12">{item.after}{item.unit}</span>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    +{item.after - item.before}{item.unit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Province Impact */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Per Wilayah</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Dampak Per Provinsi
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {provinceData.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl bg-white border border-hairline p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-ink">{p.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="rounded-lg bg-primary/5 p-2 text-center">
                      <p className="text-sm font-display font-medium text-primary-active">{p.schools}</p>
                      <p className="text-[10px] text-primary">Sekolah</p>
                    </div>
                    <div className="rounded-lg bg-accent-teal/5 p-2 text-center">
                      <p className="text-sm font-display font-medium text-accent-teal">{p.students}</p>
                      <p className="text-[10px] text-accent-teal">Siswa</p>
                    </div>
                  </div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    p.impact === "Sangat Tinggi" ? "bg-primary/5 text-primary" :
                    p.impact === "Tinggi" ? "bg-primary/5 text-primary" :
                    p.impact === "Sedang" ? "bg-accent-amber/5 text-accent-amber" :
                    "bg-surface-card text-body"
                  }`}>
                    {p.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-surface-dark to-surface-dark-elevated">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-on-dark-soft uppercase tracking-[1.5px] mb-3">Suara Mereka</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-white">
                Cerita dari Lapangan
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-8"
                >
                  <Quote className="h-6 w-6 text-on-dark-soft mb-4" />
                  <p className="text-white/90 leading-relaxed mb-6 text-sm">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${t.avatar}`}>
                      <User className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-on-dark-soft">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
