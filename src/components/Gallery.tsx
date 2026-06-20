"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const images = [
  { emoji: "🚛", title: "Armada MBG", subtitle: "500+ Truk Distribusi", span: "col-span-2 row-span-2", bg: "bg-surface-dark" },
  { emoji: "🍱", title: "Paket Makanan", subtitle: "Bergizi Seimbang", span: "col-span-1 row-span-1", bg: "bg-surface-card" },
  { emoji: "🏫", title: "Sekolah", subtitle: "Di Seluruh Indonesia", span: "col-span-1 row-span-1", bg: "bg-surface-card" },
  { emoji: "😊", title: "Siswa Bahagia", subtitle: "Generasi Sehat", span: "col-span-1 row-span-1", bg: "bg-primary" },
  { emoji: "👨‍🍳", title: "Dapur Modern", subtitle: "Standar HACCP", span: "col-span-1 row-span-1", bg: "bg-surface-card" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-24 lg:py-[96px] bg-canvas relative overflow-hidden border-t border-hairline-soft">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Galeri
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Momen Bermakna
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[180px] lg:auto-rows-[220px]"
          staggerDelay={0.1}
        >
          {images.map((img, i) => (
            <StaggerItem key={i} className={img.span}>
              <motion.div
                className="group relative h-full rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`absolute inset-0 ${img.bg} flex items-center justify-center`}>
                  <span className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-500">
                    {img.emoji}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-on-dark font-semibold text-sm">{img.title}</p>
                  <p className="text-on-dark-soft text-xs mt-0.5">{img.subtitle}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
