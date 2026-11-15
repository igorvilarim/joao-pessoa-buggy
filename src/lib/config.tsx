import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface SiteConfig {
  nomeEmpresa: string;
  whatsapp: string; // formato internacional, só números
  whatsappFormatado: string;
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  endereco: string;
  cidadeBase: string;
  googleReviewsUrl: string;
  googleNota: string;
  googleAvaliacoes: string;
  cnpj: string;
  // Mensagens de WhatsApp editáveis
  msgHome: string;
  msgPasseio: string; // use {passeio}
  msgBlog: string; // use {artigo}
  msgContato: string;
  // Códigos de rastreamento
  gtmId: string;
  ga4Id: string;
  googleAdsId: string;
  metaPixelId: string;
  outroScript: string;
}

export const DEFAULT_CONFIG: SiteConfig = {
  nomeEmpresa: "João Pessoa Buggy",
  whatsapp: "5583988159724",
  whatsappFormatado: "(83) 98815-9724",
  instagramHandle: "@joaopessoabuggy",
  instagramUrl: "https://www.instagram.com/joaopessoabuggy/",
  email: "joaopessoabuggyjp@gmail.com",
  endereco:
    "R. Sebastião Interaminense - Jardim Oceania, João Pessoa - PB, 58037-770",
  cidadeBase: "João Pessoa",
  googleReviewsUrl: "https://www.google.com/search?q=Passeios+de+Buggy+Turismo+Joao+Pessoa+VT+Receptivo",
  googleNota: "4,3",
  googleAvaliacoes: "16",
  cnpj: "43.991.030/0001-10",
  msgHome:
    "Olá! Vi o site da João Pessoa Buggy e gostaria de mais informações sobre os passeios.",
  msgPasseio: "Olá! Vi o passeio {passeio} no site e quero agendar.",
  msgBlog: "Olá! Li o artigo {artigo} no blog e quero saber mais sobre os passeios.",
  msgContato:
    "Olá! Preenchi o formulário de contato no site e gostaria de falar com vocês.",
  gtmId: "",
  ga4Id: "",
  googleAdsId: "",
  metaPixelId: "",
  outroScript: "",
};

const STORAGE_KEY = "jpb-site-config";

interface ConfigContextValue {
  config: SiteConfig;
  updateConfig: (partial: Partial<SiteConfig>) => void;
  resetConfig: () => void;
}

const ConfigContext = createContext<ConfigContextValue>({
  config: DEFAULT_CONFIG,
  updateConfig: () => {},
  resetConfig: () => {},
});

function loadConfig(): SiteConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const stored = { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    // corrige o endereço antigo do Instagram salvo em sessões anteriores
    if (stored.instagramHandle === "@joaopessoabooggy") {
      stored.instagramHandle = DEFAULT_CONFIG.instagramHandle;
      stored.instagramUrl = DEFAULT_CONFIG.instagramUrl;
    }
    return stored;
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    setConfig(loadConfig());
  }, []);

  const updateConfig = (partial: Partial<SiteConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...partial };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetConfig = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setConfig(DEFAULT_CONFIG);
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}

export function waLink(numero: string, mensagem: string) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
