"use client";

import { motion } from "framer-motion";
import { Wheat, ChefHat, ShieldCheck, Truck, Smile } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MBGTruck } from "./MBGTruck";

const steps = [
  { icon: Wheat, title: "Pemilihan Bahan", description: "Bahan segar dari petani dan UMKM lokal pilihan." },
  { icon: ChefHat, title: "Proses Memasak", description: "Dimasak oleh dapur bersertifikat dengan standar HACCP." },
  { icon: ShieldCheck, title: "Quality Control", description: "Pemeriksaan ketat nutrisi dan keamanan pangan." },
  { icon: Truck, title: "Distribusi Sekolah", description: "Pengiriman tepat waktu ke ribuan sekolah setiap hari." },
  { icon: Smile, title: "Diterima Siswa", description: "Anak-anak menikmati makanan bergizi di sekolah." },
];

export function ProgramFlow() {
  return (
    <section className="py-24 lg:py-[96px] bg-canvas relative overflow-hidden border-t border-hairline-soft">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Proses
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Dari Dapur Hingga Generasi Masa Depan
          </h2>
        </AnimatedSection>

        <StaggerContainer className="relative" staggerDelay={0.12}>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline hidden lg:block" />

          <div className="grid gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className={`relative flex items-center gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block rounded-xl bg-surface-card border border-hairline p-6 max-w-md ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      <p className="text-xs font-medium text-primary uppercase tracking-[1px] mb-1">
                        Langkah {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-ink mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-[1.55]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="hidden lg:flex relative z-10 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-canvas border border-hairline shadow-subtle"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-5 w-5 text-primary" />
                  </motion.div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-surface-dark rounded-xl p-6 flex items-center gap-6 max-w-lg">
            <MBGTruck size={72} color="#faf9f5" accentColor="#e8a55a" />
            <div>
              <p className="font-display text-on-dark text-lg tracking-[-0.3px]">Pengiriman Setiap Hari</p>
              <p className="text-sm text-on-dark-soft mt-1">500+ truk MBG berangkat dari dapur ke sekolah di seluruh Indonesia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
