"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  { name: "Rina Putri", role: "Siswa SD Negeri 05", avatar: "👧", quote: "Saya jadi semangat ke sekolah karena ada makanan enak dan bergizi. Terima kasih MBG!" },
  { name: "Pak Budi Santoso", role: "Guru SD Negeri 12", avatar: "👨‍🏫", quote: "Anak-anak lebih fokus belajar setelah makan siang. Prestasi akademik meningkat signifikan." },
  { name: "Ibu Sari Dewi", role: "Koki Dapur MBG", avatar: "👩‍🍳", quote: "Kami memasak dengan sepenuh hati, menggunakan bahan segar dari petani lokal." },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-[96px] bg-canvas relative overflow-hidden border-t border-hairline-soft">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Testimoni
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Suara Mereka yang Merasakan
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="relative rounded-xl bg-surface-card border border-hairline p-6 lg:p-8 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Quote className="h-6 w-6 text-primary/30 mb-4" />
                <p className="text-base leading-[1.55] text-body mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-hairline-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-cream-strong text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
