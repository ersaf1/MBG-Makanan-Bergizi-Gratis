"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang MBG", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Distribusi", href: "#proses" },
  { label: "Galeri", href: "#galeri" },
  { label: "Berita", href: "#berita" },
];

export function NavbarPremium() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
          scrolled
            ? "glass shadow-premium-lg border border-white/20 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="mx-auto max-w-[1280px] px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden">
              <Image src="/images/mbg-logo.png" alt="MBG" fill className="object-contain" />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-ink">
              MBG
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 rounded-full hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft border border-hairline">
              <Search className="h-3.5 w-3.5 text-muted-soft" />
              <span className="text-xs text-muted-soft">Cari...</span>
            </div>
            <a
              href="#daftar"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-white text-[13px] font-medium hover:bg-ink/90 transition-all duration-200 btn-magnetic"
            >
              Daftar <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-black/[0.03] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-ink" />
            ) : (
              <Menu className="h-5 w-5 text-ink" />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-body hover:text-ink hover:bg-surface-soft rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <a
                  href="#daftar"
                  className="flex items-center justify-center gap-1.5 w-full px-5 py-3 rounded-full bg-ink text-white text-sm font-medium"
                >
                  Daftar <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
