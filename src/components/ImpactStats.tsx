"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MBGTruck } from "./MBGTruck";

const stats = [
  { value: 80, suffix: "M+", label: "Target Penerima", description: "Anak Indonesia yang akan mendapat manfaat" },
  { value: 500, suffix: "+", label: "Dapur Aktif", description: "Dapur bersertifikat di seluruh Indonesia" },
  { value: 1000, suffix: "+", label: "Sekolah", description: "Sekolah yang terdaftar dalam program" },
  { value: 1, suffix: "M+", label: "Paket Harian", description: "Paket makanan didistribusikan setiap hari" },
];

export function ImpactStats() {
  return (
    <section id="dampak" className="py-24 lg:py-[96px] bg-surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Dampak
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Angka yang Berbicara
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="relative group rounded-xl bg-canvas border border-hairline p-8 text-center hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="font-display text-[48px] sm:text-[56px] font-normal tracking-[-1px] text-ink">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="mt-2 text-base font-semibold text-ink">
                  {stat.label}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-[1.55]">
                  {stat.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex justify-center gap-3"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <MBGTruck size={48} color="#3b82f6" accentColor="#06b6d4" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
