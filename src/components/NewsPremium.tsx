"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "@phosphor-icons/react";

const articles = [
  {
    category: "Program",
    title: "MBG Menjangkau 2 Juta Siswa di Sulawesi",
    desc: "Perluasan program MBG ke 15 kabupaten baru di Sulawesi Selatan dan Tengah.",
    date: "18 Jan 2026",
    readTime: "4 menit",
    bg: "from-primary/8 to-accent-amber/5",
  },
  {
    category: "Nutrisi",
    title: "Menu Baru MBG: Variasi Protein Nabati",
    desc: "Pengenalan menu berbasis tempe dan tahu untuk diversifikasi asupan protein siswa.",
    date: "15 Jan 2026",
    readTime: "5 menit",
    bg: "from-primary/5 to-accent-amber/5",
  },
  {
    category: "Dampak",
    title: "Stunting Turun 25% di Wilayah Prioritas MBG",
    desc: "Data terbaru menunjukkan penurunan signifikan prevalensi stunting berkat program MBG.",
    date: "12 Jan 2026",
    readTime: "6 menit",
    bg: "from-accent-amber/8 to-primary/5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function NewsPremium() {
  return (
    <section id="berita" className="section-premium bg-canvas">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="eyebrow mb-4">Berita</span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal tracking-[-0.03em] text-ink">
              Kabar Terbaru
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-[13px] font-semibold text-primary hover:text-primary-active transition-colors duration-300 group"
          >
            <span>Semua Berita</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/[0.08] group-hover:bg-primary/[0.14] group-hover:translate-x-0.5 transition-all duration-500">
              <ArrowRight className="h-3.5 w-3.5" weight="bold" />
            </span>
          </a>
        </motion.div>

        {/* Editorial Split: Featured + Staggered */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article — Double-Bezel */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="group cursor-pointer"
          >
            <div className="bezel h-full">
              <div className="bezel-inner bg-white h-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className={`relative h-64 lg:h-80 bg-gradient-to-br ${articles[0].bg} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="p-7 lg:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/[0.08] text-[10px] font-semibold text-primary uppercase tracking-[0.15em]">
                      {articles[0].category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-soft">
                      <Clock className="h-3 w-3" weight="light" />
                      {articles[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-ink group-hover:text-primary-active transition-colors duration-300 leading-snug tracking-[-0.01em]">
                    {articles[0].title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    {articles[0].desc}
                  </p>
                  <p className="mt-4 text-xs text-muted-soft">{articles[0].date}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stacked smaller articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={article.title}
                custom={0.2 + i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="bezel">
                  <div className="bezel-inner bg-white p-6 flex gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {/* Mini gradient thumbnail */}
                    <div className={`hidden sm:block w-28 h-28 shrink-0 rounded-[calc(1.75rem-10px)] bg-gradient-to-br ${article.bg}`} />
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/[0.08] text-[10px] font-semibold text-primary uppercase tracking-[0.15em]">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-soft">
                          <Clock className="h-3 w-3" weight="light" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-ink group-hover:text-primary-active transition-colors duration-300 leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                        {article.desc}
                      </p>
                      <p className="mt-3 text-xs text-muted-soft">{article.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
