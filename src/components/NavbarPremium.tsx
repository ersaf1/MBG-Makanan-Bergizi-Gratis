"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang MBG", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Distribusi", href: "#proses" },
  { label: "Galeri", href: "#galeri" },
  { label: "Berita", href: "#berita" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

const menuContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function NavbarPremium() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks
        .filter((l) => l.href.startsWith("#"))
        .map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Floating Glass Pill Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2.5rem)] max-w-[1280px]"
      >
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "glass-pill shadow-premium-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-[10px] overflow-hidden ring-1 ring-black/5">
              <Image
                src="/images/mbg-logo.png"
                alt="MBG"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight text-ink">
              MBG
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[12.5px] font-medium tracking-wide transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#daftar"
              className="hidden lg:inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full bg-ink text-white text-[12.5px] font-medium hover:bg-ink/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] group"
            >
              <span>Daftar</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/15 group-hover:translate-x-0.5 transition-all duration-500">
                <ArrowRight className="h-3.5 w-3.5" weight="bold" />
              </span>
            </a>

            {/* Morphing Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full bg-ink rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-ink rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Fullscreen Overlay Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-surface-dark/90 backdrop-blur-3xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex flex-col items-center justify-center min-h-dvh px-8"
            >
              <div className="space-y-2 text-center">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={menuItemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[2rem] font-display font-normal text-on-dark tracking-[-0.02em] hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={menuItemVariants}
                className="mt-12"
              >
                <a
                  href="#daftar"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary text-on-primary text-sm font-medium"
                >
                  <span>Daftar Sekarang</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowRight className="h-4 w-4" weight="bold" />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
