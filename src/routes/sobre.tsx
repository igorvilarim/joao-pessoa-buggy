import { createFileRoute } from "@tanstack/react-router";
import { Star, ShieldCheck, MapPin, Heart, MessageCircle } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import fotoFamiliaBuggys from "@/assets/fotos-reais/familia-buggys-mirante.webp.asset.json";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Receptivo em João Pessoa | João Pessoa Buggy" },
      {
        name: "description",
        content:
          "Conheça a João Pessoa Buggy: receptivo turístico com bugueiros credenciados pelo Ministério do Turismo, passeios privativos e atendimento pelo WhatsApp.",
      },
      { property: "og:title", content: "Sobre a João Pessoa Buggy" },
      {
        property: "og:description",
        content:
          "Receptivo turístico em João Pessoa com bugueiros credenciados e passeios privativos pelo litoral paraibano.",
      },
    ],
  }),
  component: SobrePage,
});

const VALORES = [
  {
    icon: ShieldCheck,
    titulo: "Credenciados",
    texto:
      "Bugueiros e veículos credenciados pelo Ministério do Turismo, com segurança em primeiro lugar.",
  },
  {
    icon: MapPin,
    titulo: "Conhecimento local",
    texto:
      "Somos da Paraíba. Conhecemos cada mirante, atalho e o melhor horário de cada praia.",
  },
  {
    icon: Heart,
    titulo: "Atendimento próximo",
    texto:
      "Do primeiro contato ao retorno ao hotel, você fala direto com quem organiza o seu passeio.",
  },
];

function SobrePage() {
  const { config } = useConfig();
  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Sobre nós
          </span>
          <h1 className="mt-3 font-display text-5xl uppercase italic leading-[0.9] tracking-tighter md:text-6xl">
            Turismo de verdade, feito por quem é daqui
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A {config.nomeEmpresa} é um receptivo turístico de João Pessoa
            especializado em passeios de buggy pelo litoral da Paraíba. Buscamos
            você no hotel, montamos o roteiro do jeito que faz sentido para o seu
            grupo e cuidamos de tudo até o retorno.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabalhamos com passeios privativos: o buggy é só do seu grupo, sem
            pressa e com paradas para banho e fotos em cada mirante do caminho.
            Também organizamos passeios náuticos, transfers e pacotes
            personalizados.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={config.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary"
            >
              <Star className="size-4 fill-primary text-primary" />
              <strong>{config.googleNota}</strong>
              <span className="text-muted-foreground">
                · {config.googleAvaliacoes} avaliações no Google
              </span>
            </a>
            <a
              href={waLink(config.whatsapp, config.msgHome)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("clique_whatsapp", "/sobre", "sobre");
                firePixel("sobre_whatsapp");
              }}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="size-4" /> Falar conosco
            </a>
          </div>
        </div>
        <PlaceholderImage
          src={fotoFamiliaBuggys.url}
          alt="Família com dois buggys em um mirante do litoral paraibano"
          eager
          original
          className="aspect-square w-full rounded-[2rem]"
        />
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
          {VALORES.map((v) => (
            <div key={v.titulo}>
              <v.icon className="size-7 text-primary" />
              <h2 className="mt-4 font-display text-2xl uppercase italic tracking-tighter">
                {v.titulo}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl uppercase italic tracking-tighter">
          Dados da empresa
        </h2>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          {config.nomeEmpresa} · CNPJ {config.cnpj}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{config.endereco}</p>
      </section>
    </div>
  );
}
