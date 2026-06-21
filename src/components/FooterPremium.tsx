"use client";

import Image from "next/image";

const links = {
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

const socials = [
  { name: "Twitter", disabled: true },
  { name: "Instagram", disabled: true },
  { name: "YouTube", disabled: true },
  { name: "LinkedIn", disabled: true },
];

export function FooterPremium() {
  return (
    <footer className="bg-surface-dark relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="relative h-8 w-8 rounded-[10px] overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/mbg-logo.png"
                  alt="MBG"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-on-dark">
                MBG
              </span>
            </div>
            <p className="text-sm text-on-dark-soft leading-[1.7] max-w-xs">
              Makan Bergizi Gratis — Program nasional untuk memastikan setiap
              anak Indonesia mendapatkan makanan bergizi demi masa depan yang
              lebih cerah.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-[10px] font-semibold text-on-dark/50 uppercase tracking-[0.2em] mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-on-dark-soft hover:text-on-dark transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} MBG — Makan Bergizi Gratis. Hak
            Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <span
                key={social.name}
                className="text-[11px] text-white/15 cursor-not-allowed"
                title="Segera hadir"
              >
                {social.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
