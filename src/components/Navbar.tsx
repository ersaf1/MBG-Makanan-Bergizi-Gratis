"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "Program", href: "#program" },
  { label: "Nutrisi", href: "#nutrisi" },
  { label: "Dampak", href: "#dampak" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md shadow-subtle py-3"
          : "bg-canvas py-4"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Truck className="h-4 w-4 text-on-primary" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            MBG
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-200 rounded-md hover:bg-surface-card/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#program"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-on-primary hover:bg-primary-active active:bg-primary-active transition-colors duration-150"
        >
          Jelajahi Program
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-surface-card transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-ink" />
          ) : (
            <Menu className="h-5 w-5 text-ink" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-canvas border-t border-hairline overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-body hover:text-ink hover:bg-surface-card/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#program"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-on-primary"
              >
                Jelajahi Program
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
