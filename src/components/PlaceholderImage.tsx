import { ImageOff } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  /** true = foto real da empresa, sem aviso de substituição */
  original?: boolean | undefined;
  /** Mantém pessoas inteiras e posicionadas no centro superior */
  preservarPessoas?: boolean | undefined;
}

/**
 * Foto genérica ilustrativa com aviso de substituição.
 * Todas as fotos do site usam este componente até que as fotos
 * originais da empresa sejam enviadas e substituídas.
 */
export function PlaceholderImage({
  src,
  alt,
  className = "",
  width,
  height,
  eager = false,
  original = false,
  preservarPessoas = false,
}: Props) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      {preservarPessoas && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading={eager ? "eager" : "lazy"}
          className="tour-photo absolute inset-0 h-full w-full scale-125 object-cover opacity-50 blur-2xl"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className={`tour-photo relative h-full w-full ${
          preservarPessoas ? "object-contain object-center" : "object-cover object-center"
        }`}
      />
      {!original && (
        <>
          <div className="placeholder-stripes pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-foreground/80 px-3 py-2">
            <p className="flex items-center gap-1.5 font-mono text-[9px] font-medium uppercase tracking-widest text-background/90">
              <ImageOff className="size-3 shrink-0" />
              Foto ilustrativa — substituir pela foto original
            </p>
          </div>
        </>
      )}
    </div>
  );
}
