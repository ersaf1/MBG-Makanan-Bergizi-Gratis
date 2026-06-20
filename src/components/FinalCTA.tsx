"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { MBGTruck } from "./MBGTruck";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-[96px] relative overflow-hidden bg-surface-dark">
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 opacity-10">
        {[...Array(7)].map((_, i) => (
          <MBGTruck key={i} size={40} color="#faf9f5" accentColor="#faf9f5" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[680px] px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-surface-dark-elevated px-4 py-1.5 text-xs font-medium text-on-dark-soft uppercase tracking-[1.5px] border border-surface-dark-elevated mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-teal" />
            Bergabung Sekarang
          </motion.div>

          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-on-dark leading-[1.1]">
            Bersama Membangun
            <br />
            Generasi Indonesia
            <br />
            Lebih Sehat
          </h2>

          <p className="mt-6 text-base text-on-dark-soft max-w-lg mx-auto leading-[1.55]">
            Setiap langkah kecil berarti. Mari bersama memastikan setiap anak Indonesia mendapatkan makanan bergizi.
          </p>

          <motion.a
            href="#program"
            className="inline-flex items-center gap-2 mt-10 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-on-primary hover:bg-primary-active transition-colors duration-150"
            whileHover={{ y: -2 }}
          >
            Jelajahi Program
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
