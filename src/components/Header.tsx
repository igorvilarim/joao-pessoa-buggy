import { Link } from "@tanstack/react-router";
import { Instagram, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart, formatBRL } from "@/lib/cart";
import { useConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const { count, total, setOpen } = useCart();
  const { config } = useConfig();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/passeios", label: "Roteiros" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/blog", label: "Blog" },
    { to: "/contato", label: "Contato" },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display text-2xl uppercase italic tracking-tighter"
          >
            João Pessoa <span className="text-primary">Buggy</span>
          </Link>
          <div className="hidden gap-6 text-sm font-medium uppercase tracking-wider md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-primary [&.active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("clique_instagram", window.location.pathname, "header")
              }
              className="flex items-center gap-1.5 italic transition-colors hover:text-primary"
            >
              <Instagram className="size-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-all hover:bg-card"
            aria-label="Abrir orçamento"
          >
            <span className="font-mono text-xs uppercase tracking-tighter text-muted-foreground">
              Orçamento
            </span>
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              {formatBRL(total)}
            </span>
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground ring-4 ring-primary/10 transition-transform group-hover:scale-110">
              {count}
            </span>
            <ShoppingCart className="size-4" />
          </button>
          <button
            className="rounded-full border border-border p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 italic"
            >
              <Instagram className="size-4" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
