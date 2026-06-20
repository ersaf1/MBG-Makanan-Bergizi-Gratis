"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const menus = [
  {
    name: "Healthy Package 01",
    emoji: "🍚",
    items: ["Nasi Putih", "Ayam Bakar", "Sayur Bayam", "Jeruk Segar", "Susu UHT"],
    nutrition: [
      { label: "Protein", value: 85 },
      { label: "Karbohidrat", value: 90 },
      { label: "Vitamin", value: 75 },
      { label: "Mineral", value: 80 },
    ],
  },
  {
    name: "Healthy Package 02",
    emoji: "🍜",
    items: ["Nasi Merah", "Ikan Panggang", "Tumis Kangkung", "Pisang", "Air Putih"],
    nutrition: [
      { label: "Protein", value: 90 },
      { label: "Karbohidrat", value: 85 },
      { label: "Vitamin", value: 88 },
      { label: "Mineral", value: 82 },
    ],
  },
  {
    name: "Healthy Package 03",
    emoji: "🥙",
    items: ["Nasi Kuning", "Telur Rebus", "Sayur Sop", "Buah Potong", "Susu Coklat"],
    nutrition: [
      { label: "Protein", value: 78 },
      { label: "Karbohidrat", value: 92 },
      { label: "Vitamin", value: 85 },
      { label: "Mineral", value: 76 },
    ],
  },
];

export function FoodMenu() {
  return (
    <section className="py-24 lg:py-[96px] bg-surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Menu Makanan
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Paket Makanan Bergizi Seimbang
          </h2>
          <p className="mt-4 text-base text-muted leading-[1.55]">
            Setiap paket dirancang oleh ahli gizi untuk memenuhi kebutuhan nutrisi anak Indonesia.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {menus.map((menu) => (
            <StaggerItem key={menu.name}>
              <motion.div
                className="group relative rounded-xl bg-canvas border border-hairline p-6 lg:p-8 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{menu.emoji}</div>
                  <h3 className="font-display text-xl tracking-[-0.3px] text-ink">
                    {menu.name}
                  </h3>
                </div>

                <div className="space-y-2.5 mb-8">
                  {menu.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-body">
                      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-surface-card">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-hairline-soft">
                  <p className="text-[11px] font-medium text-muted-soft uppercase tracking-[1.5px]">
                    Kandungan Nutrisi
                  </p>
                  {menu.nutrition.map((n) => (
                    <div key={n.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-body font-medium">{n.label}</span>
                        <span className="text-muted-soft text-xs">{n.value}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-surface-cream-strong overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${n.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
