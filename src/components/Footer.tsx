import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Star, Phone } from "lucide-react";
import { useConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  const { config } = useConfig();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 font-display text-3xl uppercase italic opacity-30">
              João Pessoa Buggy
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Passeios de buggy e receptivo turístico em João Pessoa, Paraíba.
              Guias e carros credenciados pelo Ministério do Turismo.
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              CNPJ {config.cnpj}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contato
            </span>
            <a
              href={`tel:+${config.whatsapp}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Phone className="size-4" /> {config.whatsappFormatado}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="size-4" /> {config.email}
            </a>
            <span className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {config.endereco}
            </span>
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("clique_instagram", window.location.pathname, "footer")
              }
              className="flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="size-4" /> {config.instagramHandle}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navegação
            </span>
            <Link to="/passeios" className="hover:text-primary">
              Roteiros e passeios
            </Link>
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link to="/sobre" className="hover:text-primary">
              Sobre nós
            </Link>
            <Link to="/contato" className="hover:text-primary">
              Contato
            </Link>
            <a
              href={config.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary"
            >
              <Star className="size-3.5 fill-primary text-primary" />
              {config.googleNota} no Google ({config.googleAvaliacoes} avaliações)
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            João Pessoa, PB &bull; Brasil
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {config.nomeEmpresa}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
