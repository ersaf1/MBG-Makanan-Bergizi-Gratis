"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const articles = [
  { emoji: "🥩", category: "Protein", title: "Pentingnya Protein Untuk Pertumbuhan Anak", excerpt: "Protein adalah blok bangunan tubuh. Pelajari mengapa protein sangat penting untuk tumbuh kembang anak Indonesia.", readTime: "5 menit" },
  { emoji: "🥗", category: "Gizi Seimbang", title: "Panduan Makanan Seimbang Untuk Anak Sekolah", excerpt: "Kenali komposisi makanan yang tepat untuk memenuhi kebutuhan nutrisi harian anak usia sekolah.", readTime: "7 menit" },
  { emoji: "💪", category: "Gaya Hidup", title: "Membangun Kebiasaan Sehat Sejak Dini", excerpt: "Kebiasaan makan yang baik dimulai dari rumah dan sekolah. Temukan tips membentuk pola makan sehat.", readTime: "4 menit" },
];

export function Education() {
  return (
    <section className="py-24 lg:py-[96px] bg-surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Edukasi
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Edukasi Gizi
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <motion.article
                className="group relative rounded-xl bg-canvas border border-hairline overflow-hidden hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="p-6 lg:p-8">
                  <div className="text-4xl mb-4">{article.emoji}</div>
                  <div className="inline-block rounded-full bg-surface-card px-3 py-1 text-[11px] font-medium text-muted uppercase tracking-[1px] border border-hairline mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-3 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.55] mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-soft">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Baca <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
