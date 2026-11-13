# Ciência de Dados — Embrapa Maranhão

# 🐝 Guia de Abelhas sem Ferrão do Maranhão

> Guia interativo das **63 espécies de meliponíneos** (Apidae: Meliponini) da lista de ocorrência no Maranhão. Cada espécie tem uma ficha com nomes conferidos no Catálogo Moure, dados biológicos, fotos, municípios com registro e orientações de manejo.


**Acesso:** [aluisiopereirae.github.io/guiapi](https://aluisiopereirae.github.io/guiapi/)

O guia faz parte do projeto **SACMA** (Sistema Automático de Classificação de Meliponíneos do Maranhão).

> Placas em forma de favo abrem a ficha de cada abelha. A tabela-guia compara as espécies em faixas de **Características** (âmbar) e **Manejo** (verde), no estilo dos guias de cultivares.

---

## Números

| | |
|---|---|
| Espécies na lista | **63** |
| Gêneros | **19** |
| Grupos no guia | **8** |
| Espécies com ficha catalográfica completa | **24** |
| Data da conferência no Catálogo Moure | 29/09/2026 |

## Funcionalidades

- **Página principal** com as espécies em 8 grupos (uruçus, tubunas, mirins, moças-brancas, borás, cupiras, arapuás e abelhas-limão), cada um com placas hexagonais e uma tabela comparativa.
- **Busca** por nome científico, nome popular ou grafia original da lista (ex.: *tiúba*, *jataí*, *Partamona*).
- **Filtros** por manejo (manejável, não manejável, ninho no chão) e por situação do registro no Maranhão (confirmado, identidade incerta, revisar).
- **Ficha de cada espécie** com:
  - nome válido, autoria, nomes populares e grafia original da lista;
  - nidificação, tamanho, tamanho da colônia e distância máxima de voo;
  - municípios maranhenses com registro no Catálogo Moure;
  - cultivos que a espécie poliniza (cartões A.B.E.L.H.A.);
  - biologia do ninho e da colônia;
  - galeria de fotos com ampliação (lightbox) e créditos;
  - dicas e alertas de manejo gerados a partir dos dados (abelhas-ladras, secreção cáustica, espécies defensivas, legislação).
- **Tabela de revisões** com as correções de grafia, autoria e ano, e os registros que o Catálogo Moure não confirma para o estado.
- **Painel de legislação** (CONAMA 496/2020 e Portaria ICMBio 665/2021).
- Tema claro e escuro automático, layout responsivo e navegação por teclado.

## Estrutura do projeto

```
.
├── index.html   # Interface: estilos, renderização e roteamento (JS puro, sem dependências)
├── data.js      # Dados das espécies (SP) e dos grupos (GROUPS)
├── imgs.js      # Catálogo de imagens por espécie (IMGS), com legenda e crédito
└── img/         # Fotos (.jpg) referenciadas em imgs.js
```

Não há etapa de build nem framework. A navegação usa a âncora da URL (`#melipona-fasciculata` abre uma ficha; `#melipona` volta para o grupo na página principal).

## Como executar

Clone o repositório e sirva a pasta com qualquer servidor estático:

```bash
git clone https://github.com/<usuario>/<repositorio>.git
cd <repositorio>
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador. Abrir o `index.html` direto do disco também costuma funcionar, mas um servidor local evita bloqueios do navegador.

As fontes (Barlow, Barlow Condensed e Source Serif 4) vêm do Google Fonts. Sem internet, o guia usa fontes do sistema.

### Publicar no GitHub Pages

Em **Settings → Pages**, escolha a branch `main` e a pasta raiz (`/`). O guia fica disponível em `https://<usuario>.github.io/<repositorio>/`.

## Formato dos dados

Cada espécie em `data.js` é um objeto no array `SP`:

```js
{
  n: 15,                       // número na lista original
  g: "Melipona",               // gênero
  e: "fasciculata",            // epíteto
  a: "Smith, 1854",            // autoria válida
  lista: "...",                // (opcional) grafia como aparece na lista, quando difere
  grp: "melipona",             // id do grupo em GROUPS
  pop: "Tiúba",                // nome popular da lista
  outros: ["uruçu-cinzenta"],  // outros nomes populares
  man: "Sim",                  // "Sim" | "Não" | "Chão"
  moure: 117852,               // id da espécie no Catálogo Moure
  ficha: { nid, ninho, col, asp, voo, tam },  // (opcional) dados das fichas catalográficas
  bio:   { nid, nota },                       // (opcional) resumo quando não há ficha
  pol: ["açaí", "tomate"],     // (opcional) cultivos polinizados
  ma: { s: "c", loc: [...], nota: "..." },   // registro no MA: c = confirmado, i = incerto, r = revisar
  dest: "Texto de destaque da ficha"
}
```

Entradas com `dup: true` marcam sinônimos que aparecem duplicados na lista (ex.: *Ptilotrigona heideri* = *P. lurida*). Entradas com `aff: true` marcam nomes listados como "aff." (afins).

As imagens ficam em `imgs.js`, indexadas por `genero-epiteto`:

```js
"melipona-fasciculata": [
  { f: "melipona-fasciculata-main.jpg", k: "Operária (vista lateral)", c: "Foto: © Cristiano Menezes ..." }
]
```

A primeira imagem que não seja a ficha original vira a capa da placa e da ficha.

### Adicionar ou corrigir uma espécie

1. Edite o objeto em `data.js` (ou acrescente um novo no array `SP`).
2. Coloque as fotos em `img/` com o padrão `genero-epiteto-<tipo>.jpg`.
3. Registre as fotos em `imgs.js` com legenda (`k`) e crédito (`c`).
4. Confira o nome e a distribuição no [Catálogo Moure](https://moure.cria.org.br/).

## Fontes

1. Lista de espécies de meliponíneos com ocorrência no Maranhão (anexo único, compilada da bibliografia científica).
2. Menezes, C. et al. [*Fichas catalográficas de espécies de abelhas sem ferrão relevantes para a meliponicultura*](https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1150556/fichas-catalograficas-de-especies-de-abelhas-sem-ferrao-relevantes-para-a-meliponicultura). Embrapa Meio Ambiente, 2022.
3. [A.B.E.L.H.A.: fichas e cartões de espécies](https://abelha.org.br/fichas-catalograficas-das-especies-relevantes-para-a-meliponicultura-2/).
4. [Moure's Bee Catalogue: Meliponini](https://moure.cria.org.br/catalogue?id=117368) (CRIA), consultado em 29/09/2026.
5. [Resolução CONAMA nº 496/2020](http://www2.mma.gov.br/port/conama/legiabre.cfm?codlegi=747) e [Portaria ICMBio nº 665/2021](https://www.gov.br/icmbio/pt-br/acesso-a-informacao/institucional/legislacao/portarias/portarias-2021/Portaria_665_de_03_de_novembro.pdf).

## Imagens e direitos autorais

As imagens **não** estão sob a licença do código. Cada uma mantém os direitos de seus autores:

- Fotos de operárias e ninhos: © Cristiano Menezes, *Fichas catalográficas* (Embrapa/USP/A.B.E.L.H.A.).
- Espécimes de coleção: © RPSP (USP).
- Cartões de espécies: A.B.E.L.H.A.
- Imagens marcadas **"autoria a confirmar"** (acervo do projeto SACMA) precisam ter o crédito conferido antes de qualquer divulgação pública.

Antes de tornar o repositório público, confirme a permissão de uso das imagens com os detentores dos direitos.

## Limitações

- Os registros de ocorrência vêm do Catálogo Moure e podem não incluir coletas recentes.
- Nomes populares variam entre regiões.
- Tamanho, colônia e distância de voo só existem para as 24 espécies com ficha catalográfica. Nas demais, o guia mostra "não informado".
- Espécies marcadas como **incerta** ou **revisar** devem ter a identificação confirmada por um especialista antes de qualquer criação ou multiplicação.

## Licença

Código: defina a licença do projeto (por exemplo, MIT) no arquivo `LICENSE`.
Dados textuais e imagens: conforme as fontes citadas acima.

---

Projeto SACMA · Guia elaborado em 09/2026.
