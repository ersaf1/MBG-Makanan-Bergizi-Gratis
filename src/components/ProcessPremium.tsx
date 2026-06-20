"use client";

import { motion } from "framer-motion";
import { Package, Flame, Truck, ClipboardCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Package,
    title: "Persiapan Bahan",
    desc: "Bahan segar dipilih langsung dari petani lokal dan UMKM tersertifikasi dengan uji kualitas setiap batch.",
  },
  {
    num: "02",
    icon: Flame,
    title: "Proses Memasak",
    desc: "Dimasak di dapur bersertifikat HACCP oleh juru masak terlatih dengan standar kebersihan tertinggi.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Distribusi",
    desc: "500+ truk berpendingin mengantar paket makanan ke ribuan sekolah setiap pagi dengan GPS tracking.",
  },
  {
    num: "04",
    icon: ClipboardCheck,
    title: "Evaluasi",
    desc: "Monitoring kepuasan siswa dan pemantauan dampak gizi oleh tim ahli secara berkelanjutan.",
  },
];

export function ProcessPremium() {
  return (
    <section id="proses" className="section-premium bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-[2px] mb-3">
              Alur Program
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-1.5px] text-ink leading-[1.1]">
              Dari Dapur Hingga Meja Makan
            </h2>
            <p className="mt-6 text-base text-body leading-relaxed max-w-md">
              Setiap langkah dalam rantai distribusi MBG diawasi dengan ketat
              untuk menjamin kualitas, keamanan, dan kesegaran makanan.
            </p>
            <a
              href="#program"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-ink/90 transition-all btn-magnetic"
            >
              Lihat Detail <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex gap-6 p-6 rounded-2xl bg-surface-soft border border-hairline hover:border-blue-200 hover:shadow-premium-lg transition-all duration-500"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-hairline group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600/40 uppercase tracking-[2px]">
                    Fase {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-ink mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[2.35rem] top-[4.5rem] bottom-[-1.5rem] w-px bg-hairline hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

