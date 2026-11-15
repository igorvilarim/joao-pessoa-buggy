import { X, Minus, Plus, MessageCircle, Trash2 } from "lucide-react";
import { useCart, formatBRL } from "@/lib/cart";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";
import { getPasseio } from "@/data/passeios";

export function CartDrawer() {
  const { items, total, isOpen, setOpen, updatePessoas, removeItem, clear } =
    useCart();
  const { config } = useConfig();

  if (!isOpen) return null;

  const linhas = items
    .map((i) => {
      const p = getPasseio(i.slug);
      const unidade = p?.precoPor === "pessoa" ? "pessoa(s)" : "buggy(s)";
      return `• ${i.nome} — ${i.pessoas} ${unidade} — ${formatBRL(i.preco * i.pessoas)}`;
    })
    .join("\n");

  const mensagem = `Olá! Montei um orçamento no site da ${config.nomeEmpresa}:\n\n${linhas}\n\nTotal estimado: ${formatBRL(total)}\n\nPodem confirmar disponibilidade?`;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <button
        aria-label="Fechar orçamento"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl">
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-display text-2xl uppercase italic tracking-tighter">
              Seu orçamento
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Valores estimados — confirme no WhatsApp
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-border p-2 hover:bg-card"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nenhum passeio adicionado ainda. Escolha um roteiro e adicione ao
              orçamento.
            </p>
          )}
          {items.map((i) => {
            const p = getPasseio(i.slug);
            return (
              <div
                key={i.slug}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium leading-tight">{i.nome}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {formatBRL(i.preco)} por{" "}
                      {p?.precoPor === "pessoa" ? "pessoa" : "buggy"}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i.slug)}
                    className="text-muted-foreground hover:text-primary"
                    aria-label={`Remover ${i.nome}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
                    <button
                      onClick={() => updatePessoas(i.slug, i.pessoas - 1)}
                      aria-label="Diminuir"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center font-mono text-sm">
                      {i.pessoas}
                    </span>
                    <button
                      onClick={() => updatePessoas(i.slug, i.pessoas + 1)}
                      aria-label="Aumentar"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <span className="font-mono text-sm font-semibold">
                    {formatBRL(i.preco * i.pessoas)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="border-t border-border px-6 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Total estimado
            </span>
            <span className="font-display text-3xl italic tracking-tighter">
              {formatBRL(total)}
            </span>
          </div>
          <a
            href={waLink(config.whatsapp, mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("clique_whatsapp", "/orcamento", "carrinho");
              firePixel("carrinho_whatsapp");
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-40"
          >
            <MessageCircle className="size-4" />
            Enviar pelo WhatsApp
          </a>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="mt-3 w-full text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              Limpar orçamento
            </button>
          )}
        </footer>
      </aside>
    </div>
  );
}
