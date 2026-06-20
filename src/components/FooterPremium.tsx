"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const links = {
  Program: ["Tentang MBG", "Alur Program", "Menu Makanan", "Dampak"],
  Informasi: ["Edukasi Gizi", "FAQ", "Berita", "Kontak"],
  Legal: ["Kebijakan Privasi", "Syarat & Ketentuan"],
};

const socials = [
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterPremium() {
  return (
    <footer className="bg-surface-dark relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden">
                <Image src="/images/mbg-logo.png" alt="MBG" fill className="object-contain" />
              </div>
              <span className="text-[15px] font-bold tracking-tight text-on-dark">
                MBG
              </span>
            </div>
            <p className="text-sm text-on-dark-soft leading-relaxed max-w-sm">
              Makan Bergizi Gratis — Program nasional untuk memastikan setiap
              anak Indonesia mendapatkan makanan bergizi demi masa depan yang
              lebih cerah.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-on-dark uppercase tracking-[1.5px] mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-on-dark-soft hover:text-on-dark transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} MBG — Makan Bergizi Gratis. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-xs text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                {social.name} <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
