import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PASSEIOS, CATEGORIAS } from "@/data/passeios";
import { PasseioCard } from "@/components/PasseioCard";

export const Route = createFileRoute("/passeios/")({
  head: () => ({
    meta: [
      {
        title: "Roteiros e Passeios de Buggy em João Pessoa | João Pessoa Buggy",
      },
      {
        name: "description",
        content:
          "Todos os roteiros da João Pessoa Buggy: litoral sul, litoral norte, expedição PB/RN e catamarã em Picãozinho. Preços, itinerários e reserva pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Roteiros e Passeios de Buggy em João Pessoa",
      },
      {
        property: "og:description",
        content:
          "Conheça todos os roteiros de buggy e passeios náuticos saindo de João Pessoa, na Paraíba.",
      },
    ],
  }),
  component: PasseiosPage,
});

function PasseiosPage() {
  const [filtro, setFiltro] = useState<string>("Todos");
  const ativos = PASSEIOS.filter((p) => p.status === "ativo");
  const lista =
    filtro === "Todos" ? ativos : ativos.filter((p) => p.categoria === filtro);
  const categoriasComPasseio = CATEGORIAS.filter((c) =>
    ativos.some((p) => p.categoria === c)
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
        Nossos roteiros
      </span>
      <h1 className="mt-3 max-w-3xl font-display text-5xl uppercase italic leading-[0.9] tracking-tighter md:text-7xl">
        Escolha sua aventura no litoral paraibano
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Roteiros privativos de buggy com bugueiros credenciados pelo Ministério
        do Turismo, saindo do seu hotel em João Pessoa. Monte seu orçamento e
        confirme a disponibilidade pelo WhatsApp.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {["Todos", ...categoriasComPasseio].map((c) => (
          <button
            key={c}
            onClick={() => setFiltro(c)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              filtro === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((p) => (
          <PasseioCard key={p.slug} passeio={p} />
        ))}
      </div>
    </div>
  );
}
