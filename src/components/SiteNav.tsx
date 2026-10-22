import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Paket Wisata", href: "#packages" },
  { label: "Kuliner", href: "#culinary" },
  { label: "Galeri", href: "#gallery" },
  { label: "Akses Rute", href: "#access" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 py-3 shadow-xs"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="group leading-tight flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
            <img
              src="/favicon.svg"
              alt="Logo Desa Wisata Sungsang IV"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-xl"
            />
          </div>
          <div>
            <span
              className={`block font-display text-2xl font-bold tracking-[0.22em] transition-colors ${
                scrolled ? "text-deep" : "text-primary-foreground"
              }`}
            >
              SUNGSANG IV
            </span>
            <span
              className={`block text-[0.6rem] tracking-[0.22em] uppercase font-semibold transition-colors ${
                scrolled ? "text-forest" : "text-sand"
              }`}
            >
              Top 75 ADWI 2023 · Banyuasin
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.75rem] uppercase tracking-[0.18em] font-medium transition-colors duration-200 hover:text-forest ${
                scrolled ? "text-foreground/85" : "text-primary-foreground/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @balqisindira"
            title="Instagram @balqisindira (Duta Pariwisata Sungsang IV)"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <Instagram size={14} />
            <span>@balqisindira</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors ${
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-white/10"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-full border-b border-border/80 bg-background/95 backdrop-blur-xl px-6 py-6 shadow-2xl lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground hover:bg-mist transition-colors"
              >
                <span>{l.label}</span>
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg=="
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] py-3.5 text-center text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md"
              >
                <Instagram size={16} />
                Instagram @balqisindira
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

