"use client";

import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";
import { AnimatedSection } from "./AnimatedSection";
import { TrendingUp, Activity, Flame } from "lucide-react";

const distributionData = [
  { month: "Jan", value: 4200 }, { month: "Feb", value: 4800 },
  { month: "Mar", value: 5100 }, { month: "Apr", value: 5400 },
  { month: "Mei", value: 5800 }, { month: "Jun", value: 6200 },
  { month: "Jul", value: 6800 },
];

const nutritionData = [
  { name: "Protein", value: 35, color: "#cc785c" },
  { name: "Karbohidrat", value: 40, color: "#5db8a6" },
  { name: "Lemak", value: 15, color: "#e8a55a" },
  { name: "Vitamin", value: 10, color: "#a9583e" },
];

const caloriesData = [
  { day: "Sen", actual: 450, target: 500 }, { day: "Sel", actual: 480, target: 500 },
  { day: "Rab", actual: 510, target: 500 }, { day: "Kam", actual: 470, target: 500 },
  { day: "Jum", actual: 520, target: 500 }, { day: "Sab", actual: 300, target: 500 },
  { day: "Min", actual: 200, target: 500 },
];

const stats = [
  { icon: Flame, label: "Rata-rata Kalori/Hari", value: "485 kkal", change: "+12%" },
  { icon: Activity, label: "Skor Nutrisi", value: "94.2", change: "+3.1" },
  { icon: TrendingUp, label: "Tingkat Kepuasan", value: "96.8%", change: "+2.4%" },
];

export function NutritionAnalytics() {
  return (
    <section id="nutrisi" className="py-24 lg:py-[96px] bg-canvas relative overflow-hidden border-t border-hairline-soft">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-3">
            Analytics
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] font-normal tracking-[-1px] text-ink">
            Nutrisi Terukur Dengan Data
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-surface-card border border-hairline p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-canvas border border-hairline">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs text-muted uppercase tracking-[1px] font-medium">{stat.label}</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-display text-ink">{stat.value}</span>
                <span className="text-xs font-medium text-accent-teal mb-1">{stat.change}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <AnimatedSection className="lg:col-span-2 rounded-xl bg-surface-card border border-hairline p-6" delay={0.1}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-ink">Distribusi Makanan</h3>
                <p className="text-xs text-muted mt-0.5">Paket per bulan (ribuan)</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-cream-strong text-xs font-medium text-primary">
                <TrendingUp className="h-3 w-3" />+22%
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e6dfd8" />
                  <XAxis dataKey="month" stroke="#8e8b82" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#8e8b82" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "#faf9f5", border: "1px solid #e6dfd8", borderRadius: "8px" }} />
                  <Bar dataKey="value" fill="url(#barGrad)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cc785c" />
                      <stop offset="100%" stopColor="#e8a55a" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection className="rounded-xl bg-surface-card border border-hairline p-6" delay={0.2}>
            <h3 className="text-base font-semibold text-ink mb-1">Komposisi Nutrisi</h3>
            <p className="text-xs text-muted mb-4">Persentase harian</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={nutritionData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                    {nutritionData.map((entry) => (<Cell key={entry.name} fill={entry.color} />))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#faf9f5", border: "1px solid #e6dfd8", borderRadius: "8px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {nutritionData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted">{item.name} {item.value}%</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3 rounded-xl bg-surface-dark p-6" delay={0.3}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-on-dark">Asupan Kalori Harian</h3>
                <p className="text-xs text-on-dark-soft mt-0.5">Target vs Aktual (kkal)</p>
              </div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={caloriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#252320" />
                  <XAxis dataKey="day" stroke="#a09d96" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#a09d96" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "#181715", border: "1px solid #252320", borderRadius: "8px", color: "#faf9f5" }} />
                  <Area type="monotone" dataKey="target" stroke="#252320" fill="#1f1e1b" strokeDasharray="5 5" />
                  <Area type="monotone" dataKey="actual" stroke="#cc785c" fill="url(#areaGrad)" strokeWidth={2} />
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cc785c" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#cc785c" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
