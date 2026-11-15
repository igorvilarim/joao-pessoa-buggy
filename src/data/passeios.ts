import imgHero from "@/assets/hero-buggy.jpg";
import fotoOrlaJoaoPessoa from "@/assets/fotos-reais/orla-joao-pessoa-aerea.png.asset.json";
import fotoGrupoBuggys from "@/assets/fotos-reais/grupo-buggys-falesias.jpg.asset.json";
import fotoBuggyFalesias from "@/assets/fotos-reais/buggy-falesias-coloridas.jpg.asset.json";
import fotoFamiliaBuggys from "@/assets/fotos-reais/familia-buggys-mirante.webp.asset.json";
import fotoNorte2 from "@/assets/norte2_9_11zon.webp.asset.json";
import fotoExp1 from "@/assets/Expedicao1_11zon_1_11zon.webp.asset.json";
import fotoExp2 from "@/assets/Expedicao2_1_11zon.webp.asset.json";
import fotoExp3 from "@/assets/Expedicao3_2_11zon.webp.asset.json";
import fotoExp5 from "@/assets/Expedicao5_4_11zon.webp.asset.json";
import fotoExp6 from "@/assets/Expedicao6_5_11zon.webp.asset.json";
import fotoExp7 from "@/assets/Expedicao7_6_11zon.webp.asset.json";
import fotoExp9 from "@/assets/Expedicao9_8_11zon.webp.asset.json";
import fotoNorte4 from "@/assets/norte4_10_11zon.webp.asset.json";
import fotoNorte5 from "@/assets/norte5_11_11zon.webp.asset.json";
import fotoSul2a from "@/assets/Sul_part2_11zon_3_11zon.webp.asset.json";
import fotoSul2b from "@/assets/Sul_part2-2_11zon_4_11zon.webp.asset.json";
import fotoSul2c from "@/assets/Sul_part2-3_11zon_5_11zon.webp.asset.json";
import fotoSul2d from "@/assets/Sul_part2-4_11zon_6_11zon.webp.asset.json";
import fotoSul2e from "@/assets/Sul_part2-5_1_11zon.webp.asset.json";
import fotoSulA from "@/assets/sul2_3_11zon.webp.asset.json";
import fotoSulB from "@/assets/sul3_4_11zon.webp.asset.json";
import fotoSulC from "@/assets/sul4_5_11zon.webp.asset.json";

export type CategoriaPasseio =
  | "Buggy"
  | "Catamarã"
  | "Barco"
  | "Transfer"
  | "Pacote";

export interface Passeio {
  slug: string;
  nome: string;
  categoria: CategoriaPasseio;
  preco: number; // por buggy (até 4 pessoas) ou por pessoa, conforme tipo
  precoPor: "buggy" | "pessoa";
  destaque: boolean;
  status: "ativo" | "inativo";
  descricaoCurta: string;
  descricao: string;
  itinerario: string[];
  incluso: string[];
  naoIncluso: string[];
  duracao: string;
  horarioSaida: string;
  tipo: "Privativo" | "Compartilhado";
  exibirAvisoMare: boolean;
  fotos: {
    src: string;
    alt: string;
    original?: boolean;
    preservarPessoas?: boolean;
  }[];
  metaTitulo: string;
  metaDescricao: string;
}

export const AVISO_MARE =
  "Este passeio pode sofrer alterações de horário ou ser cancelado conforme a condição da maré. Confirme a disponibilidade antes de finalizar sua compra.";

export const PASSEIOS: Passeio[] = [
  {
    slug: "encantos-do-sul",
    nome: "Encantos do Sul de Buggy",
    categoria: "Buggy",
    preco: 579.99,
    precoPor: "buggy",
    destaque: true,
    status: "ativo",
    descricaoCurta:
      "O mais pedido de todos! Barra de Gramame, Coqueirinho, Tambaba, trilhas ecológicas e mirantes exclusivos.",
    descricao:
      "O mais pedido de todos! Buscamos vocês de buggy e nos dirigimos à cidade do Conde - PB, onde conhecemos as belezas de Barra de Gramame, Praia de Coqueirinho e Praia de Tambaba, passando e desbravando trilhas ecológicas e seus fabulosos mirantes exclusivos, fazendo fotos incríveis e SEM NENHUM CUSTO ADICIONAL. Também incluso em nosso roteiro, a visitação do primeiro Shopping Rural do Mundo e o Mirante do Castelo da Princesa. Venha você também, junto com seus amigos e familiares, desfrutar de um dia INCRÍVEL que ficará registrado em suas memórias para sempre.",
    itinerario: [
      "Saída do hotel em João Pessoa de buggy",
      "Barra de Gramame (encontro do rio com o mar)",
      "Praia de Coqueirinho e suas falésias coloridas",
      "Praia de Tambaba",
      "Trilhas ecológicas com mirantes exclusivos (paradas para fotos)",
      "Primeiro Shopping Rural do Mundo",
      "Mirante do Castelo da Princesa",
      "Retorno ao hotel",
    ],
    incluso: [
      "Buggy com até 4 pessoas",
      "Bugueiro credenciado pelo Ministério do Turismo",
      "Paradas para banho e fotos nos mirantes",
      "Busca e retorno ao hotel em João Pessoa",
    ],
    naoIncluso: ["Alimentação e bebidas", "Day use em estruturas de praia"],
    duracao: "Aproximadamente 8 horas",
    horarioSaida: "08h30 (a combinar)",
    tipo: "Privativo",
    exibirAvisoMare: false,
    fotos: [
      {
        src: fotoGrupoBuggys.url,
        alt: "Grupo com dois buggys diante das falésias coloridas — Encantos do Sul",
        original: true,
      },
      {
        src: fotoBuggyFalesias.url,
        alt: "Buggy amarelo na praia diante das falésias coloridas — Encantos do Sul",
        original: true,
      },
      {
        src: fotoFamiliaBuggys.url,
        alt: "Família com dois buggys em mirante do litoral sul — Encantos do Sul",
        original: true,
      },
      {
        src: fotoSulA.url,
        alt: "Casal com buggy amarelo em mirante com vista para a praia — Encantos do Sul",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoSulB.url,
        alt: "Família no buggy amarelo entre coqueirais — Encantos do Sul",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoSulC.url,
        alt: "Grupo com três buggys nas falésias do litoral sul — Encantos do Sul",
        original: true,
        preservarPessoas: true,
      },
    ],
    metaTitulo: "Encantos do Sul de Buggy em João Pessoa | João Pessoa Buggy",
    metaDescricao:
      "Passeio de buggy mais pedido de João Pessoa: Barra de Gramame, Coqueirinho, Tambaba, trilhas ecológicas e mirantes exclusivos. Reserve pelo WhatsApp.",
  },
  {
    slug: "encantos-do-sul-2",
    nome: "Encantos do Sul II",
    categoria: "Buggy",
    preco: 579.99,
    precoPor: "buggy",
    destaque: false,
    status: "ativo",
    descricaoCurta:
      "Aqui quem manda e escolhe é VOCÊ. Tabatinga, Mirante das Vossorocas, Praia do Amor e Praia Bela.",
    descricao:
      "Aqui quem manda e escolhe é VOCÊ. Nesse roteiro, podemos realizar de BUGGY ou Carro. Roteiro incrível, onde passaremos pela belíssima Praia de Tabatinga e contemplaremos o maravilhoso Mirante das Vossorocas, uma vista incrível de tirar o fôlego. Após, visitaremos a Praia do Amor e seguimos para a belíssima Praia Bela, que seu nome fala por si só. Redes em meio à água para que você relaxe ao máximo — um ambiente selecionado e diferenciado, feito exclusivamente para você.",
    itinerario: [
      "Saída de João Pessoa (buggy ou carro)",
      "Praia de Tabatinga",
      "Mirante das Vossorocas",
      "Praia do Amor",
      "Praia Bela — redes dentro da água para relaxar",
      "Retorno ao hotel",
    ],
    incluso: [
      "Transporte em buggy ou carro",
      "Guia/motorista credenciado",
      "Paradas para fotos e banho",
    ],
    naoIncluso: ["Alimentação e bebidas", "Day use em estruturas de praia"],
    duracao: "Aproximadamente 7 horas",
    horarioSaida: "09h00 (a combinar)",
    tipo: "Privativo",
    exibirAvisoMare: false,
    fotos: [
      {
        src: fotoSul2c.url,
        alt: "Casal na jangada 'Bem Vindo a Praia Bela' em Pitimbu — Encantos do Sul II",
        original: true,
      },
      {
        src: fotoSul2a.url,
        alt: "Jangada e barracas coloridas na Praia Bela — Encantos do Sul II",
        original: true,
      },
      {
        src: fotoSul2b.url,
        alt: "Vista aérea da Praia Bela com barracas à beira-mar — Encantos do Sul II",
        original: true,
      },
      {
        src: fotoSul2d.url,
        alt: "Praia Bela com mar turquesa e encontro com o rio — Encantos do Sul II",
        original: true,
      },
      {
        src: fotoSul2e.url,
        alt: "Família em mirante com vista para o litoral sul — Encantos do Sul II",
        original: true,
        preservarPessoas: true,
      },
    ],
    metaTitulo: "Encantos do Sul II — Tabatinga, Praia do Amor e Praia Bela",
    metaDescricao:
      "Roteiro de buggy ou carro pelo litoral sul da Paraíba: Tabatinga, Mirante das Vossorocas, Praia do Amor e Praia Bela com redes na água.",
  },
  {
    slug: "norte-extremo",
    nome: "Norte Extremo de Buggy",
    categoria: "Buggy",
    preco: 579.99,
    precoPor: "buggy",
    destaque: true,
    status: "ativo",
    descricaoCurta:
      "Três roteiros em um só: city tour urbano, travessia de balsa no Rio Paraíba, Caminho de Moisés, Barra do Miriri e Santuário de 1591.",
    descricao:
      "Esse sim é aquele passeio em que juntamos até 3 roteiros em um só! Iniciamos nosso Litoral Norte com um city urbano nas praias de João Pessoa/Cabedelo, com passagem pela divisa dos municípios onde visualizamos o local de desova da tartaruga marinha na Praia de Intermares. Seguimos direto para a balsa (ferry boat), onde realizamos a travessia no Rio Paraíba avistando o Porto de Cabedelo. Atracando em Lucena - PB, na Praia de Costinha, iniciamos o passeio pela beira-mar até nossa primeira parada para banho e fotos na Pontinha de Lucena, mais conhecida como CAMINHO DE MOISÉS — uma das vistas mais lindas da Paraíba, com águas mornas e cristalinas. Depois seguimos para a Barra do Miriri, onde encontramos DOIS RIOS: Camaçari e Miriri. Continuando, seguimos para a Fazenda dos Coqueirais, um cenário perfeito para fotos e vídeos e, após isso tudo, uma visita ao Santuário Nossa Senhora da Guia (1591), o único no estilo Barroco Tropical. Opção de finalizar o passeio no entardecer da Praia do Jacaré ao som do Bolero de Ravel do Jurandir do Sax (consultar valores) — ou deixamos vocês no entardecer do Jacaré SEM CUSTO ALGUM, com retorno ao hotel por conta do cliente.",
    itinerario: [
      "City tour pelas praias de João Pessoa e Cabedelo",
      "Praia de Intermares (área de desova de tartarugas marinhas)",
      "Travessia de ferry boat no Rio Paraíba com vista do Porto de Cabedelo",
      "Praia de Costinha (Lucena)",
      "Pontinha de Lucena — Caminho de Moisés (banho e fotos)",
      "Barra do Miriri — encontro dos rios Camaçari e Miriri",
      "Fazenda dos Coqueirais",
      "Santuário Nossa Senhora da Guia (1591) — Barroco Tropical",
      "Opcional: entardecer na Praia do Jacaré com o Bolero de Ravel",
    ],
    incluso: [
      "Buggy com até 4 pessoas",
      "Bugueiro credenciado",
      "Travessia de balsa (veículo incluso)",
      "Paradas para banho e fotos",
    ],
    naoIncluso: [
      "Alimentação e bebidas",
      "Entrada em atrações pagas",
      "Retorno do Jacaré na opção sem custo",
    ],
    duracao: "Aproximadamente 9 horas",
    horarioSaida: "08h00 (a combinar)",
    tipo: "Privativo",
    exibirAvisoMare: false,
    fotos: [
      {
        src: fotoNorte2.url,
        alt: "Turistas com buggys amarelo e azul nas falésias do litoral norte da Paraíba — roteiro Norte Extremo",
        original: true,
      },
      {
        src: fotoNorte5.url,
        alt: "Casal no buggy amarelo na Fazenda dos Coqueirais — roteiro Norte Extremo",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoNorte4.url,
        alt: "Caminho de areia entre coqueirais no litoral norte — roteiro Norte Extremo",
        original: true,
      },
    ],
    metaTitulo: "Norte Extremo de Buggy — Lucena, Miriri e Caminho de Moisés",
    metaDescricao:
      "Roteiro de buggy pelo litoral norte de João Pessoa: ferry boat, Caminho de Moisés em Lucena, Barra do Miriri e o Santuário de 1591. Reserve já.",
  },
  {
    slug: "expedicao-pb-rn",
    nome: "Expedição PB | RN (Buggy ou 4x4)",
    categoria: "Buggy",
    preco: 1200,
    precoPor: "buggy",
    destaque: true,
    status: "ativo",
    descricaoCurta:
      "Dois estados, uma só aventura! Divisa PB/RN no Rio Guajú, espetinho de lagosta, Sagi, Santuário das Tartarugas e Baía Formosa.",
    descricao:
      "Uma verdadeira expedição pelo litoral, saindo de João Pessoa rumo ao Rio Grande do Norte. Um dos momentos marcantes é a chegada à divisa entre os dois estados, no Rio Guajú — cenário perfeito para registrar a aventura. Às margens do rio, parada especial para conhecer e saborear o famoso espetinho de lagosta da Dona Moça, em um cenário paradisíaco. Seguimos pela belíssima Praia de Sagi, com paisagens naturais e clima de litoral preservado, com parada especial no Santuário das Tartarugas Marinhas para contemplação, fotos e vídeos. A aventura continua até Baía Formosa, uma das regiões mais bonitas do litoral potiguar. DUAS FORMAS DE VIVER ESSA EXPERIÊNCIA: de BUGGY (expedição com mínimo de 2 buggys) ou de 4X4 (possibilidade de realizar em um único veículo).",
    itinerario: [
      "Saída de João Pessoa - PB",
      "Divisa Paraíba × Rio Grande do Norte — Rio Guajú",
      "Parada no Espetinho de Dona Moça (lagosta às margens do Rio Guajú)",
      "Praia de Sagi - RN",
      "Santuário das Tartarugas Marinhas",
      "Baía Formosa - RN",
      "Retorno a João Pessoa",
    ],
    incluso: [
      "Buggy (mínimo 2 buggys) ou veículo 4x4 exclusivo",
      "Guia/bugeiro credenciado",
      "Paradas para fotos, banho e contemplação",
    ],
    naoIncluso: ["Alimentação e bebidas (incluindo o espetinho de lagosta)"],
    duracao: "Dia inteiro (aprox. 10 horas)",
    horarioSaida: "07h30 (a combinar)",
    tipo: "Privativo",
    exibirAvisoMare: false,
    fotos: [
      {
        src: fotoExp3.url,
        alt: "Grupo comemorando em cima de dois buggys na praia — Expedição PB RN",
        original: true,
      },
      {
        src: fotoExp7.url,
        alt: "Buggys no Santuário das Tartarugas em Sagi — Expedição PB RN",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoExp5.url,
        alt: "Buggys no farol em Baía Formosa — Expedição PB RN",
        original: true,
      },
      {
        src: fotoExp6.url,
        alt: "Grupo com buggys no Santuário das Tartarugas Marinhas — Expedição PB RN",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoExp2.url,
        alt: "Família nas dunas com o mar ao fundo — Expedição PB RN",
        original: true,
        preservarPessoas: true,
      },
      {
        src: fotoExp1.url,
        alt: "Buggys atravessando o rio de balsa — Expedição PB RN",
        original: true,
      },
      {
        src: fotoExp9.url,
        alt: "Caminhonete 4x4 na areia — opção 4x4 da Expedição PB RN",
        original: true,
      },
    ],
    metaTitulo: "Expedição PB | RN de Buggy ou 4x4 — Sagi e Baía Formosa",
    metaDescricao:
      "Expedição de buggy ou 4x4 de João Pessoa ao Rio Grande do Norte: Rio Guajú, espetinho de lagosta, Sagi, tartarugas marinhas e Baía Formosa.",
  },
  {
    slug: "catamara-picaozinho",
    nome: "Catamarã às Piscinas Naturais de Picãozinho",
    categoria: "Catamarã",
    preco: 90,
    precoPor: "pessoa",
    destaque: false,
    status: "ativo",
    descricaoCurta:
      "Navegue até as piscinas naturais de Picãozinho, em frente à Praia de Tambaú, e mergulhe em águas cristalinas.",
    descricao:
      "Passeio de catamarã saindo de João Pessoa em direção às piscinas naturais de Picãozinho, um banco de corais em frente à Praia de Tambaú. Na maré baixa, as piscinas se formam com águas mornas e cristalinas, perfeitas para mergulho com snorkel entre peixinhos coloridos. Uma experiência imperdível para quem visita o ponto mais oriental das Américas.",
    itinerario: [
      "Embarque no catamarã na orla de Tambaú",
      "Navegação até as piscinas naturais de Picãozinho",
      "Parada para mergulho com snorkel (máscara disponível)",
      "Retorno à orla de Tambaú",
    ],
    incluso: ["Passeio de catamarã", "Colete salva-vidas", "Máscara de mergulho"],
    naoIncluso: ["Alimentação e bebidas", "Transporte até o embarque"],
    duracao: "Aproximadamente 3 horas",
    horarioSaida: "Conforme tábua de marés",
    tipo: "Compartilhado",
    exibirAvisoMare: true,
    fotos: [
      {
        src: fotoOrlaJoaoPessoa.url,
        alt: "Vista aérea da orla de João Pessoa, região de saída para Picãozinho",
        original: true,
      },
    ],
    metaTitulo: "Catamarã às Piscinas Naturais de Picãozinho | João Pessoa",
    metaDescricao:
      "Passeio de catamarã às piscinas naturais de Picãozinho em João Pessoa. Mergulhe em águas cristalinas na maré baixa. Confirme a maré antes de reservar.",
  },
];

export function getPasseio(slug: string) {
  return PASSEIOS.find((p) => p.slug === slug);
}

export const CATEGORIAS: CategoriaPasseio[] = [
  "Buggy",
  "Catamarã",
  "Barco",
  "Transfer",
  "Pacote",
];

export { imgHero };
