"use client";

import { Truck } from "lucide-react";

const footerLinks = {
  Program: [
    { label: "Tentang MBG", href: "#tentang" },
    { label: "Alur Program", href: "#proses" },
    { label: "Menu Makanan", href: "/nutrisi" },
    { label: "Dampak", href: "/dampak" },
  ],
  Informasi: [
    { label: "Edukasi Gizi", href: "/nutrisi" },
    { label: "FAQ", href: "/faq" },
    { label: "Berita", href: "#berita" },
    { label: "Kontak", href: "/faq" },
  ],
  Legal: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-[64px]">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Truck className="h-4 w-4 text-on-primary" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-on-dark">
                MBG
              </span>
            </div>
            <p className="text-sm text-on-dark-soft leading-[1.55] max-w-sm">
              Makan Bergizi Gratis — Program nasional untuk memastikan setiap
              anak Indonesia mendapatkan makanan bergizi demi masa depan yang
              lebih cerah.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium text-on-dark uppercase tracking-[1.5px] mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-on-dark-soft hover:text-on-dark transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-surface-dark-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-soft">
            &copy; {new Date().getFullYear()} MBG — Makan Bergizi Gratis. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "Instagram", "YouTube"].map((social) => (
              <span key={social} className="text-xs text-on-dark-soft/50 cursor-not-allowed" title="Segera hadir">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
