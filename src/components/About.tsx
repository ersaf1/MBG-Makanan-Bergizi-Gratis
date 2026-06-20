"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Scale } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { MBGTruckSide } from "./MBGTruck";

const cards = [
  {
    icon: Scale,
    title: "Pemerataan Gizi",
    description:
      "Memastikan setiap anak Indonesia mendapatkan akses makanan bergizi tanpa memandang latar belakang ekonomi.",
  },
  {
    icon: Heart,
    title: "Masa Depan Anak",
    description:
      "Membangun fondasi kesehatan yang kuat untuk generasi penerus bangsa yang lebih sehat dan produktif.",
  },
  {
    icon: GraduationCap,
    title: "Dukungan Pendidikan",
    description:
      "Anak yang kenyang dan bergizi dapat fokus belajar dengan lebih baik di sekolah.",
  },
];

export function About() {
  return (
    <section id="program" className="py-24 lg:py-[96px] bg-surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Truck illustration */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden bg-canvas border border-hairline">
                <div className="aspect-[4/3] flex flex-col items-center justify-center p-8">
                  <MBGTruckSide size={280} className="mb-4" />
                  <p className="font-display text-xl text-ink tracking-[-0.3px]">
                    Makanan Bergizi Gratis
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Diantar Langsung Ke Sekolah
                  </p>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 blur-sm"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div>
            <AnimatedSection direction="right">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-4">
                Tentang Program
              </p>
              <h2 className="font-display text-[40px] sm:text-[48px] font-normal tracking-[-1px] text-ink leading-[1.1]">
                Apa Itu MBG?
              </h2>
              <p className="mt-6 text-base leading-[1.55] text-body">
                Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia
                yang bertujuan menyediakan makanan bergizi gratis bagi seluruh
                anak sekolah. Program ini merupakan investasi besar dalam
                membentuk generasi emas Indonesia 2045.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-10 space-y-3" staggerDelay={0.15}>
              {cards.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="group flex gap-5 rounded-xl bg-canvas border border-hairline p-6 hover:border-primary/20 transition-all duration-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-card">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-[1.55] text-muted">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
