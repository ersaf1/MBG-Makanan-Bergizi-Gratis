"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Wheat, ChefHat, ShieldCheck, Truck, Smile,
  CheckCircle2, ArrowRight, Clock, MapPin, Users,
  Leaf, Heart, GraduationCap, Target, FileCheck,
} from "lucide-react";

const phases = [
  {
    step: "01",
    icon: Wheat,
    title: "Pengadaan Bahan",
    desc: "Bahan baku dipilih langsung dari petani lokal dan UMKM tersertifikasi. Setiap bahan melewati uji kualitas sebelum masuk ke dapur.",
    details: ["Kerjasama 2.000+ petani lokal", "Uji lab setiap batch", "Rantai dingin terjaga"],
  },
  {
    step: "02",
    icon: ChefHat,
    title: "Produksi Dapur",
    desc: "Dimasak di 500+ dapur bersertifikat HACCP oleh juru masak terlatih dengan standar kebersihan tertinggi.",
    details: ["Standar HACCP & ISO 22000", "Menu rotasi 4 minggu", "Dapur tersebar di 34 provinsi"],
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Tim ahli gizi melakukan pemeriksaan nutrisi, keamanan pangan, dan porsi sebelum dikemas.",
    details: ["Cek 20+ parameter nutrisi", "Suhu & kebersihan terukur", "Dokumentasi lengkap"],
  },
  {
    step: "04",
    icon: Truck,
    title: "Distribusi",
    desc: "500+ truk berpendingin mengantar paket makanan ke ribuan sekolah setiap pagi sebelum jam istirahat.",
    details: ["GPS tracking real-time", "Suhu terkontrol 2-8\u00b0C", "Rute dioptimalkan AI"],
  },
  {
    step: "05",
    icon: Smile,
    title: "Penyajian",
    desc: "Makanan disajikan hangat di meja makan sekolah oleh petugas kantin yang terlatih keamanan pangan.",
    details: ["Porsi sesuai usia", "Penyajian higienis", "Monitoring kepuasan siswa"],
  },
];

const eligibility = [
  { icon: GraduationCap, title: "Siswa PAUD \u2013 SMA/SMK", desc: "Seluruh jenjang pendidikan di bawah naungan Kemendikbud" },
  { icon: MapPin, title: "34 Provinsi", desc: "Menjangkau seluruh wilayah Indonesia dari Sabang sampai Merauke" },
  { icon: Users, title: "Prioritas Daerah 3T", desc: "Tertinggal, Terdepan, Terluar mendapat alokasi prioritas" },
  { icon: Heart, title: "Tanpa Diskriminasi", desc: "Semua anak mendapat hak yang sama tanpa memandang latar belakang" },
];

const requirements = [
  "Terdaftar di sekolah negeri atau swasta yang terdaftar",
  "Siswa aktif pada tahun pelajaran berjalan",
  "Sekolah memiliki kantin atau area makan yang layak",
  "Koordinasi dengan dinas pendidikan setempat",
];

export default function ProgramPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
                  <Target className="h-3.5 w-3.5 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700 uppercase tracking-[1px]">Program Nasional</span>
                </div>
                <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] font-normal tracking-[-1.5px] text-ink leading-[1.05]">
                  Makan Bergizi <span className="text-gradient">Gratis</span>
                </h1>
                <p className="mt-6 text-lg text-body leading-relaxed max-w-lg">
                  Program unggulan pemerintah Indonesia untuk menyediakan makanan bergizi
                  bagi 80 juta anak sekolah di seluruh nusantara.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    80 Juta+ Target Penerima
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    34 Provinsi
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    500+ Dapur
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-lg shadow-blue-500/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <Leaf className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Visi Program</p>
                      <p className="text-xs text-slate-500">Indonesia Emas 2045</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Membangun generasi yang sehat, cerdas, dan produktif melalui
                    pemenuhan gizi yang merata bagi seluruh anak Indonesia.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: "80M+", label: "Target" },
                      { val: "500+", label: "Dapur" },
                      { val: "12K+", label: "Sekolah" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-blue-50 p-3 text-center">
                        <p className="text-lg font-display font-semibold text-blue-700">{s.val}</p>
                        <p className="text-[11px] text-blue-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 5 Phase Timeline */}
        <section className="py-24 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-[1.5px] mb-3">Alur Program</p>
              <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
                5 Tahap Dapur ke Meja Makan
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-10 p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 ${
                    i % 2 === 0 ? "bg-white border-slate-200" : "bg-blue-50/50 border-blue-100"
                  }`}
                >
                  <div className="flex items-center gap-4 lg:w-80 shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <phase.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-400 uppercase tracking-[1px]">Fase {phase.step}</span>
                      <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{phase.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.details.map((d) => (
                        <span key={d} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs text-slate-600">
                          <CheckCircle2 className="h-3 w-3 text-blue-500" />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-24 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection direction="left">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-[1.5px] mb-3">Penerima Manfaat</p>
                <h2 className="font-display text-[36px] sm:text-[44px] font-normal tracking-[-1px] text-ink leading-tight">
                  Siapa yang Mendapat Manfaat?
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Program MBG ditujukan untuk seluruh anak Indonesia tanpa terkecuali.
                  Setiap anak berhak mendapatkan makanan bergizi untuk tumbuh kembang optimal.
                </p>
                <div className="mt-8 space-y-3">
                  <p className="text-sm font-semibold text-slate-900">Persyaratan Sekolah:</p>
                  {requirements.map((req) => (
                    <div key={req} className="flex items-start gap-3">
                      <FileCheck className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{req}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                {eligibility.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="rounded-xl bg-white border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 mb-4">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-display text-[32px] sm:text-[40px] font-normal tracking-[-0.5px] text-white">
                Ingin Sekolah Anda Terdaftar?
              </h2>
              <p className="mt-3 text-blue-100 max-w-lg mx-auto">
                Hubungi dinas pendidikan setempat atau daftarkan sekolah Anda melalui portal resmi MBG.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-medium text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                  Daftar Sekolah <ArrowRight className="h-4 w-4" />
                </span>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors cursor-pointer">
                  <Clock className="h-4 w-4" /> Hubungi Kami
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
