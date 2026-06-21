"use client";

import { motion } from "framer-motion";
import { Package, Fire, Truck, ClipboardText, ArrowRight } from "@phosphor-icons/react";

const steps = [
  {
    num: "01",
    icon: Package,
    title: "Persiapan Bahan",
    desc: "Bahan segar dipilih langsung dari petani lokal dan UMKM tersertifikasi dengan uji kualitas setiap batch.",
    rotate: "-1deg",
    z: 4,
  },
  {
    num: "02",
    icon: Fire,
    title: "Proses Memasak",
    desc: "Dimasak di dapur bersertifikat HACCP oleh juru masak terlatih dengan standar kebersihan tertinggi.",
    rotate: "0.5deg",
    z: 3,
  },
  {
    num: "03",
    icon: Truck,
    title: "Distribusi",
    desc: "500+ truk berpendingin mengantar paket makanan ke ribuan sekolah setiap pagi dengan GPS tracking.",
    rotate: "-0.5deg",
    z: 2,
  },
  {
    num: "04",
    icon: ClipboardText,
    title: "Evaluasi",
    desc: "Monitoring kepuasan siswa dan pemantauan dampak gizi oleh tim ahli secara berkelanjutan.",
    rotate: "1deg",
    z: 1,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProcessPremium() {
  return (
    <section id="proses" className="section-premium bg-canvas">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* ── Left: Sticky Header ── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:sticky lg:top-32"
          >
            <span className="eyebrow mb-4">Alur Program</span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal tracking-[-0.03em] text-ink leading-[1.08]">
              Dari Dapur Hingga Meja Makan
            </h2>
            <p className="mt-6 text-base text-body leading-[1.7] max-w-md">
              Setiap langkah dalam rantai distribusi MBG diawasi dengan ketat
              untuk menjamin kualitas, keamanan, dan kesegaran makanan.
            </p>
            {/* Button-in-Button CTA */}
            <a
              href="#program"
              className="inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 mt-8 rounded-full bg-ink text-white text-[13px] font-medium hover:bg-ink/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
            >
              <span>Lihat Detail</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/15 group-hover:translate-x-0.5 transition-all duration-500">
                <ArrowRight className="h-3.5 w-3.5" weight="bold" />
              </span>
            </a>
          </motion.div>

          {/* ── Right: Z-Axis Cascade Cards ── */}
          <div className="space-y-4 lg:space-y-0 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={0.1 + i * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={`relative group ${
                  i === 1 ? "lg:-mt-2" : i > 1 ? "lg:-mt-4" : ""
                }`}
                style={{ zIndex: steps.length - i }}
              >
                {/* Outer Shell */}
                <div
                  className="bezel transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01] lg:group-hover:translate-x-2"
                  style={{
                    transform: `rotate(${step.rotate})`,
                  }}
                >
                  {/* Inner Core */}
                  <div className="bezel-inner bg-white p-6 lg:p-8 shadow-premium shadow-inner-highlight">
                    <div className="flex gap-6">
                      {/* Icon + Number */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.06] ring-1 ring-primary/[0.08] group-hover:bg-primary/[0.1] transition-colors duration-500">
                          <step.icon
                            className="h-6 w-6 text-primary"
                            weight="light"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-primary/30 tracking-widest">
                          {step.num}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          {step.desc}
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
