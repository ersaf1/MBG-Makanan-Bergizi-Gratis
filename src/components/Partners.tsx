"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { MBGTruck } from "./MBGTruck";

const partners = [
  { name: "Sekolah Nasional", icon: "🏫" },
  { name: "Dapur MBG", icon: "🍳" },
  { name: "UMKM Lokal", icon: "🏪" },
  { name: "Petani Indonesia", icon: "🌾" },
  { name: "Dinas Kesehatan", icon: "🏥" },
  { name: "Posyandu", icon: "🩺" },
];

export function Partners() {
  return (
    <section className="py-20 bg-canvas relative overflow-hidden border-t border-hairline-soft">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-medium text-muted uppercase tracking-[1.5px] mb-3">
            Kolaborasi
          </p>
          <h2 className="font-display text-[36px] font-normal tracking-[-0.5px] text-ink">
            Kolaborasi Untuk Indonesia Sehat
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="flex gap-6 animate-scroll">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-lg bg-surface-card border border-hairline hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">
                  {partner.icon}
                </span>
                <span className="text-sm font-medium text-muted group-hover:text-ink whitespace-nowrap transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* Truck banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-xl bg-surface-dark p-6 flex items-center justify-between overflow-hidden relative"
        >
          <div className="flex items-center gap-4 z-10">
            <MBGTruck size={56} color="#f8fafc" accentColor="#06b6d4" />
            <div>
              <p className="text-on-dark font-display text-lg tracking-[-0.3px]">Distribusi Nasional</p>
              <p className="text-on-dark-soft text-sm mt-0.5">Truk MBG menjangkau seluruh pelosok Indonesia setiap hari</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-on-dark-soft text-xs font-medium uppercase tracking-[1px] z-10">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-teal" />
            500+ Truk Aktif
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-surface-dark-elevated/30 to-transparent" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
