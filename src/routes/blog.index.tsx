import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/data/blog";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de Turismo em João Pessoa | João Pessoa Buggy" },
      {
        name: "description",
        content:
          "Dicas, guias e roteiros para aproveitar João Pessoa e o litoral da Paraíba: melhor época, o que levar, litoral norte ou sul e muito mais.",
      },
      { property: "og:title", content: "Blog de Turismo em João Pessoa" },
      {
        property: "og:description",
        content:
          "Guias e dicas de quem vive o litoral paraibano todos os dias.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
        Blog
      </span>
      <h1 className="mt-3 max-w-3xl font-display text-5xl uppercase italic leading-[0.9] tracking-tighter md:text-7xl">
        Dicas de quem vive o litoral paraibano
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary"
          >
            <PlaceholderImage
              src={post.imagem}
              alt={post.imagemAlt}
              original
              preservarPessoas={post.preservarPessoas}
              className="aspect-square w-full"
            />
            <div className="flex flex-1 flex-col p-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {post.categoria}
              </span>
              <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:text-primary">
                {post.titulo}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {post.metaDescricao}
              </p>
              <time
                dateTime={post.criadoEm}
                className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {new Date(post.criadoEm).toLocaleDateString("pt-BR")}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
