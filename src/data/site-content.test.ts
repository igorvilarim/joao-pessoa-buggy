import { describe, expect, it } from "vitest";
import { getPasseio } from "./passeios";
import { DEFAULT_CONFIG } from "@/lib/config";

describe("valores comerciais informados pelo proprietário", () => {
  it("define Encantos do Sul a partir de R$ 579,99", () => {
    expect(getPasseio("encantos-do-sul")?.preco).toBe(579.99);
  });

  it("define Encantos do Sul II a partir de R$ 579,99", () => {
    expect(getPasseio("encantos-do-sul-2")?.preco).toBe(579.99);
  });

  it("define Norte Extremo a partir de R$ 579,99", () => {
    expect(getPasseio("norte-extremo")?.preco).toBe(579.99);
  });

  it("define a Expedição Buggy ou 4x4 PB/RN em R$ 1.200,00", () => {
    expect(getPasseio("expedicao-pb-rn")?.preco).toBe(1200);
  });

  it("usa o novo e-mail público da empresa", () => {
    expect(DEFAULT_CONFIG.email).toBe("joaopessoabuggyjp@gmail.com");
  });

  it("usa o Instagram @joaopessoabuggy", () => {
    expect(DEFAULT_CONFIG.instagramHandle).toBe("@joaopessoabuggy");
    expect(DEFAULT_CONFIG.instagramUrl).toBe(
      "https://www.instagram.com/joaopessoabuggy/",
    );
  });
});
