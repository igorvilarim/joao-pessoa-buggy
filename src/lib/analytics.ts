// Analytics local (localStorage) — pronto para migrar para Lovable Cloud.
export type AnalyticsTipo =
  | "visita"
  | "clique_whatsapp"
  | "clique_instagram"
  | "carrinho";

export interface AnalyticsEvento {
  tipo: AnalyticsTipo;
  pagina: string;
  referencia?: string | undefined;
  criadoEm: string;
  visitante: string;
}

const STORAGE_KEY = "jpb-analytics";
const VISITOR_KEY = "jpb-visitor";

function getVisitorId(): string {
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return "anon";
  }
}

export function trackEvent(
  tipo: AnalyticsTipo,
  pagina: string,
  referencia?: string
) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const eventos: AnalyticsEvento[] = raw ? JSON.parse(raw) : [];
    eventos.push({
      tipo,
      pagina,
      referencia,
      criadoEm: new Date().toISOString(),
      visitante: getVisitorId(),
    });
    // limita a 5000 eventos
    if (eventos.length > 5000) eventos.splice(0, eventos.length - 5000);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(eventos));
  } catch {
    // ignore
  }
}

export function getEventos(): AnalyticsEvento[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

// ---- Pixels / eventos de conversão por botão ----
const PIXEL_KEY = "jpb-botoes-pixel";

export function getPixelCodes(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(PIXEL_KEY) || "{}");
  } catch {
    return {};
  }
}

export function setPixelCode(botao: string, codigo: string) {
  const map = getPixelCodes();
  if (codigo.trim()) map[botao] = codigo;
  else delete map[botao];
  window.localStorage.setItem(PIXEL_KEY, JSON.stringify(map));
}

export function firePixel(botao: string) {
  const codigo = getPixelCodes()[botao];
  if (!codigo) return;
  try {
    // Código de conversão personalizado (gtag/fbq) configurado no admin
    new Function(codigo)();
  } catch (e) {
    console.warn("Erro ao disparar pixel do botão", botao, e);
  }
}
