"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Truck, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { CountUp } from "./CountUp";

const features = [
  {
    icon: Leaf,
    title: "Nutrisi Berkualitas",
    desc: "Setiap paket makanan dirancang oleh ahli gizi dengan standar AKG nasional untuk memenuhi kebutuhan harian anak.",
  },
  {
    icon: Truck,
    title: "Distribusi Cepat",
    desc: "500+ truk berpendingin mengantar makanan segar ke ribuan sekolah setiap pagi sebelum jam istirahat.",
  },
  {
    icon: ShieldCheck,
    title: "Standar Kebersihan",
    desc: "Seluruh dapur MBG bersertifikat HACCP dengan pemeriksaan kualitas ketat di setiap tahap produksi.",
  },
];

const heroStats = [
  { value: 3, suffix: "M+", label: "Penerima Manfaat" },
  { value: 500, suffix: "+", label: "Dapur MBG" },
  { value: 98, suffix: "%", label: "Standar Nutrisi" },
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

export function AboutPremium() {
  return (
    <section id="tentang" className="section-premium bg-canvas">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left: Editorial Content ── */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <span className="eyebrow mb-6">Tentang Program</span>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal tracking-[-0.03em] text-ink leading-[1.08]">
                Membangun Generasi Sehat Melalui Nutrisi
              </h2>
              <p className="mt-6 text-base text-body leading-[1.7] max-w-lg">
                Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia
                yang menyediakan makanan bergizi bagi 80 juta anak sekolah di
                seluruh nusantara. Investasi besar untuk generasi emas 2045.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-display font-medium text-ink tabular-nums">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted mt-1.5 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA — Button-in-Button */}
            <motion.div
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mt-10"
            >
              <a
                href="#program"
                className="inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-ink text-white text-[13px] font-medium hover:bg-ink/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
              >
                <span>Pelajari Program</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/15 group-hover:translate-x-0.5 transition-all duration-500">
                  <ArrowRight className="h-3.5 w-3.5" weight="bold" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Double-Bezel Kitchen Image + Feature Cards ── */}
          <div className="space-y-6">
            {/* Kitchen Image — Double-Bezel */}
            <motion.div
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="bezel">
                <div className="bezel-inner relative aspect-[4/3]">
                  <Image
                    src="/images/kitchen-interior.png"
                    alt="Dapur MBG"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-surface-dark tracking-wide">
                      <ShieldCheck className="h-3.5 w-3.5" weight="bold" />
                      Dapur Bersertifikat HACCP
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards — Double-Bezel */}
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                custom={0.25 + i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <div className="bezel group cursor-default">
                  <div className="bezel-inner bg-white p-6 shadow-inner-highlight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.06] ring-1 ring-primary/[0.08] group-hover:bg-primary/[0.1] transition-colors duration-500">
                        <feat.icon
                          className="h-5 w-5 text-primary"
                          weight="light"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">
                          {feat.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
