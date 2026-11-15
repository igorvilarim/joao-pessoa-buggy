import imgGuiaBuggy from "@/assets/fotos-reais/grupo-buggys-falesias.jpg.asset.json";
import imgNorteOuSul from "@/assets/norte2_9_11zon.webp.asset.json";
import imgMelhorEpoca from "@/assets/fotos-reais/orla-joao-pessoa-aerea.png.asset.json";
import imgChecklist from "@/assets/fotos-reais/buggy-amarelo-praia.jpg.asset.json";
import imgPiscinasNaturais from "@/assets/fotos-reais/praia-piscinas-naturais.png.asset.json";
import imgPrivativoGrupo from "@/assets/fotos-reais/casal-buggy-praia.jpg.asset.json";
import imgRoteiroUmDia from "@/assets/fotos-reais/familia-buggys-mirante.webp.asset.json";
import imgLitoralSul from "@/assets/fotos-reais/buggy-falesias-coloridas.jpg.asset.json";
import imgAgenciaConfiavel from "@/assets/fotos-reais/buggy-coqueiros-vertical.jpg.asset.json";

const imgAreiaVermelha = imgPiscinasNaturais;

export interface BlogPost {
  slug: string;
  titulo: string;
  metaTitulo: string;
  metaDescricao: string;
  categoria: string;
  imagem: string;
  imagemAlt: string;
  preservarPessoas?: boolean;
  criadoEm: string;
  conteudo: string[]; // parágrafos; linhas iniciadas com "## " viram H2
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "passeio-de-buggy-em-joao-pessoa-guia-completo",
    titulo: "Passeio de Buggy em João Pessoa: guia completo para sua primeira vez",
    metaTitulo: "Passeio de Buggy em João Pessoa: guia completo | João Pessoa Buggy",
    metaDescricao:
      "Tudo o que você precisa saber antes do seu primeiro passeio de buggy em João Pessoa: roteiros, preços, o que levar e dicas de quem vive o litoral paraibano.",
    categoria: "Guias",
    imagem: imgGuiaBuggy.url,
    imagemAlt: "Grupo com buggys diante das falésias — guia do primeiro passeio de buggy",
    criadoEm: "2026-01-15",
    conteudo: [
      "Se é a sua primeira vez em João Pessoa, o passeio de buggy provavelmente já está na sua lista — e com razão. É a forma mais divertida e completa de conhecer o litoral da Paraíba, com o vento no rosto, paradas em praias paradisíacas e aquele contato direto com a paisagem que nenhum carro fechado oferece.",
      "## Como funciona o passeio de buggy",
      "Os passeios são privativos: você reserva o buggy inteiro, que comporta até 4 pessoas, com um bugueiro credenciado pelo Ministério do Turismo conduzindo. A saída é feita diretamente do seu hotel em João Pessoa, em horário combinado, e o roteiro dura o dia inteiro — em média de 7 a 9 horas, dependendo do destino.",
      "O bugueiro não é só motorista: ele é seu guia, fotógrafo e anfitrião. Conhece cada atalho, cada mirante escondido e os melhores horários para evitar aglomerações nas praias mais famosas.",
      "## Quanto custa",
      "O valor é cobrado por buggy, não por pessoa. Dividindo entre 3 ou 4 pessoas, o passeio sai por um valor muito acessível por cabeça — e inclui a busca no hotel, o dia inteiro de roteiro e as paradas para banho e fotos. Alimentação e day use em estruturas de praia ficam por conta do passageiro.",
      "## Litoral sul ou litoral norte?",
      "Essa é a dúvida clássica. O litoral sul (Barra de Gramame, Coqueirinho, Tambaba) é o mais famoso, com falésias coloridas e trilhas ecológicas. O litoral norte (Lucena, Caminho de Moisés, Barra do Miriri) é mais rústico e aventureiro, com travessia de ferry boat. Se tiver dois dias, faça os dois — são experiências completamente diferentes.",
      "## O que levar",
      "Protetor solar (reaplique a cada parada), chapéu ou boné, óculos escuros, roupa de banho, uma muda de roupa leve, dinheiro ou cartão para o almoço e água. Evite objetos soltos que possam voar com o vento. E o mais importante: vá com o celular carregado, porque as fotos serão muitas.",
      "## Dica final",
      "Reserve com antecedência, especialmente em feriados e alta temporada (dezembro a fevereiro). Fale diretamente pelo WhatsApp para montar o roteiro ideal para o seu grupo — passeios privativos permitem ajustes de horário e ritmo.",
    ],
  },
  {
    slug: "norte-ou-sul-qual-roteiro-de-buggy-escolher",
    titulo: "Norte ou Sul? Qual roteiro de buggy em João Pessoa escolher",
    metaTitulo: "Litoral Norte ou Sul de buggy em João Pessoa? | João Pessoa Buggy",
    metaDescricao:
      "Comparativo completo entre os roteiros de buggy do litoral norte e do litoral sul da Paraíba: praias, atrações, perfil de cada passeio e dicas para escolher.",
    categoria: "Roteiros",
    imagem: imgNorteOuSul.url,
    imagemAlt: "Turistas com buggys no litoral paraibano — comparativo norte ou sul",
    criadoEm: "2026-01-22",
    conteudo: [
      "É a pergunta que todo viajante faz antes de reservar: litoral norte ou litoral sul? A boa notícia é que não existe resposta errada — os dois lados do litoral paraibano são deslumbrantes. Mas eles têm personalidades bem diferentes, e entender isso ajuda a escolher o roteiro perfeito para o seu grupo.",
      "## Litoral Sul: o clássico das falésias",
      "O roteiro sul, em direção à cidade do Conde, é o mais famoso — e o mais pedido. É lá que ficam a Barra de Gramame (encontro do rio com o mar), a Praia de Coqueirinho com suas falésias coloridas que parecem pintadas à mão e a Praia de Tambaba, a primeira praia de naturismo oficial do Nordeste (a área de banho comum fica separada).",
      "O passeio sul inclui trilhas ecológicas com mirantes exclusivos — aqueles pontos de vista elevados onde o bugueiro para para as fotos mais bonitas do dia. Também passa pelo primeiro Shopping Rural do Mundo e pelo Mirante do Castelo da Princesa.",
      "## Litoral Norte: a aventura rústica",
      "O norte é para quem quer aventura com gosto de expedição. O roteiro começa com um city tour pelas praias urbanas, cruza o Rio Paraíba de ferry boat (com vista do Porto de Cabedelo) e desembarca em Lucena. O grande momento é a Pontinha de Lucena, o famoso Caminho de Moisés: um banco de areia que surge na maré baixa, com águas mornas e cristalinas dos dois lados.",
      "Depois vêm a Barra do Miriri, o encontro de dois rios, a Fazenda dos Coqueirais e o Santuário Nossa Senhora da Guia, de 1591, único no estilo Barroco Tropical. De quebra, é possível terminar o dia no entardecer da Praia do Jacaré, ao som do Bolero de Ravel.",
      "## E se não der para escolher?",
      "Se você tem dois dias disponíveis, faça os dois — é a recomendação de quase todo mundo que conhece. Se tiver apenas um dia: famílias com crianças pequenas e quem quer o roteiro mais 'cartão-postal' tendem a preferir o sul. Casais aventureiros e grupos de amigos geralmente se apaixonam pelo norte. E para os que querem ir além, existe ainda a Expedição PB-RN, que cruza a divisa dos estados até Baía Formosa.",
      "Na dúvida, chame no WhatsApp: a gente monta a recomendação de acordo com o perfil do seu grupo, a maré e a previsão do tempo.",
    ],
  },
  {
    slug: "melhor-epoca-passeio-de-buggy-paraiba",
    titulo: "Melhor época para fazer passeio de buggy no litoral da Paraíba",
    metaTitulo: "Melhor época para passeio de buggy na Paraíba | João Pessoa Buggy",
    metaDescricao:
      "Sol o ano inteiro? Entenda o clima de João Pessoa, a influência das marés e a melhor época para fazer passeio de buggy no litoral da Paraíba.",
    categoria: "Dicas",
    imagem: imgMelhorEpoca.url,
    imagemAlt: "Falésias e mar azul no litoral da Paraíba — melhor época para passeio de buggy",
    criadoEm: "2026-02-01",
    conteudo: [
      "Uma das maiores vantagens de João Pessoa é o clima: a cidade tem sol praticamente o ano inteiro, com temperaturas médias entre 25°C e 30°C. Isso significa que, na prática, qualquer época é boa para andar de buggy. Mas alguns detalhes fazem diferença na experiência.",
      "## A estação mais seca: setembro a fevereiro",
      "De setembro a fevereiro o volume de chuvas cai bastante e o céu fica naquele azul intenso típico das fotos. É o período mais procurado, especialmente de dezembro a fevereiro (alta temporada e férias escolares). Se você vem nessa época, reserve o passeio com antecedência.",
      "## Março a agosto: mais chuva, menos gente",
      "O outono e o inverno trazem pancadas de chuva mais frequentes, geralmente rápidas e no fim da tarde. A vantagem: praias mais vazias, vegetação mais verde e preços de hospedagem mais baixos. Muitos passeios acontecem normalmente nesse período — o bugueiro acompanha a previsão e ajusta horários quando necessário.",
      "## A maré importa (e muito)",
      "Mais do que o mês do ano, o que define a experiência em alguns pontos é a tábua de marés. O Caminho de Moisés, em Lucena, só aparece na maré baixa. As piscinas naturais de Picãozinho e da Areia Vermelha também dependem da maré baixa para ficarem cristalinas. Por isso, os melhores roteiros são montados de acordo com a tábua de marés do dia — outro motivo para reservar com quem conhece o litoral de verdade.",
      "## Resumindo",
      "Melhor clima: setembro a fevereiro. Melhor custo-benefício e praias vazias: abril a agosto. Em qualquer época: confira a tábua de marés e converse com a gente antes de fechar a data. O litoral paraibano está lindo o ano inteiro — o que muda é o tipo de experiência que você quer viver.",
    ],
  },
  {
    slug: "o-que-levar-em-um-passeio-de-buggy-checklist",
    titulo: "O que levar em um passeio de buggy: checklist essencial",
    metaTitulo: "Checklist: o que levar no passeio de buggy | João Pessoa Buggy",
    metaDescricao:
      "Checklist completo do que levar (e o que deixar no hotel) em um passeio de buggy pelo litoral de João Pessoa: protetor, roupas, documentos e acessórios.",
    categoria: "Dicas",
    imagem: imgChecklist.url,
    imagemAlt: "Buggy na areia da praia — checklist do que levar no passeio de buggy",
    criadoEm: "2026-02-10",
    conteudo: [
      "Um passeio de buggy é um dia inteiro de sol, vento, mar e areia. Quem vai preparado aproveita muito mais — e evita aqueles perrengues bobos como celular descarregado na hora da melhor foto. Aqui vai o checklist que a gente recomenda para todos os nossos passageiros.",
      "## Proteção solar (o item mais importante)",
      "No buggy você fica exposto ao sol e ao vento o dia todo, e a brisa engana: queima sem você perceber. Leve protetor solar fator 50 ou mais e reaplique a cada parada para banho. Chapéu ou boné com aba, óculos escuros com alça (para não voarem) e, para quem tem pele sensível, uma camiseta de lycra com proteção UV fazem toda a diferença.",
      "## Roupas e calçados",
      "Vá já de roupa de banho por baixo de roupas leves — shorts, camiseta, vestido fresco. Leve uma muda de roupa seca para a volta. Nos pés, chinelo ou papete: tênis vai encher de areia e água nas travessias de rio. Evite saídas de praia longas e esvoaçantes, que viram um estresse com o vento.",
      "## Dinheiro e documentos",
      "Almoço, bebidas, day use em estruturas de praia e artesanato ficam por conta do passageiro. Leve dinheiro em espécie (muitos quiosques de praia não aceitam cartão ou ficam sem sinal) e um documento com foto. Não é necessário levar passaporte ou carteira completa — quanto menos, melhor.",
      "## Tecnologia",
      "Celular carregado e, se tiver, um power bank — o dia é longo e as fotos são muitas. Capinha à prova d'água ou um saquinho zip protege o aparelho na hora do banho e nas travessias. Quem tem câmera GoPro ou similar: esse é o passeio perfeito para usá-la.",
      "## O que deixar no hotel",
      "Joias, relógios de valor, mochilas grandes, toalhas pesadas (leve uma canga, que seca rápido) e qualquer coisa que você ficaria triste de ver voando do buggy em movimento. Objetos soltos como bonés sem ajuste e óculos sem alça são os campeões de perda.",
      "## Resumo em uma frase",
      "Protetor, canga, dinheiro em espécie, celular protegido e roupa de banho. O resto — guia, rota, paradas secretas e as melhores fotos — fica com a gente.",
    ],
  },
  {
    slug: "piscinas-naturais-perto-de-joao-pessoa",
    titulo: "Piscinas naturais perto de João Pessoa: como e quando visitar",
    metaTitulo: "Piscinas naturais em João Pessoa: como visitar | João Pessoa Buggy",
    metaDescricao:
      "Picãozinho, Areia Vermelha e Seixas: conheça as piscinas naturais de João Pessoa, entenda a tábua de marés e saiba como visitar cada uma.",
    categoria: "Passeios",
    imagem: imgPiscinasNaturais.url,
    imagemAlt: "Piscinas naturais com água cristalina em João Pessoa — Picãozinho e Areia Vermelha",
    criadoEm: "2026-02-18",
    conteudo: [
      "As piscinas naturais são um dos maiores tesouros do litoral paraibano: bancos de corais e areia que, na maré baixa, formam piscinas rasas de água morna e transparente no meio do mar. Nadar ali, cercado de peixinhos coloridos, é uma experiência que marca qualquer viagem a João Pessoa.",
      "## Picãozinho: a mais famosa",
      "Em frente à Praia de Tambaú, a poucos minutos de navegação da orla, Picãozinho é a piscina natural mais conhecida da cidade. O acesso é feito de catamarã, com parada para mergulho com snorkel (a máscara geralmente está inclusa). É o passeio ideal para quem tem pouco tempo: dura cerca de 3 horas.",
      "## Areia Vermelha: a ilha que surge do mar",
      "Em Cabedelo, na foz do Rio Paraíba, a Ilha de Areia Vermelha é um banco de areia avermelhada que surge na maré baixa e vira um point de barcos e catamarãs. É menos 'piscina' e mais 'banco de areia no meio do mar', com quiosques flutuantes e clima de festa nos fins de semana.",
      "## Seixas: o ponto mais oriental das Américas",
      "As piscinas do Seixas ficam perto do famoso ponto onde o Brasil amanhece primeiro. Menos movimentadas que Picãozinho, são ótimas para quem prefere um mergulho mais tranquilo.",
      "## A regra de ouro: a tábua de marés",
      "Piscina natural só existe na maré baixa — e quanto menor a maré (ideal: abaixo de 0.3), melhor a experiência. A tábua de marés muda a cada dia, seguindo o ciclo lunar. Antes de agendar, confira a maré do dia: não adianta chegar na maré alta, porque simplesmente não haverá piscina. Por isso, os horários desses passeios variam diariamente.",
      "Nos dias de lua cheia e lua nova, as marés ficam mais baixas (são as chamadas marés de sizígia) — são as janelas perfeitas. Na dúvida, chame no WhatsApp: a gente confere a tábua e te diz os melhores dias do seu período de viagem.",
      "## Dicas práticas",
      "Use protetor solar biodegradável para proteger os corais, não pise nos bancos de coral, leve água e snacks (nas piscinas não há estrutura, exceto em Areia Vermelha) e combine o passeio de barco com um roteiro de buggy para fechar o dia perfeito.",
    ],
  },
  {
    slug: "passeio-de-buggy-privativo-ou-em-grupo",
    titulo: "Passeio de buggy privativo x em grupo: vantagens de cada opção",
    metaTitulo: "Buggy privativo ou em grupo? Vantagens | João Pessoa Buggy",
    metaDescricao:
      "Vale mais a pena um passeio de buggy privativo ou compartilhado em grupo? Compare vantagens, preços e perfis de cada opção em João Pessoa.",
    categoria: "Dicas",
    imagem: imgPrivativoGrupo.url,
    imagemAlt: "Buggy na praia em João Pessoa — passeio privativo ou em grupo",
    criadoEm: "2026-02-25",
    conteudo: [
      "Na hora de reservar o passeio de buggy, surge a dúvida: fechar um buggy privativo ou entrar em um passeio compartilhado? As duas modalidades existem e atendem perfis diferentes. Entenda as vantagens de cada uma antes de decidir.",
      "## Buggy privativo: o passeio no seu ritmo",
      "No formato privativo, o buggy (que leva até 4 pessoas) é exclusivo do seu grupo, com bugueiro dedicado. Você decide o horário de saída, quanto tempo ficar em cada praia, onde almoçar e quais paradas fazer. Quer passar duas horas em Coqueirinho e pular outra parada? Sem problema. O roteiro é moldado ao seu grupo.",
      "É a melhor opção para famílias com crianças (ritmo próprio, paradas para lanche e soneca), casais em lua-de-mel, grupos de amigos e quem faz questão de fotos sem pressa nos mirantes. Fazendo as contas: dividido por 3 ou 4 pessoas, o valor por pessoa fica muito próximo do passeio em grupo — com muito mais liberdade.",
      "## Passeio em grupo: econômico e sociável",
      "No formato compartilhado, você compra o lugar em um passeio com roteiro e horários fixos, dividindo o veículo (ou a estrutura) com outros viajantes. A principal vantagem é o preço por pessoa, ideal para quem viaja sozinho ou em casal e não quer arcar com o buggy inteiro.",
      "As desvantagens são o ritmo do grupo (paradas com tempo contado), menos flexibilidade de roteiro e a necessidade de se encaixar no horário coletivo. Algumas experiências, como os catamarãs para as piscinas naturais, são naturalmente compartilhadas — e nem por isso deixam de ser incríveis.",
      "## Nossa recomendação",
      "Viajando em 3 ou mais pessoas? O privativo quase sempre vale mais a pena: o custo por pessoa fica parecido e a experiência é incomparavelmente melhor. Sozinho ou em casal com orçamento apertado? O compartilhado resolve bem. E se o grupo for grande (8, 12, 20 pessoas), dá para montar uma frota de buggys privativos saindo juntos — vira uma caravana memorável.",
      "Conte para a gente o tamanho do seu grupo e o perfil da viagem pelo WhatsApp que a gente monta a melhor opção, sem compromisso.",
    ],
  },
  {
    slug: "roteiro-de-um-dia-em-joao-pessoa",
    titulo: "Roteiro de um dia em João Pessoa: praias, buggy e pôr do sol",
    metaTitulo: "Roteiro de 1 dia em João Pessoa: buggy e pôr do sol",
    metaDescricao:
      "Só tem um dia em João Pessoa? Roteiro completo com passeio de buggy pelo litoral, almoço à beira-mar e o pôr do sol mais famoso do Brasil no Jacaré.",
    categoria: "Roteiros",
    imagem: imgRoteiroUmDia.url,
    imagemAlt: "Família com buggys em mirante do litoral — roteiro de um dia em João Pessoa",
    criadoEm: "2026-03-05",
    conteudo: [
      "Tem apenas um dia em João Pessoa? Respire fundo: dá para viver uma amostra perfeita do melhor da Paraíba em 24 horas. O segredo é começar cedo e deixar a logística com quem conhece o caminho. Aqui está o roteiro que a gente monta para quem tem um dia só.",
      "## 8h — Saída para o passeio de buggy",
      "O dia começa com a busca no seu hotel. Para um dia único, recomendamos o roteiro do litoral sul: Barra de Gramame, onde o rio encontra o mar, a Praia de Coqueirinho com suas falésias coloridas (a foto obrigatória da viagem) e a Praia de Tambaba. Pelo caminho, trilhas ecológicas e mirantes exclusivos com paradas para fotos sem custo adicional.",
      "## 12h30 — Almoço à beira-mar",
      "Nada de restaurante de shopping: o almoço é em quiosque na areia, com peixe fresco, moqueca e aquela água de coco gelada. Coqueirinho tem ótimas opções de estrutura de praia com redes e espreguiçadeiras para recarregar as energias depois de comer.",
      "## 15h — Mais praias ou compras",
      "Depois do almoço, dá para aproveitar mais uma parada para banho ou conhecer o primeiro Shopping Rural do Mundo, com artesanato local, cachaças e doces típicos. O bugueiro adapta o ritmo ao seu grupo.",
      "## 17h — O grande final: pôr do sol no Jacaré",
      "O dia termina no lugar mais famoso do entardecer paraibano: a Praia do Jacaré, às margens do Rio Paraíba. Enquanto o sol cai no rio, o saxofonista Jurandir do Sax navega em uma canoa tocando o Bolero de Ravel — uma cena que emociona até quem já viu dezenas de vezes. Chegue cedo para garantir um bom lugar nos bares da orla.",
      "## 19h — Jantar na orla de Tambaú",
      "Para fechar, a orla de Tambaú concentra restaurantes para todos os bolsos, além da feirinha de artesanato para as lembranças. Se ainda tiver energia, uma caminhada pelo calçadão coroa o dia.",
      "## Dica de ouro",
      "Com apenas um dia, cada hora conta. Reservar o buggy com antecedência e alinhar os horários (incluindo a entrega no Jacaré no fim da tarde) faz toda a diferença. Fale com a gente que a gente encaixa tudo.",
    ],
  },
  {
    slug: "ilha-de-areia-vermelha-passeio-joao-pessoa",
    titulo: "Ilha de Areia Vermelha: tudo sobre o passeio saindo de João Pessoa",
    metaTitulo: "Ilha de Areia Vermelha: guia do passeio | João Pessoa Buggy",
    metaDescricao:
      "Guia completo da Ilha de Areia Vermelha em Cabedelo: como chegar, melhor maré, o que fazer, valores e como combinar com passeio de buggy pelo litoral norte.",
    categoria: "Passeios",
    imagem: imgAreiaVermelha.url,
    imagemAlt: "Praia de areia e mar no litoral de João Pessoa — passeio à Ilha de Areia Vermelha",
    criadoEm: "2026-03-12",
    conteudo: [
      "Imagine uma ilha de areia avermelhada que surge no meio do mar por algumas horas e depois desaparece sob a maré. Parece cenário de filme, mas é só mais um dia na Ilha de Areia Vermelha, em Cabedelo, vizinha de João Pessoa. Um dos passeios mais queridos de quem visita a Paraíba.",
      "## O que é a Areia Vermelha",
      "É um banco de areia localizado na foz do Rio Paraíba, entre o continente e o Oceano Atlântico. Na maré baixa, a areia emerge formando uma ilha de tom avermelhado (daí o nome), cercada por águas rasas, mornas e transparentes. Quando a maré sobe, a ilha volta a desaparecer — por isso o passeio depende totalmente da tábua de marés.",
      "## Como é o passeio",
      "O acesso é feito de barco ou catamarã, saindo de píeres na orla de Cabedelo e de João Pessoa, em travessias curtas de 15 a 25 minutos. Na ilha, a estrutura é rústica e animada: barraquinhas flutuantes e barracas improvisadas servem bebidas, petiscos e o famoso espetinho de peixe. Nos fins de semana, o clima é de festa; em dias de semana, de paz absoluta.",
      "## Quando ir",
      "A regra é uma só: maré baixa, de preferência abaixo de 0.3 na tábua. As melhores condições acontecem nos dias próximos à lua cheia e à lua nova. O passeio dura em média de 3 a 4 horas, seguindo a janela da maré. Consulte a tábua antes de agendar — ou pergunte para a gente, que acompanhamos isso diariamente.",
      "## Como combinar com o buggy",
      "A Areia Vermelha fica no litoral norte, e o passeio combina perfeitamente com o roteiro de buggy pela região: dá para fazer o Norte Extremo (Caminho de Moisés, Barra do Miriri, Santuário de 1591) e encaixar a Areia Vermelha na janela de maré do dia, terminando com o pôr do sol no Jacaré. É o dia mais completo que existe no litoral norte.",
      "## O que levar",
      "Dinheiro em espécie (não espere sinal de cartão na ilha), protetor solar, canga, roupa de banho e celular em capinha à prova d'água. Não há estrutura fixa de banheiros nem sombra garantida — a ilha é natureza pura. E leve a câmera: o contraste da areia vermelha com o mar verde rende fotos inesquecíveis.",
    ],
  },
  {
    slug: "praias-do-litoral-sul-da-paraiba-dicas",
    titulo: "Praias do litoral sul da Paraíba: dicas de quem já viajou de buggy",
    metaTitulo: "Praias do litoral sul da Paraíba: dicas | João Pessoa Buggy",
    metaDescricao:
      "Barra de Gramame, Coqueirinho, Tambaba, Tabatinga e Praia Bela: guia das praias do litoral sul da Paraíba com dicas de quem roda a região de buggy todo dia.",
    categoria: "Roteiros",
    imagem: imgLitoralSul.url,
    imagemAlt: "Buggy diante das falésias coloridas — praias do litoral sul da Paraíba",
    criadoEm: "2026-03-20",
    conteudo: [
      "O litoral sul da Paraíba, na região da cidade do Conde, concentra algumas das praias mais bonitas do Nordeste. A gente roda essa região de buggy todos os dias e reuniu aqui as dicas que só quem vive o lugar conhece.",
      "## Barra de Gramame",
      "É a primeira parada clássica do roteiro sul: o encontro do Rio Gramame com o mar forma uma linguagem de águas doces e salgadas onde dá para escolher a temperatura do banho. A faixa de areia entre o rio e o mar é perfeita para fotos. Dica: na maré baixa, formam-se piscinas rasas ótimas para crianças.",
      "## Coqueirinho",
      "A estrela do litoral sul. As falésias coloridas em tons de vermelho, amarelo e laranja criam um dos cenários mais fotografados da Paraíba. A praia tem boa estrutura de quiosques para almoço. Dica de ouro: os mirantes no alto das falésias (acessados pelas trilhas ecológicas de buggy) rendem a melhor vista — e estão inclusos no roteiro, sem custo adicional.",
      "## Tambaba",
      "A primeira praia de naturismo oficial do Nordeste divide-se em duas áreas: a área de banho comum (com vestimenta) e a área naturista, separadas por passarela e fiscalização. Mesmo para quem não visita a área naturista, o visual da praia, com falésias e vegetação preservada, vale a parada. O acesso pela trilha de buggy é parte da aventura.",
      "## Tabatinga",
      "Mais ao sul, Tabatinga é famosa pelas falésias e pelas piscinas naturais que se formam nos arrecifes na maré baixa. É vizinha do Mirante das Vossorocas, uma das vistas mais impressionantes do litoral — daquelas de tirar o fôlego, no alto de um penhasco sobre o mar.",
      "## Praia do Amor e Praia Bela",
      "A Praia do Amor tem formato de coração visto de cima (outra foto clássica) e a Praia Bela faz jus ao nome: mar calmo, coqueirais e estruturas com redes dentro da água, feitas para você relaxar sem pressa de ir embora.",
      "## Dicas finais",
      "Vá de buggy: o acesso às trilhas e mirantes não é possível de carro comum. Comece cedo (saída entre 8h e 9h) para aproveitar todas as paradas. Leve dinheiro em espécie para os quiosques. E confie no bugueiro: as melhores fotos do dia costumam ser nos lugares que ele sugere e que não estão em nenhum guia.",
    ],
  },
  {
    slug: "como-escolher-agencia-de-turismo-confiavel-joao-pessoa",
    titulo: "Como escolher uma agência de turismo confiável em João Pessoa",
    metaTitulo: "Como escolher agência de turismo em João Pessoa | JP Buggy",
    metaDescricao:
      "Cadastur, avaliações no Google, CNPJ e sinais de alerta: aprenda a escolher uma agência de turismo confiável em João Pessoa antes de fechar seu passeio.",
    categoria: "Dicas",
    imagem: imgAgenciaConfiavel.url,
    imagemAlt: "Buggy entre coqueiros na Paraíba — como escolher agência de turismo confiável",
    preservarPessoas: true,
    criadoEm: "2026-04-02",
    conteudo: [
      "João Pessoa recebe cada vez mais turistas, e com isso cresce também o número de pessoas vendendo passeios — nem todas autorizadas. Fechar com a empresa errada pode significar desde um passeio mal organizado até problemas de segurança. Aqui está o que verificar antes de pagar qualquer sinal.",
      "## 1. Cadastur: o selo que realmente importa",
      "O Cadastur é o cadastro oficial de prestadores de serviços turísticos do Ministério do Turismo. Agências, guias e transportadoras turísticas legalizadas possuem número de Cadastur ativo — e você pode consultar gratuitamente no site do Ministério do Turismo. É a primeira pergunta a fazer: 'qual o Cadastur da empresa?'",
      "## 2. CNPJ e existência real",
      "Empresas sérias têm CNPJ ativo, endereço físico e canais de contato claros. Desconfie de perfis que só existem em uma rede social, sem site, sem endereço e sem dados empresariais. Um CNPJ consultado na Receita Federal mostra há quanto tempo a empresa existe.",
      "## 3. Avaliações no Google",
      "O Google Meu Negócio é o termômetro mais honesto do turismo: avaliações não podem ser apagadas pela empresa. Olhe não só a nota média, mas a quantidade de avaliações, as respostas da empresa e os comentários recentes. Uma empresa com dezenas de avaliações reais ao longo dos anos transmite muito mais segurança do que um perfil novo com nota perfeita e poucos comentários.",
      "## 4. Veículos e profissionais credenciados",
      "Buggys de turismo devem ter credenciamento municipal e os bugueiros, credencial de condutor de turismo. Isso garante manutenção em dia, seguro e profissionais que conhecem as normas de segurança — especialmente em trilhas e travessias de rio.",
      "## 5. Sinais de alerta",
      "Preço muito abaixo do mercado, exigência de pagamento integral antecipado para pessoa física, ausência de contrato ou confirmação por escrito e promessas vagas ('depois a gente vê o roteiro') são sinais clássicos de problema. Empresas sérias fecham o roteiro com clareza: o que está incluso, o que não está, horários e política de cancelamento.",
      "## Na prática",
      "A João Pessoa Buggy atua com CNPJ ativo, guias e carros credenciados pelo Ministério do Turismo e avaliações públicas no Google. Seja com a gente ou com qualquer outra empresa: verifique antes, pergunte sempre e feche com quem passa confiança. Boas férias!",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
