import { Link } from "@tanstack/react-router";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { formatBRL } from "@/lib/cart";
import type { Passeio } from "@/data/passeios";

export function PasseioCard({ passeio }: { passeio: Passeio }) {
  const foto = passeio.fotos[0];
  return (
    <Link
      to="/passeios/$slug"
      params={{ slug: passeio.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary"
    >
      {foto && (
        <PlaceholderImage
          src={foto.src}
          alt={foto.alt}
          original={foto.original}
          preservarPessoas={foto.preservarPessoas}
          className="aspect-square w-full"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full bg-primary/15 px-2 py-1 text-primary">
            {passeio.categoria}
          </span>
          <span>{passeio.tipo}</span>
        </div>
        <h3 className="font-display text-2xl uppercase italic leading-none tracking-tighter">
          {passeio.nome}
        </h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">
          {passeio.descricaoCurta}
        </p>
        <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" /> {passeio.duracao}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-3.5" />
            {passeio.precoPor === "buggy" ? "até 4 pessoas" : "por pessoa"}
          </span>
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-5">
          <div>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              a partir de
            </span>
            <span className="font-display text-3xl italic tracking-tighter">
              {formatBRL(passeio.preco)}
            </span>
            <span className="ml-1 font-mono text-[11px] text-muted-foreground">
              /{passeio.precoPor}
            </span>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
