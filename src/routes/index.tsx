import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Star,
  ShieldCheck,
  Sparkles,
  Waves,
  ArrowRight,
} from "lucide-react";
import { PASSEIOS } from "@/data/passeios";
import { BLOG_POSTS } from "@/data/blog";
import { PasseioCard } from "@/components/PasseioCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";
import capaPrincipal from "@/assets/capa-principal-buggys.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Passeios de Buggy em João Pessoa | João Pessoa Buggy",
      },
      {
        name: "description",
        content:
          "Passeios privativos de buggy em João Pessoa e no litoral da Paraíba. Bugueiros credenciados, busca no hotel e reserva rápida pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Passeios de Buggy em João Pessoa | João Pessoa Buggy",
      },
      {
        property: "og:description",
        content:
          "Roteiros de buggy pelo litoral sul e norte da Paraíba, expedição PB/RN e passeios náuticos. Reserve pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const DIFERENCIAIS = [
  {
    icon: ShieldCheck,
    titulo: "Bugueiros credenciados",
    texto: "Profissionais e veículos credenciados pelo Ministério do Turismo.",
  },
  {
    icon: Sparkles,
    titulo: "Passeios privativos",
    texto: "O buggy é só do seu grupo — sem pressa e sem dividir com estranhos.",
  },
  {
    icon: Waves,
    titulo: "Busca no hotel",
    texto: "Buscamos e deixamos vocês no hotel em João Pessoa, sem custo extra.",
  },
];

function Index() {
  const { config } = useConfig();
  const destaques = PASSEIOS.filter((p) => p.destaque && p.status === "ativo");
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          src={capaPrincipal.url}
          alt="Turistas em buggys amarelo e azul diante das falésias do litoral paraibano"
          eager
          original
          className="h-[560px] w-full md:h-[640px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-foreground/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/45 to-foreground/15" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-24">
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
              João Pessoa · Paraíba
            </span>
            <h1 className="mt-3 max-w-4xl font-display text-5xl uppercase italic leading-[0.88] tracking-tighter text-background md:text-8xl md:leading-[0.85]">
              O litoral paraibano <span className="text-primary">de buggy</span>
            </h1>
            <p className="mt-6 max-w-xl text-background/80">
              Roteiros privativos com bugueiros credenciados, saindo do seu
              hotel. Falésias, piscinas naturais, trilhas e mirantes exclusivos
              em um dia inesquecível.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink(config.whatsapp, config.msgHome)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("clique_whatsapp", "/", "hero");
                  firePixel("hero_whatsapp");
                }}
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="size-4" /> Reservar no WhatsApp
              </a>
              <Link
                to="/passeios"
                className="flex items-center gap-2 rounded-full border border-background/40 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-background/10"
              >
                Ver roteiros <ArrowRight className="size-4" />
              </Link>
            </div>
            <a
              href={config.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-background/80 hover:text-primary"
            >
              <Star className="size-4 fill-primary text-primary" />
              <strong>{config.googleNota}</strong> · {config.googleAvaliacoes}{" "}
              avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
          {DIFERENCIAIS.map((d) => (
            <div key={d.titulo} className="flex gap-4">
              <d.icon className="size-6 shrink-0 text-primary" />
              <div>
                <h2 className="font-display text-xl uppercase italic tracking-tighter">
                  {d.titulo}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roteiros em destaque */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Mais procurados
            </span>
            <h2 className="mt-2 font-display text-4xl uppercase italic leading-none tracking-tighter md:text-5xl">
              Roteiros em destaque
            </h2>
          </div>
          <Link
            to="/passeios"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest hover:text-primary"
          >
            Ver todos <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destaques.map((p) => (
            <PasseioCard key={p.slug} passeio={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border bg-primary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-14">
          <h2 className="max-w-xl font-display text-4xl uppercase italic leading-none tracking-tighter text-primary-foreground md:text-5xl">
            Sua próxima aventura começa com uma mensagem
          </h2>
          <a
            href={waLink(config.whatsapp, config.msgHome)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("clique_whatsapp", "/", "cta");
              firePixel("cta_whatsapp");
            }}
            className="flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl uppercase italic leading-none tracking-tighter md:text-5xl">
            Dicas para sua viagem
          </h2>
          <Link
            to="/blog"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest hover:text-primary"
          >
            Ver blog <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary"
            >
              <PlaceholderImage
                src={post.imagem}
                alt={post.imagemAlt}
                original
                preservarPessoas={post.preservarPessoas}
                className="aspect-square w-full"
              />
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {post.categoria}
                </span>
                <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">
                  {post.titulo}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
