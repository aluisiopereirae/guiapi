/* Monta, para cada espécie, as notas do atlas e os traços do gênero que mudam o desenho.
   Regra: as notas vêm do texto de data.js (fichas catalográficas, Catálogo Moure, cartões A.B.E.L.H.A.).
   Os únicos textos escritos aqui são traços de gênero bem estabelecidos na literatura
   e as notas da tiúba já revisadas. */
const frases = (...txt) => txt.filter(Boolean).join(" ").split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ"])/).map(s => s.trim()).filter(Boolean);
const pega = (L, re) => L.filter(s => re.test(s));
const junta = L => [...new Set(L)].join(" ");
const fim = s => /[.!?]$/.test(s) ? s : s + ".";

function tracos(x){
  return {
    semCorbicula: x.g === "Lestrimelitta",
    basitarsoLargo: x.g === "Scaura",
    antenaLonga: x.g === "Celetrigona",
    faixas: x.g === "Melipona" && x.e === "fasciculata"
  };
}

/* Divide em orações: frases e, dentro delas, partes separadas por ";".
   A fonte entre parênteses no fim da frase é repetida em cada parte. */
function oracoes(txt){
  const out = [];
  for (const fr of frases(txt)) {
    const m = /\s*(\((?:Catálogo Moure|cartão A\.B\.E\.L\.H\.A\.|[^()]*\d{4}[^()]*)\))\.?$/.exec(fr);
    const fonte = m ? " " + m[1] : "";
    const corpo = m ? fr.slice(0, m.index) : fr.replace(/\.$/, "");
    for (let p of corpo.split(/;\s*/)) {
      p = p.trim(); if (!p) continue;
      p = p.charAt(0).toUpperCase() + p.slice(1);
      out.push(fim(p.replace(/\.$/, "") + fonte));
    }
  }
  return out;
}

function notas(x){
  const f = x.ficha || {}, b = x.bio || {};
  const asp = [...oracoes(f.asp), ...oracoes(b.nota)].map(s => s.replace(/^Com boa/, "Tem boa"));
  const nin = frases(f.ninho);
  const N = {}, usadas = new Set();
  const add = (id, t) => { if (t) N[id] = N[id] ? N[id] + " " + t : t; };
  const usa = (id, L, re, extra = () => true) => { const S = L.filter(s => re.test(s) && extra(s) && !usadas.has(s)); S.forEach(s => usadas.add(s)); add(id, S.join(" ")); };

  /* Comportamento distribuído pelas estruturas envolvidas */
  usa("g-salivar", asp, /glândulas labiais/i);
  usa("mesossoma", asp, /guardas.*(maiores|menores)/i);
  usa("mandibula", asp, /defens|agressiv|agridem|mordisc|morde|invadem|territorial|mansas|tímidas|fingir-se|guardas/i);
  usa("mandibula", asp, /carcaça|carne|carniça|necr/i);
  usa("probóscide", asp, /nectários|óleos florais/i);
  usa("ovarios-op", asp, /poedeir/i);
  usa("cerebro", asp, /trilha|recrut|direção e distância|comunicação/i);
  usa("papo", oracoes(f.asp), /\bmel\b|néctar/i, s => !/saqueiam/i.test(s));
  usa("g-hipofaringea", asp, /fungo/i);
  usa("musc-dv", asp, /térmic|calor/i);
  usa("glandulas-cera", nin, /cerume|cera\b/i);

  /* Traços de gênero */
  if (x.g === "Oxytrigona") {
    add("g-mandibular", "Nas Oxytrigona a glândula mandibular produz a secreção cáustica que a operária deposita em quem ameaça o ninho; ela causa queimaduras na pele.");
    add("ferrao", "Sem ferrão funcional, as Oxytrigona se defendem com a secreção cáustica da glândula mandibular.");
  }
  if (x.g === "Lestrimelitta") {
    add("g-mandibular", "Nas Lestrimelitta a glândula mandibular libera citral, o cheiro de limão que acompanha os ataques a ninhos de outras abelhas.");
    add("papo", "As operárias levam no papo o mel saqueado de ninhos de outras abelhas.");
    add("tibia-post", "As operárias de Lestrimelitta não têm corbícula funcional: não coletam pólen nas flores e obtêm alimento saqueando ninhos de outras abelhas sociais.");
  }
  if (x.g === "Scaura") add("basitarso", "Em Scaura o basitarso posterior é muito largo e achatado, bem mais que nos outros gêneros; as operárias o usam na coleta de pólen.");
  if (x.g === "Celetrigona") add("antena", "As antenas são longas, traço que dá nome à espécie (longicornis significa de antenas longas).");
  if (x.g === "Melipona") add("ovarios-rainha", "Em Melipona não há células reais: as rainhas nascem de células do mesmo tamanho que as das operárias, e a determinação da casta tem um componente genético.");
  else if (/células reais/i.test(f.ninho || "")) add("ovarios-rainha", "Nesta espécie há células reais, maiores que as de operárias, onde se criam as rainhas.");

  /* Dados da espécie */
  if (f.col && !/Sem informações/i.test(f.col)) add("ovarios-rainha", `Colônia: ${f.col.charAt(0).toLowerCase() + f.col.slice(1)}.`);
  usa("ovarios-rainha", asp, /rainha/i);
  add("asa-ant", f.voo && f.voo !== "Desconhecida" ? `Distância máxima de voo registrada: ${f.voo}.` : "");
  if (!(x.g === "Lestrimelitta")) {
    if (x.pol) add("corbicula", `Registrada polinizando: ${x.pol.join(", ")} (cartão A.B.E.L.H.A.).`);
    if (/barro|batume/i.test(f.ninho || "") || /barro/i.test(b.nid || "")) add("corbicula", "O ninho leva barro, que as operárias trazem na corbícula.");
    if (/resina/i.test(f.ninho || "")) add("corbicula", "Também trazem na corbícula a resina usada no ninho.");
  }
  if (f.tam) add("mesossoma", `Operária com cerca de ${f.tam} de comprimento (fichas catalográficas).`);

  /* Tiúba: notas revisadas */
  if (x.g === "Melipona" && x.e === "fasciculata") {
    add("metassoma", "A tiúba tem faixas claras de pelos nas bordas dos tergitos, que dão o aspecto acinzentado do nome uruçu-cinzenta.");
    add("mandibula", "Como o ferrão não funciona, a mordida é a principal defesa da tiúba. Com as mandíbulas ela também molda o barro e a resina da entrada do ninho.");
    add("papo", "O mel de tiúba tem mais água e é mais ácido que o da abelha-europeia.");
    add("ferrao", "Por isso a tiúba é manejada sem roupa de proteção pesada; ela se defende mordendo e enroscando-se nos cabelos.");
  }
  for (const k in N) N[k] = fim(N[k]);
  return N;
}
module.exports = {notas, tracos};
