"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/momen-1.png", label: "Dapur MBG", span: "col-span-2 row-span-2" },
  { src: "/images/momen-2.png", label: "Persiapan Makanan", span: "col-span-1 row-span-1" },
  { src: "/images/momen-3.png", label: "Distribusi Sekolah", span: "col-span-1 row-span-1" },
  { src: "/images/momen-4.png", label: "Makan Bersama", span: "col-span-1 row-span-1" },
  { src: "/images/hero-building.png", label: "Gedung MBG", span: "col-span-1 row-span-1" },
  { src: "/images/kitchen-interior.png", label: "Dapur Interior", span: "col-span-2 row-span-1" },
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

export function GalleryPremium() {
  return (
    <section id="galeri" className="section-premium bg-surface-soft">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Galeri</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-normal tracking-[-0.03em] text-ink">
            Momen Bermakna
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              custom={0.05 + i * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className={`group ${img.span}`}
            >
              {/* Double-Bezel Frame */}
              <div className="bezel h-full">
                <div className="bezel-inner relative h-full cursor-pointer overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover img-zoom"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <p className="text-white font-semibold text-sm tracking-[-0.01em]">
                      {img.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
