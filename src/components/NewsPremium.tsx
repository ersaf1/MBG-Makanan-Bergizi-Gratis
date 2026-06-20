"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Program",
    title: "MBG Menjangkau 2 Juta Siswa di Sulawesi",
    desc: "Perluasan program MBG ke 15 kabupaten baru di Sulawesi Selatan dan Tengah.",
    date: "18 Jan 2026",
    readTime: "4 menit",
    bg: "from-blue-50 to-sky-50",
  },
  {
    category: "Nutrisi",
    title: "Menu Baru MBG: Variasi Protein Nabati",
    desc: "Pengenalan menu berbasis tempe dan tahu untuk diversifikasi asupan protein siswa.",
    date: "15 Jan 2026",
    readTime: "5 menit",
    bg: "from-blue-50 to-sky-50",
  },
  {
    category: "Dampak",
    title: "Stunting Turun 25% di Wilayah Prioritas MBG",
    desc: "Data terbaru menunjukkan penurunan signifikan prevalensi stunting berkat program MBG.",
    date: "12 Jan 2026",
    readTime: "6 menit",
    bg: "from-amber-50 to-orange-50",
  },
];

export function NewsPremium() {
  return (
    <section id="berita" className="section-premium bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-[2px] mb-3">
              Berita
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-1.5px] text-ink">
              Kabar Terbaru
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            Semua Berita
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className={`relative h-52 rounded-2xl bg-gradient-to-br ${article.bg} overflow-hidden mb-5`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[11px] font-semibold text-blue-700 uppercase tracking-[1px]">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-soft">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-ink group-hover:text-blue-700 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {article.desc}
              </p>
              <p className="mt-3 text-xs text-muted-soft">{article.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

