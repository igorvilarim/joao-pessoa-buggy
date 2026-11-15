import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { getPost, BLOG_POSTS } from "@/data/blog";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado | João Pessoa Buggy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: post.metaTitulo },
        { name: "description", content: post.metaDescricao },
        { property: "og:title", content: post.metaTitulo },
        { property: "og:description", content: post.metaDescricao },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const { config } = useConfig();
  const mensagem = config.msgBlog.replace("{artigo}", post.titulo);
  const outros = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <nav className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <Link to="/blog" className="hover:text-primary">
          Blog
        </Link>{" "}
        / <span className="text-primary">{post.categoria}</span>
      </nav>
      <h1 className="font-display text-4xl uppercase italic leading-[0.95] tracking-tighter md:text-5xl">
        {post.titulo}
      </h1>
      <time
        dateTime={post.criadoEm}
        className="mt-4 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        {new Date(post.criadoEm).toLocaleDateString("pt-BR")}
      </time>

      <PlaceholderImage
        src={post.imagem}
        alt={post.imagemAlt}
        eager
        original
        preservarPessoas={post.preservarPessoas}
        className="mx-auto mt-8 aspect-square w-full max-w-md rounded-3xl"
      />

      <div className="mt-10 space-y-5">
        {post.conteudo.map((par) =>
          par.startsWith("## ") ? (
            <h2
              key={par}
              className="pt-4 font-display text-2xl uppercase italic tracking-tighter"
            >
              {par.slice(3)}
            </h2>
          ) : (
            <p key={par} className="leading-relaxed text-muted-foreground">
              {par}
            </p>
          )
        )}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center">
        <h2 className="font-display text-3xl uppercase italic tracking-tighter">
          Bora conhecer a Paraíba?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Fale com a nossa equipe e monte o roteiro perfeito para os seus dias
          em João Pessoa.
        </p>
        <a
          href={waLink(config.whatsapp, mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("clique_whatsapp", `/blog/${post.slug}`, post.slug);
            firePixel("blog_whatsapp");
          }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
        >
          <MessageCircle className="size-4" /> Falar no WhatsApp
        </a>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl uppercase italic tracking-tighter">
          Leia também
        </h2>
        <ul className="mt-4 space-y-3">
          {outros.map((p) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="text-sm hover:text-primary"
              >
                {p.titulo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
