import { useEffect, useState } from "react";
import { ArrowUp, Instagram } from "lucide-react";

interface FloatingActionsProps {
  instagramUrl?: string;
}

export function FloatingActions({
  instagramUrl = "https://www.instagram.com/balqisindira?stkn=MTdrZ2J1cmE5dzVpdg==",
}: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={`pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-forest hover:text-primary-foreground hover:scale-110 active:scale-95 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={16} />
      </button>

      {/* Instagram Profile Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Duta Pariwisata @balqisindira"
        className="group pointer-events-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] py-2.5 px-4 text-white shadow-[0_8px_20px_-4px_rgba(225,48,108,0.4)] transition-all duration-300 hover:shadow-[0_12px_25px_-4px_rgba(225,48,108,0.6)] hover:scale-105 active:scale-95"
      >
        <Instagram size={18} className="transition-transform group-hover:rotate-6" />
        <span className="text-xs font-bold tracking-wide">
          @balqisindira
        </span>
      </a>
    </div>
  );
}
