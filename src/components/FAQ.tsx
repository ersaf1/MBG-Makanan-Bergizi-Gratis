"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const faqs = [
  { question: "Apa itu MBG?", answer: "Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia yang menyediakan makanan bergizi gratis bagi anak-anak sekolah di seluruh Indonesia." },
  { question: "Siapa penerima MBG?", answer: "Program MBG ditujukan untuk seluruh anak sekolah dari jenjang PAUD hingga SMA/SMK di seluruh Indonesia, dengan prioritas pada daerah yang membutuhkan." },
  { question: "Bagaimana makanan disiapkan?", answer: "Makanan disiapkan di dapur-dapur bersertifikat yang tersebar di seluruh Indonesia. Setiap dapur memenuhi standar HACCP dan menggunakan bahan segar dari petani serta UMKM lokal." },
  { question: "Apa tujuan MBG?", answer: "Tujuan utama MBG adalah mengurangi prevalensi stunting, meningkatkan kualitas gizi anak, mendukung prestasi akademik, dan membangun generasi emas Indonesia 2045." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="border-b border-hairline last:border-b-0" layout>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left">
        <span className="text-base font-semibold text-ink pr-4">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="h-4 w-4 text-muted" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-body leading-[1.55]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-[96px] bg-surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-[680px] px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">FAQ</p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Pertanyaan yang Sering Diajukan
          </h2>
        </AnimatedSection>

        <StaggerContainer className="space-y-0" staggerDelay={0.08}>
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
