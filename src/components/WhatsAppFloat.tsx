import { MessageCircle } from "lucide-react";
import { useConfig, waLink } from "@/lib/config";
import { trackEvent, firePixel } from "@/lib/analytics";

export function WhatsAppFloat() {
  const { config } = useConfig();
  return (
    <a
      href={waLink(config.whatsapp, config.msgHome)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackEvent("clique_whatsapp", window.location.pathname, "botao_flutuante");
        firePixel("whatsapp_flutuante");
      }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-6 py-4 text-whatsapp-foreground shadow-2xl shadow-whatsapp/20 transition-transform hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="text-sm font-semibold">Reservar agora</span>
    </a>
  );
}
