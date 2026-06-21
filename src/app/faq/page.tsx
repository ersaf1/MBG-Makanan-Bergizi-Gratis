"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  ChevronDown, Search, HelpCircle, MessageCircle,
  Phone, Mail, BookOpen, Shield, Utensils, School,
  Users, FileText, Clock,
} from "lucide-react";

const faqCategories = [
  { id: "umum", label: "Umum", icon: HelpCircle, count: 5 },
  { id: "penerima", label: "Penerima", icon: Users, count: 4 },
  { id: "makanan", label: "Makanan", icon: Utensils, count: 4 },
  { id: "sekolah", label: "Sekolah", icon: School, count: 3 },
  { id: "teknis", label: "Teknis", icon: Shield, count: 3 },
];

const faqData: Record<string, { q: string; a: string }[]> = {
  umum: [
    { q: "Apa itu program MBG?", a: "Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia yang menyediakan makanan bergizi gratis bagi anak-anak sekolah di seluruh Indonesia. Program ini merupakan bagian dari upaya membangun generasi emas Indonesia 2045." },
    { q: "Siapa yang mengelola program MBG?", a: "Program MBG dikelola oleh Badan Gizi Nasional (BGN) bekerjasama dengan Kementerian Pendidikan, Kementerian Kesehatan, dan pemerintah daerah di seluruh Indonesia." },
    { q: "Kapan program MBG dimulai?", a: "Program MBG diluncurkan secara nasional pada tahun 2025 dan terus diperluas cakupannya hingga mencapai target 80 juta penerima manfaat." },
    { q: "Berapa anggaran program MBG?", a: "Anggaran program MBG berasal dari APBN dan dialokasikan secara bertahap sesuai dengan perluasan cakupan. Tahun 2026, anggaran MBG mencapai Rp 70 triliun." },
    { q: "Apakah program MBG berkelanjutan?", a: "Ya, MBG dirancang sebagai program jangka panjang dengan dukungan regulasi dan anggaran yang memadai. Pemerintah berkomitmen untuk menjadikan MBG sebagai program permanen." },
  ],
  penerima: [
    { q: "Siapa saja yang berhak mendapat MBG?", a: "Seluruh siswa dari jenjang PAUD hingga SMA/SMK di sekolah negeri dan swasta yang terdaftar dalam program berhak mendapatkan makanan bergizi gratis." },
    { q: "Apakah ada syarat khusus untuk mendapat MBG?", a: "Tidak ada syarat khusus. Semua siswa yang terdaftar di sekolah yang sudah masuk dalam program MBG akan mendapatkan makanan tanpa memandang latar belakang ekonomi." },
    { q: "Bagaimana jika anak saya alergi makanan tertentu?", a: "Setiap sekolah memiliki prosedur untuk menangani alergi makanan. Orang tua diminta melaporkan alergi anak ke pihak sekolah agar bisa disiapkan alternatif menu yang sesuai." },
    { q: "Apakah siswa bisa membawa pulang makanan?", a: "Makanan MBG dikonsumsi di sekolah pada jam makan yang telah ditentukan. Hal ini untuk memastikan makanan dikonsumsi dalam kondisi segar dan hangat." },
  ],
  makanan: [
    { q: "Bagaimana makanan MBG disiapkan?", a: "Makanan disiapkan di dapur-dapur bersertifikat HACCP yang tersebar di seluruh Indonesia. Setiap dapur memiliki standar kebersihan dan keamanan pangan yang ketat." },
    { q: "Apa saja menu yang disajikan?", a: "Menu MBG dirancang oleh ahli gizi dengan prinsip 4 sehat 5 sempurna. Menu rotasi 4 minggu mencakup nasi, lauk pauk, sayuran, buah, dan susu." },
    { q: "Dari mana bahan baku makanan didapat?", a: "Bahan baku berasal dari petani lokal dan UMKM di sekitar dapur MBG. Ini mendukung ekonomi lokal sekaligus memastikan kesegaran bahan." },
    { q: "Apakah kandungan nutrisinya terukur?", a: "Ya, setiap paket makanan melewati analisis nutrisi oleh ahli gizi. Kandungan kalori, protein, vitamin, dan mineral dipantau sesuai standar AKG." },
  ],
  sekolah: [
    { q: "Bagaimana cara mendaftarkan sekolah?", a: "Sekolah dapat mendaftar melalui dinas pendidikan setempat atau portal resmi MBG. Proses verifikasi membutuhkan waktu 2-4 minggu." },
    { q: "Apa yang dibutuhkan sekolah untuk program MBG?", a: "Sekolah perlu menyediakan area makan yang layak, koordinator MBG dari pihak sekolah, dan berkoordinasi dengan dinas pendidikan setempat." },
    { q: "Apakah sekolah swasta bisa ikut MBG?", a: "Ya, sekolah swasta yang terdaftar dalam program MBG juga berhak mendapatkan makanan bergizi gratis untuk siswanya." },
  ],
  teknis: [
    { q: "Bagaimana distribusi makanan ke sekolah?", a: "Makanan didistribusikan menggunakan truk berpendingin dengan GPS tracking. Rute dioptimalkan untuk memastikan makanan tiba tepat waktu dalam kondisi segar." },
    { q: "Berapa lama makanan bisa disimpan?", a: "Makanan harus dikonsumsi dalam waktu 4 jam setelah dimasak. Tidak ada makanan yang disimpan semalam untuk menjamin kesegaran dan keamanan." },
    { q: "Bagaimana jika ada keluhan tentang makanan?", a: "Setiap keluhan dapat dilaporkan melalui hotline MBG, aplikasi pelaporan, atau langsung ke koordinator MBG di sekolah. Tim akan merespons dalam 24 jam." },
  ],
};

const supportChannels = [
  { icon: Phone, title: "Hotline MBG", desc: "0800-1234-5678 (Gratis)", action: "Telepon Sekarang" },
  { icon: MessageCircle, title: "WhatsApp", desc: "+62 812-3456-7890", action: "Chat Kami" },
  { icon: Mail, title: "Email", desc: "info@mbg.go.id", action: "Kirim Email" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border border-hairline rounded-xl overflow-hidden" layout>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-surface-soft transition-colors"
      >
        <span className="text-sm font-semibold text-ink pr-4">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="h-4 w-4 text-muted-soft" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-body leading-relaxed border-t border-primary/10 pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("umum");
  const [searchQuery, setSearchQuery] = useState("");

  const currentFaqs = faqData[activeCategory] || [];
  const filteredFaqs = searchQuery
    ? Object.values(faqData).flat().filter(
        (f) => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFaqs;

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-surface-soft to-canvas overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 bg-accent-amber/10 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-amber/10 border border-accent-amber/20 mb-6">
                <HelpCircle className="h-3.5 w-3.5 text-accent-amber" />
                <span className="text-xs font-medium text-accent-amber uppercase tracking-[1px]">Bantuan</span>
              </div>
              <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] font-normal tracking-[-1.5px] text-ink">
                Pertanyaan <span className="text-gradient">Umum</span>
              </h1>
              <p className="mt-4 text-lg text-body max-w-2xl mx-auto leading-relaxed">
                Temukan jawaban untuk pertanyaan seputar program MBG.
                Jika tidak menemukan jawaban, hubungi tim kami.
              </p>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection delay={0.2}>
              <div className="mt-10 max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-soft" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-hairline text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category sidebar */}
              <AnimatedSection direction="left">
                <div className="lg:sticky lg:top-24">
                  <p className="text-xs font-medium text-muted uppercase tracking-[1.5px] mb-4">Kategori</p>
                  <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setSearchQuery(""); }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          activeCategory === cat.id && !searchQuery
                            ? "bg-primary/5 text-primary-active border border-primary/20"
                            : "text-body hover:bg-surface-soft border border-transparent"
                        }`}
                      >
                        <cat.icon className="h-4 w-4 shrink-0" />
                        <span>{cat.label}</span>
                        <span className={`ml-auto text-[11px] px-1.5 py-0.5 rounded-full ${
                          activeCategory === cat.id && !searchQuery ? "bg-primary/10 text-primary" : "bg-surface-card text-muted"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Quick stats */}
                  <div className="hidden lg:block mt-8 p-5 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-ink">Basis Pengetahuan</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-primary-active">Total Pertanyaan</span>
                        <span className="font-semibold text-ink">19</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-primary-active">Terakhir Diperbarui</span>
                        <span className="font-semibold text-ink">Jan 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* FAQ list */}
              <div className="lg:col-span-3">
                <AnimatedSection className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-ink">
                        {searchQuery ? `Hasil pencarian: "${searchQuery}"` : faqCategories.find((c) => c.id === activeCategory)?.label}
                      </h2>
                      <p className="text-xs text-muted mt-0.5">{filteredFaqs.length} pertanyaan</p>
                    </div>
                  </div>
                </AnimatedSection>

                <StaggerContainer className="space-y-3" staggerDelay={0.06}>
                  {filteredFaqs.map((faq) => (
                    <StaggerItem key={faq.q}>
                      <FAQItem question={faq.q} answer={faq.a} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-16">
                    <Search className="h-10 w-10 text-muted-soft mx-auto mb-4" />
                    <p className="text-sm text-muted">Tidak ada pertanyaan yang cocok dengan pencarian Anda.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-3 text-sm text-primary font-medium hover:underline"
                    >
                      Reset pencarian
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-surface-soft">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-10">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">Butuh Bantuan?</p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-normal tracking-[-0.5px] text-ink">
                Hubungi Tim Kami
              </h2>
              <p className="mt-3 text-base text-muted max-w-lg mx-auto">
                Tidak menemukan jawaban? Tim support MBG siap membantu Anda.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-3 gap-5">
              {supportChannels.map((ch, i) => (
                <motion.div
                  key={ch.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-white border border-hairline p-6 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 mx-auto mb-4">
                    <ch.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-ink mb-1">{ch.title}</h3>
                  <p className="text-sm text-muted mb-4">{ch.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-active cursor-pointer">
                    {ch.action} <ChevronDown className="h-3.5 w-3.5 rotate-[-90deg]" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="text-center mb-10">
              <h2 className="font-display text-[28px] font-normal tracking-[-0.5px] text-ink">
                Sumber Terkait
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: FileText, title: "Panduan Orang Tua", desc: "Informasi lengkap untuk orang tua siswa" },
                { icon: Clock, title: "Jadwal Distribusi", desc: "Jadwal pengiriman makanan per wilayah" },
                { icon: BookOpen, title: "Standar Gizi", desc: "Standar nutrisi yang digunakan dalam program" },
              ].map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-hairline hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{r.title}</h3>
                    <p className="text-xs text-muted">{r.desc}</p>
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
