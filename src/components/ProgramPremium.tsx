"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

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
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="eyebrow mb-4">Program</span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal tracking-[-0.03em] text-ink">
              Program MBG
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-hairline hover:border-primary/20 hover:shadow-premium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.95]"
            >
              <CaretLeft className="h-4 w-4 text-ink" weight="light" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white hover:bg-ink/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.95]"
            >
              <CaretRight className="h-4 w-4" weight="light" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll — Double-Bezel Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory"
        >
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group min-w-[340px] sm:min-w-[400px] snap-start"
            >
              {/* Outer Shell */}
              <div className="bezel">
                {/* Inner Core */}
                <div className="bezel-inner bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Image area */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-surface-dark uppercase tracking-[0.15em]">
                      {prog.tag}
                    </span>
                    {/* Title on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">
                        {prog.title}
                      </h3>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-muted leading-relaxed">
                      {prog.desc}
                    </p>
                    {/* Nested CTA */}
                    <a
                      href="#program"
                      className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold text-primary group/link"
                    >
                      <span>Pelajari Lebih Lanjut</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/[0.08] group-hover/link:bg-primary/[0.14] group-hover/link:translate-x-0.5 transition-all duration-500">
                        <ArrowRight className="h-3 w-3" weight="bold" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
