"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    image: "/images/momen-2.png",
    title: "Makan Siang Sekolah",
    desc: "Paket makan siang bergizi seimbang untuk siswa PAUD hingga SMA di seluruh Indonesia.",
    tag: "Inti Program",
  },
  {
    image: "/images/kitchen-interior.png",
    title: "Dapur Sehat MBG",
    desc: "500+ dapur bersertifikat HACCP memproduksi makanan dengan standar keamanan pangan tertinggi.",
    tag: "Produksi",
  },
  {
    image: "/images/momen-3.png",
    title: "Distribusi Nasional",
    desc: "Armada truk berpendingin menjangkau 34 provinsi dengan sistem GPS tracking real-time.",
    tag: "Logistik",
  },
  {
    image: "/images/momen-1.png",
    title: "Kontrol Nutrisi",
    desc: "Pemantauan kandungan gizi setiap paket oleh tim ahli gizi bersertifikat.",
    tag: "Kualitas",
  },
];

export function ProgramPremium() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="program" className="section-premium bg-surface-soft">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-[2px] mb-3">
              Program
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-1.5px] text-ink">
              Program MBG
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-hairline hover:border-blue-200 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white hover:bg-ink/90 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group min-w-[340px] sm:min-w-[380px] snap-start"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white border border-hairline hover:border-blue-200 hover:shadow-premium-xl transition-all duration-500">
                {/* Image area */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slate-800 uppercase tracking-[1px]">
                    {prog.tag}
                  </span>
                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{prog.title}</h3>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted leading-relaxed">{prog.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all"
                  >
                    Pelajari Lebih Lanjut <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

