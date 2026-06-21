import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-canvas px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-display font-medium text-primary/20 tracking-[-4px]">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-base text-muted leading-relaxed">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-medium hover:bg-primary-active transition-colors duration-200"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
