"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Apple, Beef, Droplets, Flame, Wheat, Milk,
  TrendingUp, Activity, Heart, Brain, Eye, Bone,
  CheckCircle2, ArrowRight, Quote,
} from "lucide-react";

const macroNutrients = [
  { icon: Beef, name: "Protein", amount: "25-30g", pct: 30, color: "bg-primary", desc: "Membangun otot & jaringan tubuh" },
  { icon: Wheat, name: "Karbohidrat", amount: "60-70g", pct: 45, color: "bg-accent-teal/50", desc: "Sumber energi utama otak & aktivitas" },
  { icon: Droplets, name: "Lemak Sehat", amount: "15-20g", pct: 20, color: "bg-accent-amber", desc: "Penyerapan vitamin & perkembangan otak" },
  { icon: Apple, name: "Serat", amount: "8-12g", pct: 15, color: "bg-primary", desc: "Kesehatan pencernaan & metabolisme" },
];

const microNutrients = [
  { icon: Bone, name: "Kalsium", value: "450mg", pct: 45, benefit: "Tulang & gigi kuat" },
  { icon: Heart, name: "Zat Besi", value: "12mg", pct: 80, benefit: "Mencegah anemia" },
  { icon: Brain, name: "Omega-3", value: "250mg", pct: 60, benefit: "Perkembangan otak" },
  { icon: Eye, name: "Vitamin A", value: "500IU", pct: 70, benefit: "Kesehatan mata" },
  { icon: Activity, name: "Vitamin C", value: "45mg", pct: 90, benefit: "Daya tahan tubuh" },
  { icon: Flame, name: "Vitamin D", value: "200IU", pct: 50, benefit: "Penyerapan kalsium" },
];

const dailyMenu = [
  {
    time: "Pagi",
    meal: "Sarapan Sekolah",
    items: ["Nasi putih / nasi merah", "Ayam bakar / ikan panggang", "Sayur bayam / tumis kangkung", "Buah segar (pisang / jeruk)", "Susu UHT 200ml"],
    calories: "450-520 kkal",
  },
  {
    time: "Siang",
    meal: "Makan Siang",
    items: ["Nasi kuning / nasi gandum", "Telur rebus / tempe goreng", "Sayur sop / sayur lodeh", "Buah potong", "Air putih"],
    calories: "480-550 kkal",
  },
];

const expertQuotes = [
  {
    quote: "Program MBG adalah terobosan luar biasa. Dengan pemenuhan gizi yang tepat, kita bisa menurunkan prevalensi stunting hingga 40% dalam 5 tahun ke depan.",
    name: "Dr. Siti Nadia Tarmizi",
    role: "Ahli Gizi Anak, Universitas Indonesia",
  },
  {
    quote: "Anak yang mendapat asupan gizi seimbang memiliki daya konsentrasi 30% lebih baik di kelas. Ini investasi jangka panjang untuk bangsa.",
    name: "Prof. Dr. Hardinsyah",
    role: "Ketua Pergizi Pangan Indonesia",
  },
];

const beforeAfter = [
  { metric: "Prevalensi Stunting", before: "24.4%", after: "18.2%", change: "-25%" },
  { metric: "Asupan Kalori Harian", before: "380 kkal", after: "485 kkal", change: "+28%" },
  { metric: "Konsentrasi Belajar", before: "62%", after: "84%", change: "+35%" },
  { metric: "Kehadiran Sekolah", before: "78%", after: "92%", change: "+18%" },
];

export default function NutrisiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-surface-soft to-canvas overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
                <Apple className="h-3.5 w-3.5 text-accent-teal" />
                <span className="text-xs font-medium text-accent-teal uppercase tracking-[1px]">Standar Nutrisi</span>
              </div>
              <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] font-normal tracking-[-1.5px] text-ink">
                Gizi <span className="text-gradient">Terukur</span> & Terstandar
              </h1>
              <p className="mt-4 text-lg text-body max-w-2xl mx-auto leading-relaxed">
                Setiap paket MBG dirancang oleh ahli gizi bersertifikat dengan standar
                yang mengacu pada Angka Kecukupan Gizi (AKG) Kemenkes RI.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Macro Nutrients */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Makronutrien</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Komposisi Per Paket
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
              {macroNutrients.map((n) => (
                <StaggerItem key={n.name}>
                  <motion.div
                    className="rounded-xl bg-white border border-hairline p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 mb-4">
                      <n.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-ink">{n.name}</h3>
                    <p className="text-2xl font-display text-primary mt-1">{n.amount}</p>
                    <p className="text-xs text-muted mt-2 mb-4">{n.desc}</p>
                    <div className="h-1.5 rounded-full bg-surface-card overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${n.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${n.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <p className="text-[11px] text-muted-soft mt-1.5">{n.pct}% AKG</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Micro Nutrients Grid */}
        <section className="py-24 bg-surface-soft">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Mikronutrien</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Vitamin & Mineral Essential
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {microNutrients.map((n, i) => (
                <motion.div
                  key={n.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-hairline hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                    <n.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-ink">{n.name}</span>
                      <span className="text-sm font-display text-primary">{n.value}</span>
                    </div>
                    <p className="text-xs text-muted mt-0.5">{n.benefit}</p>
                    <div className="h-1 rounded-full bg-surface-card overflow-hidden mt-2">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${n.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Menu Breakdown */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Menu Harian</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Contoh Menu Sehari
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {dailyMenu.map((menu, i) => (
                <motion.div
                  key={menu.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-xl bg-white border border-hairline overflow-hidden"
                >
                  <div className="bg-primary px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-on-dark-soft uppercase tracking-[1px]">{menu.time}</p>
                      <p className="text-lg font-semibold text-white">{menu.meal}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-white">
                      {menu.calories}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    {menu.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-body-strong">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="py-24 bg-surface-soft">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Dampak Gizi</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink">
                Sebelum & Sesudah MBG
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beforeAfter.map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-white border border-hairline p-6 text-center"
                >
                  <p className="text-xs font-medium text-muted uppercase tracking-[1px] mb-4">{item.metric}</p>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-lg text-muted-soft line-through">{item.before}</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-display font-medium text-ink">{item.after}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    item.change.startsWith("+") ? "bg-primary/5 text-primary" : "bg-primary/5 text-primary"
                  }`}>
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    {item.change}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Quotes */}
        <section className="py-24 bg-gradient-to-b from-surface-dark to-surface-dark-elevated">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <p className="text-xs font-medium text-on-dark-soft uppercase tracking-[1.5px] mb-3">Opini Ahli</p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-white">
                Kata Para Ahli Gizi
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {expertQuotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-8"
                >
                  <Quote className="h-8 w-8 text-on-dark-soft mb-4" />
                  <p className="text-white leading-relaxed mb-6">{q.quote}</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{q.name}</p>
                    <p className="text-xs text-on-dark-soft">{q.role}</p>
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
