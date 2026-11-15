import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Instagram } from "lucide-react";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";
import { PASSEIOS } from "@/data/passeios";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Reservas de Passeios | João Pessoa Buggy" },
      {
        name: "description",
        content:
          "Fale com a João Pessoa Buggy pelo WhatsApp (83) 98815-9724, e-mail ou Instagram e reserve seu passeio de buggy no litoral da Paraíba.",
      },
      { property: "og:title", content: "Contato — João Pessoa Buggy" },
      {
        property: "og:description",
        content:
          "Reserve seu passeio de buggy em João Pessoa pelo WhatsApp, e-mail ou Instagram.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const { config } = useConfig();
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState("2");
  const [data, setData] = useState("");
  const [passeio, setPasseio] = useState("");
  const [mensagem, setMensagem] = useState("");

  const texto = [
    `Olá! Meu nome é ${nome || "(nome)"}.`,
    passeio ? `Tenho interesse no passeio: ${passeio}.` : "",
    `Somos ${pessoas} pessoa(s).`,
    data ? `Data pretendida: ${new Date(data + "T12:00:00").toLocaleDateString("pt-BR")}.` : "",
    mensagem,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
          Contato
        </span>
        <h1 className="mt-3 font-display text-5xl uppercase italic leading-[0.9] tracking-tighter md:text-6xl">
          Vamos montar o seu roteiro
        </h1>
        <p className="mt-5 max-w-lg text-muted-foreground">
          Preencha os campos abaixo e enviamos tudo direto para o nosso WhatsApp
          — respondemos rapidinho com disponibilidade e valores confirmados.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            trackEvent("clique_whatsapp", "/contato", "formulario");
            firePixel("contato_whatsapp");
            window.open(waLink(config.whatsapp, texto), "_blank");
          }}
        >
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
              Seu nome
            </label>
            <input
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Como podemos te chamar?"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="pessoas"
                className="mb-1.5 block text-sm font-medium"
              >
                Quantas pessoas
              </label>
              <input
                id="pessoas"
                type="number"
                min={1}
                value={pessoas}
                onChange={(e) => setPessoas(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="data" className="mb-1.5 block text-sm font-medium">
                Data pretendida
              </label>
              <input
                id="data"
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="passeio"
              className="mb-1.5 block text-sm font-medium"
            >
              Passeio de interesse
            </label>
            <select
              id="passeio"
              value={passeio}
              onChange={(e) => setPasseio(e.target.value)}
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
            >
              <option value="">Ainda não sei / quero uma sugestão</option>
              {PASSEIOS.filter((p) => p.status === "ativo").map((p) => (
                <option key={p.slug} value={p.nome}>
                  {p.nome}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="mb-1.5 block text-sm font-medium"
            >
              Mensagem (opcional)
            </label>
            <textarea
              id="mensagem"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Conte pra gente o que vocês querem conhecer"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" /> Enviar pelo WhatsApp
          </button>
        </form>
      </div>

      <aside className="h-fit rounded-3xl border border-border bg-card p-8">
        <h2 className="font-display text-2xl uppercase italic tracking-tighter">
          Fale direto conosco
        </h2>
        <div className="mt-6 space-y-4 text-sm">
          <a
            href={waLink(config.whatsapp, config.msgContato)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("clique_whatsapp", "/contato", "lateral")}
            className="flex items-center gap-3 hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {config.whatsappFormatado}
          </a>
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-3 hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {config.email}
          </a>
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("clique_instagram", "/contato", "lateral")}
            className="flex items-center gap-3 hover:text-primary"
          >
            <Instagram className="size-4 text-primary" />
            {config.instagramHandle}
          </a>
          <p className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {config.endereco}
          </p>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-muted-foreground">
          Atendimento todos os dias · Saídas do seu hotel em João Pessoa
        </p>
      </aside>
    </div>
  );
}
