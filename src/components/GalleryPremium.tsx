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

export function GalleryPremium() {
  return (
    <section id="galeri" className="section-premium bg-surface-soft">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-[2px] mb-3">
            Galeri
          </p>
          <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-1.5px] text-ink">
            Momen Bermakna
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-semibold text-sm">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

