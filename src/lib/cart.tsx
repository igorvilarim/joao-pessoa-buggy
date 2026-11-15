import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { trackEvent } from "./analytics";

export interface CartItem {
  slug: string;
  nome: string;
  preco: number;
  pessoas: number;
}

interface CartContextValue {
  items: CartItem[];
  total: number;
  count: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addItem: (item: { slug: string; nome: string; preco: number }, pessoas?: number) => void;
  updatePessoas: (slug: string, pessoas: number) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "jpb-cart";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const persist = (next: CartItem[]) => {
    setItems(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const addItem: CartContextValue["addItem"] = (item, pessoas = 2) => {
    const existing = items.find((i) => i.slug === item.slug);
    const next = existing
      ? items.map((i) => (i.slug === item.slug ? { ...i, pessoas } : i))
      : [...items, { ...item, pessoas }];
    persist(next);
    trackEvent("carrinho", window.location.pathname, item.slug);
    setOpen(true);
  };

  const updatePessoas = (slug: string, pessoas: number) => {
    if (pessoas < 1) return;
    persist(items.map((i) => (i.slug === slug ? { ...i, pessoas } : i)));
  };

  const removeItem = (slug: string) => {
    persist(items.filter((i) => i.slug !== slug));
  };

  const clear = () => persist([]);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.preco * i.pessoas, 0),
    [items]
  );
  const count = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        count,
        isOpen,
        setOpen,
        addItem,
        updatePessoas,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
