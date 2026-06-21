"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Camera, Play, Calendar, MapPin, Heart,
  ChevronLeft, ChevronRight, Grid3x3, LayoutList,
  Truck, School, ChefHat, Users, Award, Star,
} from "lucide-react";
import {
  IllustrationKitchen, IllustrationSchool, IllustrationTruck,
  IllustrationChildren, IllustrationAward, IllustrationBooks,
  IllustrationPacking, IllustrationFamily, IllustrationVegetables,
  IllustrationStar, IllustrationLove, IllustrationFood,
} from "@/components/Illustrations";

const categories = [
  { id: "all", label: "Semua", icon: Grid3x3 },
  { id: "dapur", label: "Dapur MBG", icon: ChefHat },
  { id: "sekolah", label: "Sekolah", icon: School },
  { id: "distribusi", label: "Distribusi", icon: Truck },
  { id: "event", label: "Event", icon: Award },
  { id: "komunitas", label: "Komunitas", icon: Users },
];

const galleryItems = [
  { id: 1, cat: "dapur", Illustration: IllustrationKitchen, title: "Dapur Sentral Jakarta", desc: "Proses memasak 5000 paket setiap pagi", loc: "Jakarta", date: "15 Jan 2026", featured: true },
  { id: 2, cat: "sekolah", Illustration: IllustrationSchool, title: "SDN 03 Menteng", desc: "Anak-anak menikmati makan siang bersama", loc: "Jakarta", date: "14 Jan 2026", featured: false },
  { id: 3, cat: "distribusi", Illustration: IllustrationTruck, title: "Armada Truk MBG", desc: "500+ truk berangkat setiap pagi", loc: "Bandung", date: "13 Jan 2026", featured: true },
  { id: 4, cat: "komunitas", Illustration: IllustrationChildren, title: "Siswa Bahagia", desc: "Senyum anak-anak SD di Yogyakarta", loc: "Yogyakarta", date: "12 Jan 2026", featured: false },
  { id: 5, cat: "dapur", Illustration: IllustrationFood, title: "Quality Control", desc: "Pemeriksaan nutrisi oleh ahli gizi", loc: "Surabaya", date: "11 Jan 2026", featured: false },
  { id: 6, cat: "event", Illustration: IllustrationAward, title: "Peluncuran MBG Papua", desc: "Peresmian program di Jayapura", loc: "Jayapura", date: "10 Jan 2026", featured: true },
  { id: 7, cat: "sekolah", Illustration: IllustrationBooks, title: "Edukasi Gizi", desc: "Sosialisasi pentingnya makan sehat", loc: "Medan", date: "9 Jan 2026", featured: false },
  { id: 8, cat: "distribusi", Illustration: IllustrationPacking, title: "Packing Makanan", desc: "Pengemasan higienis di dapur modern", loc: "Semarang", date: "8 Jan 2026", featured: false },
  { id: 9, cat: "komunitas", Illustration: IllustrationFamily, title: "Keluarga Terbantu", desc: "Cerita orang tua tentang perubahan anak mereka", loc: "Makassar", date: "7 Jan 2026", featured: false },
  { id: 10, cat: "dapur", Illustration: IllustrationVegetables, title: "Bahan Segar Lokal", desc: "Sayuran dari petani lokal pilihan", loc: "Malang", date: "6 Jan 2026", featured: false },
  { id: 11, cat: "event", Illustration: IllustrationStar, title: "MBG Awards 2026", desc: "Penghargaan untuk dapur terbaik", loc: "Jakarta", date: "5 Jan 2026", featured: true },
  { id: 12, cat: "sekolah", Illustration: IllustrationLove, title: "Makan Bersama", desc: "Kebersamaan saat jam makan siang", loc: "Denpasar", date: "4 Jan 2026", featured: false },
];

const videoHighlights = [
  { title: "Perjalanan MBG: Dari Dapur ke Sekolah", duration: "5:32", views: "124K" },
  { title: "Wajah Bahagia Anak Indonesia", duration: "3:18", views: "89K" },
  { title: "Dapur Modern MBG Jakarta", duration: "7:45", views: "67K" },
];

const monthlyStats = [
  { month: "Jan", photos: 2400 },
  { month: "Feb", photos: 2800 },
  { month: "Mar", photos: 3200 },
  { month: "Apr", photos: 3100 },
  { month: "Mei", photos: 3600 },
  { month: "Jun", photos: 4100 },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.cat === activeCategory);

  const featuredItems = galleryItems.filter((item) => item.featured);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-surface-soft to-canvas overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Camera className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-[1px]">Dokumentasi</span>
              </div>
              <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] font-normal tracking-[-1.5px] text-ink">
                Momen <span className="text-gradient">Bermakna</span>
              </h1>
              <p className="mt-4 text-lg text-body max-w-2xl mx-auto leading-relaxed">
                Koleksi foto dan video perjalanan program MBG di seluruh Indonesia.
                Setiap gambar adalah cerita tentang harapan dan perubahan.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Photos */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-2">Pilihan Editor</p>
                  <h2 className="font-display text-[28px] sm:text-[36px] font-normal tracking-[-0.5px] text-ink">
                    Foto Unggulan
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted">
                  <Star className="h-4 w-4 text-accent-amber fill-accent-amber" />
                  <span>{featuredItems.length} foto</span>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative group rounded-xl overflow-hidden cursor-pointer ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center`}>
                    <item.Illustration size={i === 0 ? 160 : 100} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-white/70" />
                      <span className="text-xs text-white/70">{item.loc}</span>
                    </div>
                  </div>
                  {item.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent-amber text-[10px] font-bold text-white uppercase tracking-[1px]">
                      Unggulan
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter + Gallery */}
        <section className="py-16 bg-surface-soft">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-2">Galeri Lengkap</p>
                  <h2 className="font-display text-[28px] sm:text-[36px] font-normal tracking-[-0.5px] text-ink">
                    Browse by Category
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Camera className="h-4 w-4" />
                  <span>{filteredItems.length} foto</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white border border-hairline text-body hover:border-primary/30"
                  }`}
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery grid */}
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group relative rounded-xl overflow-hidden cursor-pointer bg-white border border-hairline hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
                      <item.Illustration size={80} className="group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted mt-1 line-clamp-1">{item.desc}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="flex items-center gap-1 text-[11px] text-muted-soft">
                          <MapPin className="h-3 w-3" /> {item.loc}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-soft">
                          <Calendar className="h-3 w-3" /> {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm">
                        <Heart className="h-4 w-4 text-red-400" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Video Highlights */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <p className="text-xs font-medium text-primary uppercase tracking-[1.5px] mb-2">Video</p>
              <h2 className="font-display text-[28px] sm:text-[36px] font-normal tracking-[-0.5px] text-ink">
                Highlight Video
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5">
              {videoHighlights.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-xl overflow-hidden bg-surface-dark cursor-pointer"
                >
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-surface-dark to-surface-dark-elevated">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{v.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-white/70">{v.duration}</span>
                      <span className="text-xs text-white/70">{v.views} views</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-active">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
            <AnimatedSection>
              <Camera className="h-10 w-10 text-on-dark-soft mx-auto mb-4" />
              <h2 className="font-display text-[28px] sm:text-[36px] font-normal tracking-[-0.5px] text-white">
                Punya Foto MBG?
              </h2>
              <p className="mt-3 text-primary/10 max-w-lg mx-auto">
                Kirim foto momen MBG di sekolah atau dapur Anda untuk ditampilkan di galeri ini.
              </p>
              <span className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-white text-primary-active font-medium text-sm hover:bg-primary/5 transition-colors cursor-pointer">
                <Camera className="h-4 w-4" /> Kirim Foto
              </span>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
