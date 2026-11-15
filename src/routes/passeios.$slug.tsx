import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Clock,
  Sunrise,
  Users,
  Check,
  X,
  MessageCircle,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";
import { getPasseio, PASSEIOS, AVISO_MARE } from "@/data/passeios";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PasseioCard } from "@/components/PasseioCard";
import { useCart, formatBRL } from "@/lib/cart";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";

export const Route = createFileRoute("/passeios/$slug")({
  loader: ({ params }) => {
    const passeio = getPasseio(params.slug);
    if (!passeio) throw notFound();
    return { passeio };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Passeio não encontrado | João Pessoa Buggy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { passeio } = loaderData;
    return {
      meta: [
        { title: passeio.metaTitulo },
        { name: "description", content: passeio.metaDescricao },
        { property: "og:title", content: passeio.metaTitulo },
        { property: "og:description", content: passeio.metaDescricao },
      ],
    };
  },
  component: PasseioPage,
});

function PasseioPage() {
  const { passeio } = Route.useLoaderData();
  const { addItem } = useCart();
  const { config } = useConfig();

  const mensagem = config.msgPasseio.replace("{passeio}", passeio.nome);
  const relacionados = PASSEIOS.filter(
    (p) => p.slug !== passeio.slug && p.status === "ativo"
  ).slice(0, 3);

  return (
    <article>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <nav className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Início
            </Link>{" "}
            /{" "}
            <Link to="/passeios" className="hover:text-primary">
              Roteiros
            </Link>{" "}
            / <span className="text-primary">{passeio.categoria}</span>
          </nav>
          <h1 className="font-display text-5xl uppercase italic leading-[0.9] tracking-tighter md:text-6xl">
            {passeio.nome}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" /> {passeio.duracao}
            </span>
            <span className="flex items-center gap-1.5">
              <Sunrise className="size-3.5" /> {passeio.horarioSaida}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-3.5" /> {passeio.tipo}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {passeio.fotos.map((f) => (
              <PlaceholderImage
                key={f.src}
                src={f.src}
                alt={f.alt}
                original={f.original}
                preservarPessoas={f.preservarPessoas}
                eager
                className="aspect-square w-full rounded-3xl"
              />
            ))}
          </div>

          {passeio.exibirAvisoMare && (
            <div className="mt-8 flex gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-5">
              <AlertTriangle className="size-5 shrink-0 text-primary" />
              <p className="text-sm">{AVISO_MARE}</p>
            </div>
          )}

          <p className="mt-8 text-lg leading-relaxed">{passeio.descricao}</p>

          <h2 className="mt-12 font-display text-3xl uppercase italic tracking-tighter">
            Itinerário
          </h2>
          <ol className="mt-5 space-y-3">
            {passeio.itinerario.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[11px] text-primary">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl uppercase italic tracking-tighter">
                Incluso
              </h2>
              <ul className="mt-4 space-y-2">
                {passeio.incluso.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl uppercase italic tracking-tighter">
                Não incluso
              </h2>
              <ul className="mt-4 space-y-2">
                {passeio.naoIncluso.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 opacity-60" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-3xl border border-border bg-card p-7">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              a partir de
            </span>
            <div className="mt-1 flex items-end gap-2">
              <span className="font-display text-5xl italic tracking-tighter">
                {formatBRL(passeio.preco)}
              </span>
              <span className="pb-2 font-mono text-xs text-muted-foreground">
                /{passeio.precoPor}
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Valor de referência. Confirme o preço final e a disponibilidade da
              data diretamente com a nossa equipe.
            </p>

            <a
              href={waLink(config.whatsapp, mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("clique_whatsapp", `/passeios/${passeio.slug}`, passeio.slug);
                firePixel("passeio_whatsapp");
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-4" /> Agendar no WhatsApp
            </a>
            <button
              onClick={() =>
                addItem({
                  slug: passeio.slug,
                  nome: passeio.nome,
                  preco: passeio.preco,
                })
              }
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary"
            >
              <ShoppingCart className="size-4" /> Adicionar ao orçamento
            </button>
          </div>
        </aside>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display text-3xl uppercase italic tracking-tighter">
          Outros roteiros
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relacionados.map((p) => (
            <PasseioCard key={p.slug} passeio={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
