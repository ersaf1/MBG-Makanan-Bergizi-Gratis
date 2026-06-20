"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Truck, ShieldCheck, ArrowRight } from "lucide-react";
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

export function AboutPremium() {
  return (
    <section id="tentang" className="section-premium bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[2px] mb-4">
                Tentang Program
              </p>
              <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-1.5px] text-ink leading-[1.1]">
                Membangun Generasi Sehat Melalui Nutrisi
              </h2>
              <p className="mt-6 text-base text-body leading-relaxed max-w-lg">
                Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia
                yang menyediakan makanan bergizi bagi 80 juta anak sekolah di
                seluruh nusantara. Investasi besar untuk generasi emas 2045.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-ink">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#program"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                Pelajari Program
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: Kitchen Image + Feature Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/kitchen-interior.png"
                alt="Dapur MBG"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-800">
                  Dapur MBG Bersertifikat HACCP
                </span>
              </div>
            </motion.div>

            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-6 rounded-2xl bg-surface-soft border border-hairline hover:border-blue-200 hover:shadow-premium-lg transition-all duration-500 cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <feat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink group-hover:text-blue-700 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {feat.desc}
                    </p>
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

