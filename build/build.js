/* Gera o site estático do Guia de Abelhas sem Ferrão do Maranhão.
   Uso: node build.js <pasta-src> <pasta-saida>
   Cada página sai com CSS e JavaScript embutidos (sem data.js / imgs.js externos). */
const fs = require("fs"), path = require("path"), vm = require("vm");
const SRC = process.argv[2], OUT = process.argv[3], HERE = __dirname;
const rd = f => fs.readFileSync(f, "utf8");

const guia = rd(path.join(SRC, "guia.html"));
const CSS = guia.match(/<style>([\s\S]*?)<\/style>/)[1];
const LOGO = guia.match(/<svg role="img"[\s\S]*?<\/svg>/)[0].replace(/ id="Camada_x0020_1"/, "");
const dataSrc = rd(path.join(SRC, "data.js")), imgsSrc = rd(path.join(SRC, "imgs.js"));
const lib = rd(path.join(HERE, "lib.js")), species = rd(path.join(HERE, "species.js"));

/* Avalia dados + funções num contexto isolado */
const ctx = {BASE: ""}; vm.createContext(ctx);
vm.runInContext(dataSrc + "\n" + imgsSrc + "\n" + lib + "\n" + species +
  "\nObject.assign(this,{SP,IMGS,GROUPS,byN,TOTAL,esc,slugOf,stTxt,sectionsHTML,speciesPage,migalha,pageOf,pill,hexOf:hex});", ctx);
const {SP, IMGS, GROUPS, byN, TOTAL, esc, slugOf, stTxt} = ctx;
const json = v => JSON.stringify(v).replace(/</g, "\\u003c");

const AUTORES = [
  {sigla:"AP", nome:"Aluisio José Pereira", url:"https://www.embrapa.br/equipe/-/empregado/364662/aluisio-jose-pereira", cargo:"Pesquisador em Ciência de Dados · Embrapa Maranhão"},
  {sigla:"AP", nome:"Alexandre Piccinini", url:"https://www.embrapa.br/equipe/-/empregado/364404/alexandre-piccinini", cargo:"Pesquisador em (Api/Meli)ponicultura · Embrapa Maranhão"}
];
const PAGINAS = [["index.html","Guia das espécies"],["atlas/index.html","Atlas anatômico"],["revisoes.html","Revisões da lista"],["criacao.html","Criação legal e fontes"]];
const grpLabel = G => G.t.split(',')[0].split(' e ')[0];

/* CSS extra comum ao site (navegação entre páginas e cartões "veja também") */
const SITE_CSS = `
/* ---------- Site: navegação entre páginas ---------- */
.site-nav{border-bottom:1px solid var(--web-borda)}
.menu-grupos{background:var(--web-fundo);border-bottom:1px solid var(--web-borda)}
.veja{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--web-espaco-20);margin:0;padding:0;list-style:none}
.veja a{display:block;height:100%;box-sizing:border-box;padding:16px 20px;background:var(--web-fundo);border:1px solid var(--web-borda);border-radius:var(--web-raio-card);text-decoration:none;color:var(--web-texto);transition:border-color .2s ease,transform .2s ease}
.veja a:hover{border-color:var(--web-acao);transform:translateY(-.25rem);color:var(--web-texto)}
.veja b{display:block;font-size:1.1875rem;line-height:24px;font-weight:600;color:var(--web-titulo);margin-bottom:4px}
.veja span{font-size:.875rem;line-height:1.5}
`;

function header(B, ativo){
  return `<a class="embp-pular-conteudo" href="#main-content">Pular para o conteúdo principal</a>
<header class="embp_header">
  <div class="embp_header_container">
    <a class="embp_header_logo" href="https://www.embrapa.br/web/maranhao" title="Embrapa Maranhão">${LOGO}</a>
    <div class="embp_header_container_menus">
      <nav aria-label="Institucional"><ul class="embp_header_menu_bottom_list">
        <li class="embp_header_menu_bottom_list_nav_item"><a href="https://www.embrapa.br/web/maranhao">Embrapa Maranhão</a></li>
        <li class="embp_header_menu_bottom_list_nav_item"><a href="https://www.embrapa.br/web/maranhao/solucoes-tecnologicas">Tecnologias</a></li>
        <li class="embp_header_menu_bottom_list_nav_item"><a href="https://www.embrapa.br/web/maranhao/publicacoes">Publicações</a></li>
        <li class="embp_header_menu_bottom_list_nav_item"><a href="https://www.embrapa.br/web/maranhao/contato">Contato</a></li>
      </ul></nav>
    </div>
  </div>
</header>
<nav class="embp_unidades_menu site-nav" aria-label="Páginas do guia"><ul>${PAGINAS.map(([h, t]) => `<li><a href="${B}${h}"${h === ativo ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul></nav>`;
}

function footer(B){
  const li = (h, t, ext) => `<li class="embp-footer__menus_menu_item"><a href="${h}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a></li>`;
  return `<footer class="embp-footer">
  <div class="embp-footer__container">
    <div class="embp-footer__infos">
      <div class="embp-footer__infos_logo">${LOGO.replace('role="img" aria-label="Embrapa"', 'aria-hidden="true"')}</div>
      <span class="embp-footer__infos_info">Embrapa Maranhão<br>Praça da República, 147 - Diamante, São Luís, MA<br>CEP 65020-500 / Telefone (98) 3878-2234</span>
    </div>
    <nav class="embp-footer__menus" aria-label="Rodapé">
      <div class="embp-footer__menus_menu"><h3>Páginas</h3><ul>${PAGINAS.map(([h, t]) => li(B + h, t)).join('')}</ul></div>
      <div class="embp-footer__menus_menu"><h3>Grupos</h3><ul>${GROUPS.map(G => li(`${B}index.html#${G.id}`, esc(grpLabel(G)))).join('')}</ul></div>
      <div class="embp-footer__menus_menu"><h3>Autores</h3><ul>${AUTORES.map(a => li(esc(a.url), esc(a.nome), true)).join('')}</ul></div>
      <div class="embp-footer__menus_menu"><h3>Institucional</h3><ul>${li("https://www.embrapa.br/", "Portal Embrapa")}${li("https://www.embrapa.br/web/maranhao", "Embrapa Maranhão")}${li("https://moure.cria.org.br/catalogue?id=117368", "Catálogo Moure", true)}</ul></div>
    </nav>
  </div>
  <section class="embp-footer__container2"><div><p>Todos os direitos reservados, conforme Lei nº 9.610</p><p>Projeto SACMA · Sistema Automático de Classificação de Meliponíneos do Maranhão</p></div></section>
</footer>`;
}

function pagina({title, B, ativo, conteudo, css = "", scripts = ""}){
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap">
<style>${CSS}${SITE_CSS}${css}</style>
</head>
<body class="embp-web embp-plataforma">
${header(B, ativo)}
${conteudo}
${footer(B)}
${scripts}
</body>
</html>
`;
}
const escreve = (rel, html) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), {recursive: true}); fs.writeFileSync(f, html); };

/* ================= index.html: guia com busca e filtros ================= */
{
  ctx.BASE = "";
  const nConf = SP.filter(x => x.ma.s === "c").length, nRev = SP.filter(x => x.ma.s !== "c").length, nGen = new Set(SP.filter(x => !x.dup).map(x => x.g)).size;
  const ini = ctx.sectionsHTML(() => true);
  const IMGS_MIN = Object.fromEntries(Object.entries(IMGS).map(([k, L]) => [k, L.filter(i => !/ficha/.test(i.f)).slice(0, 1).map(i => ({f: i.f}))]));
  const conteudo = `<div class="embp-page-banner"><div class="embp-container">
   ${ctx.migalha("Abelhas sem ferrão do Maranhão", false)}
   <p class="embp-chapeu">Guia · Meliponíneos (Apidae: Meliponini)</p>
   <h1>Guia de abelhas sem ferrão do Maranhão</h1>
   <p class="subtitulo">As ${TOTAL} espécies da lista de ocorrência no estado, com nomes conferidos no Catálogo Moure, fichas biológicas, fotos e registros de município. Cada placa (favo) abre a ficha completa da espécie.</p>
   <ul class="painel-stats" aria-label="Indicadores do guia">
    <li><b>${TOTAL}</b><span>espécies</span></li><li><b>${nGen}</b><span>gêneros</span></li>
    <li><b>${nConf}</b><span>registros confirmados</span></li><li><b>${nRev}</b><span>a revisar ou incertos</span></li>
   </ul>
   <ul class="autores-guia" aria-label="Autores do guia">${AUTORES.map(a => `<li><span class="hx" aria-hidden="true">${esc(a.sigla)}</span><div><b><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.nome)}</a></b><span class="cargo">${esc(a.cargo)}</span></div></li>`).join('')}</ul>
  </div></div>
  <nav class="embp_unidades_menu menu-paineis menu-grupos" aria-label="Grupos de abelhas"><ul>${GROUPS.map(G => `<li><a href="#${G.id}">${esc(grpLabel(G))}</a></li>`).join('')}</ul></nav>
  <main id="main-content" class="embp-main"><div class="embp-container">
   <section class="card ferramentas" role="search" aria-label="Buscar e filtrar espécies">
    <div class="ctrl">
     <input id="q" type="search" placeholder="Buscar por nome científico ou popular (ex.: tiúba, jataí, Partamona)" aria-label="Buscar espécie">
     <label>Manejo <select id="fman"><option value="">todas</option><option value="Sim">Manejável</option><option value="Não">Não manejável</option><option value="Chão">Ninho no chão</option></select></label>
     <label>Registro no MA <select id="fst"><option value="">todos</option><option value="c">Confirmado</option><option value="i">Identidade incerta</option><option value="r">Revisar</option></select></label>
     <span class="contagem" id="count" aria-live="polite">${ini.total} de ${TOTAL} espécies</span>
    </div>
   </section>
   <div id="secs">${ini.html}</div>
   <section class="secao-painel" aria-labelledby="t-veja"><h2 class="portlet-title-text" id="t-veja">Veja também</h2>
    <ul class="veja">
     <li><a href="atlas/index.html"><b>Atlas anatômico</b><span>A anatomia de cada espécie por fora e por dentro, com as diferenças entre operária, rainha e macho e notas da espécie.</span></a></li>
     <li><a href="revisoes.html"><b>Revisões da lista</b><span>Correções de grafia e autoria e os registros que o Catálogo Moure não confirma para o Maranhão.</span></a></li>
     <li><a href="criacao.html"><b>Criação legal e fontes</b><span>O que a legislação permite, como ler o guia e as referências usadas.</span></a></li>
    </ul>
   </section>
  </div></main>`;
  const script = `<script>
{
const BASE="";
const SP=${json(SP)};
const IMGS=${json(IMGS_MIN)};
const GROUPS=${json(GROUPS)};
${lib}
const $=s=>document.querySelector(s);
/* Endereços antigos (#especie, #revisoes, #criacao) levam às novas páginas */
const h0=location.hash.slice(1);
if(h0&&SP.some(x=>slugOf(x)===h0)) location.replace("especies/"+h0+".html");
else if(h0==="revisoes") location.replace("revisoes.html");
else if(h0==="criacao") location.replace("criacao.html");
const STATE={q:"",man:"",st:""};
const norm=s=>s.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase();
function match(x){
  const q=norm(STATE.q.trim());
  if(q&&!norm(x.g+" "+x.e+" "+x.pop+" "+(x.outros||[]).join(" ")+" "+(x.lista||"")).includes(q)) return false;
  if(STATE.man&&x.man!==STATE.man) return false;
  if(STATE.st&&x.ma.s!==STATE.st) return false;
  return true;
}
let IO=null;
function marcaMenu(){
  if(IO){IO.disconnect();IO=null;} if(!("IntersectionObserver" in window)) return;
  const links=[...document.querySelectorAll(".menu-paineis a")];
  IO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.removeAttribute("aria-current"));const a=document.querySelector('.menu-paineis a[href="#'+e.target.id+'"]');if(a)a.setAttribute("aria-current","page");}}),{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("#secs .secao-painel").forEach(s=>IO.observe(s));
}
function render(){const r=sectionsHTML(match);$("#secs").innerHTML=r.html;$("#count").textContent=r.total+" de "+TOTAL+" espécies";marcaMenu();}
$("#q").addEventListener("input",e=>{STATE.q=e.target.value;render()});
$("#fman").addEventListener("change",e=>{STATE.man=e.target.value;render()});
$("#fst").addEventListener("change",e=>{STATE.st=e.target.value;render()});
marcaMenu();
}
</script>`;
  escreve("index.html", pagina({title: "Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão", B: "", ativo: "index.html", conteudo, scripts: script}));
}

/* ================= revisoes.html ================= */
{
  ctx.BASE = "";
  const revs = byN.filter(x => x.ma.s !== "c" || x.lista);
  const conteudo = `<div class="embp-page-banner"><div class="embp-container">
   ${ctx.migalha("Revisões da lista", true)}
   <p class="embp-chapeu">Guia · Conferência taxonômica</p>
   <h1>Revisões na lista de espécies</h1>
   <p class="subtitulo">Cada nome da lista foi conferido no Moure's Bee Catalogue (CRIA) em 29/09/2026. Aqui estão as correções de grafia e autoria e os registros que o catálogo não confirma para o Maranhão.</p>
   <ul class="painel-stats" aria-label="Resumo das revisões">
    <li><b>${revs.length}</b><span>nomes com observação</span></li>
    <li><b>${SP.filter(x => x.ma.s === "r").length}</b><span>registros a revisar</span></li>
    <li><b>${SP.filter(x => x.ma.s === "i").length}</b><span>identidade incerta</span></li>
   </ul>
  </div></div>
  <main id="main-content" class="embp-main"><div class="embp-container">
   <p class="embp-destaque-texto">A numeração é a da lista original. O nome válido leva à ficha da espécie.</p>
   <div class="scroll" style="max-height:none"><table class="dt"><thead><tr><th>Nº</th><th>Como está na lista</th><th>Nome válido</th><th>Situação no Maranhão</th></tr></thead><tbody>
   ${revs.map(x => `<tr><td>${x.n}</td><td>${esc(x.lista || (x.g + ' ' + x.e + ' ' + x.a))}</td><td><a href="especies/${slugOf(x)}.html"><i class="sci">${esc(x.g + ' ' + (x.dup ? 'heideri' : x.e))}</i></a> ${esc(x.dup ? 'Friese, 1900' : x.a)}</td><td>${stTxt(x)}${x.ma.nota ? `<br><span class="muted">${esc(x.ma.nota)}</span>` : (x.ma.s === "c" ? `<br><span class="muted">${esc(x.dest)}</span>` : '')}</td></tr>`).join('')}
   </tbody></table></div>
   <p class="nota-rodape">Os registros de ocorrência vêm do Catálogo Moure e podem não incluir coletas recentes. Registros marcados para revisão precisam de confirmação por especialista antes de uso em criação ou divulgação.</p>
  </div></main>`;
  escreve("revisoes.html", pagina({title: "Revisões da lista · Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão", B: "", ativo: "revisoes.html", conteudo}));
}

/* ================= criacao.html ================= */
{
  ctx.BASE = "";
  const nFichas = SP.filter(x => x.ficha).length;
  const conteudo = `<div class="embp-page-banner"><div class="embp-container">
   ${ctx.migalha("Criação legal e fontes", true)}
   <p class="embp-chapeu">Guia · Legislação e referências</p>
   <h1>Criação legal e fontes</h1>
   <p class="subtitulo">O que a legislação permite na meliponicultura, como ler as informações do guia e de onde elas vêm.</p>
  </div></div>
  <main id="main-content" class="embp-main"><div class="embp-container">
    <div class="embp-grade embp-grade-3">
     <div class="card"><div class="card-cab"><span class="embp-chapeu">Legislação</span><h2>Criação legal</h2></div><ul>
      <li>A Resolução CONAMA nº 496/2020 disciplina a meliponicultura. O uso e manejo de até 49 colônias sem exploração econômica dispensa autorização ambiental (art. 3º, § 3º).</li>
      <li>A Portaria ICMBio nº 665/2021 criou o Catálogo Nacional de Abelhas-Nativas-Sem-Ferrão e restringe a criação à região de ocorrência natural de cada espécie (art. 3º). Fora dela, só com autorização do órgão ambiental.</li>
      <li>Captura de ninhos por resgate exige autorização do órgão ambiental. Ninhos-isca são permitidos nas condições da Resolução 496/2020.</li></ul></div>
     <div class="card"><div class="card-cab"><span class="embp-chapeu">Legenda</span><h2>Como ler o guia</h2></div><ul>
      <li><b>Manejável</b>: classificação da lista original (Sim, Não ou Chão, para espécies de ninho subterrâneo).</li>
      <li><b>Registro no Maranhão</b>: <span class="st c">confirmado</span> com localidade no Catálogo Moure; <span class="st i">incerto</span> quando o catálogo marca a identidade como duvidosa; <span class="st r">revisar</span> quando o catálogo não lista o estado ou considera o registro um erro.</li>
      <li>Tamanho, colônia e voo vêm das fichas catalográficas (${nFichas} espécies). Nas demais, <span class="ni">não informado</span>.</li></ul></div>
     <div class="card"><div class="card-cab"><span class="embp-chapeu">Referências</span><h2>Fontes</h2></div><ol class="src">
      <li>Lista de espécies de meliponíneos com ocorrência no Maranhão (anexo único, compilada da bibliografia científica).</li>
      <li>Menezes, C. et al. <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1150556/fichas-catalograficas-de-especies-de-abelhas-sem-ferrao-relevantes-para-a-meliponicultura" target="_blank" rel="noopener">Fichas catalográficas de espécies de abelhas sem ferrão relevantes para a meliponicultura</a>. Embrapa Meio Ambiente, 2022. Fotos © Cristiano Menezes; espécimes © RPSP (USP).</li>
      <li><a href="https://abelha.org.br/fichas-catalograficas-das-especies-relevantes-para-a-meliponicultura-2/" target="_blank" rel="noopener">A.B.E.L.H.A.: fichas e cartões de espécies</a>.</li>
      <li><a href="https://moure.cria.org.br/catalogue?id=117368" target="_blank" rel="noopener">Moure's Bee Catalogue: Meliponini</a> (CRIA), consultado em 29/09/2026.</li>
      <li><a href="http://www2.mma.gov.br/port/conama/legiabre.cfm?codlegi=747" target="_blank" rel="noopener">Resolução CONAMA nº 496/2020</a> · <a href="https://www.gov.br/icmbio/pt-br/acesso-a-informacao/institucional/legislacao/portarias/portarias-2021/Portaria_665_de_03_de_novembro.pdf" target="_blank" rel="noopener">Portaria ICMBio nº 665/2021</a>.</li></ol></div>
    </div>
    <p class="nota-rodape">Guia elaborado em 09/2026 para o projeto SACMA (Sistema Automático de Classificação de Meliponíneos do Maranhão). Os registros de ocorrência vêm do Catálogo Moure e podem não incluir coletas recentes. Nomes populares variam entre regiões. Imagens sem autoria identificada estão marcadas como "autoria a confirmar" e devem ter o crédito conferido antes da divulgação.</p>
  </div></main>`;
  escreve("criacao.html", pagina({title: "Criação legal e fontes · Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão", B: "", ativo: "criacao.html", conteudo}));
}

/* ================= especies/*.html ================= */
ctx.BASE = "../";
for (const x of byN) {
  const p = ctx.speciesPage(x);
  escreve(`especies/${slugOf(x)}.html`, pagina({title: p.title, B: "../", ativo: "index.html", conteudo: p.banner + "\n" + p.body + "\n" + p.lb}));
}

/* ================= atlas/*.html: um atlas por espécie ================= */
{
  const EST = require(path.join(HERE, "atlas", "estruturas.js"));
  const {notas, tracos} = require(path.join(HERE, "atlas", "notas.js"));
  const orig = rd(path.join(SRC, "atlas.html"));
  const troca = (s, a, b) => { if (!s.includes(a)) throw new Error("SVG: trecho não encontrado: " + a.slice(0, 60)); return s.replace(a, b); };
  let SVG0 = orig.match(/<svg id="bee"[\s\S]*?<\/svg>/)[0];
  /* Correções do desenho: probóscide recolhida e curta; ferrão vestigial quase escondido */
  SVG0 = troca(SVG0, `<path class="leg" d="M164,326 C166,360 176,392 196,426" stroke-width="6"/>
            <path class="legthin" d="M196,426 C202,438 206,450 206,462" stroke="var(--honey)"/>`,
    `<path class="leg" d="M160,322 C164,336 174,346 190,352" stroke-width="5"/>
            <path class="legthin" d="M190,352 C196,354 202,354 207,353" stroke="var(--honey)" stroke-width="3.5"/>`);
  SVG0 = troca(SVG0, `<path d="M778,268 L800,272 L778,276Z"`, `<path d="M779,270.5 L787,272 L779,273.5Z"`);
  SVG0 = troca(SVG0, `class="part abd-scale female-only" data-id="glandulas-cera"`, `class="part abd-scale worker-only" data-id="glandulas-cera"`);
  SVG0 = troca(SVG0, `<path class="legthin female-only" d="M132,170 C110,140 86,122 58,108" stroke-dasharray="7 2"/>`,
    `<path class="legthin female-only ant-normal" d="M132,170 C110,140 86,122 58,108" stroke-dasharray="7 2"/>
            <path class="legthin female-only ant-longa" d="M132,170 C104,128 66,98 18,78" stroke-dasharray="7 2"/>`);
  const CORPO = 662; /* unidades do desenho entre a fronte e a ponta do abdome */
  const mm = t => { const m = /([\d,]+)\s*mm/.exec(t || ""); return m ? parseFloat(m[1].replace(",", ".")) : null; };
  const escala = x => {
    const t = mm(x.ficha && x.ficha.tam);
    if (!t) return `<g class="escala" aria-hidden="true"><text x="880" y="26" text-anchor="end">Tamanho não informado nas fontes</text></g>`;
    const L = (CORPO / t).toFixed(1);
    return `<g class="escala" aria-hidden="true"><line x1="${(880 - L).toFixed(1)}" y1="34" x2="880" y2="34"/><text x="880" y="24" text-anchor="end">1 mm · operária de ${esc(x.ficha.tam)}</text></g>`;
  };
  const LISTA = byN.filter(x => !x.dup);
  const atlasOf = x => (x.dup ? "ptilotrigona-lurida" : slugOf(x));
  const tpl = rd(path.join(HERE, "atlas", "body.html"));
  const JS0 = rd(path.join(HERE, "atlas", "atlas.js"));
  const CSSA = rd(path.join(HERE, "atlas", "atlas.css"));
  const relatorio = [];
  ctx.BASE = "../";
  LISTA.forEach((x, i) => {
    const G = GROUPS.find(g => g.id === x.grp), T = tracos(x), N = notas(x);
    const flags = [T.semCorbicula && "g-semcorb", T.basitarsoLargo && "g-basit", T.antenaLonga && "g-antlonga", T.faixas && "g-faixas"].filter(Boolean);
    const P = {}; for (const k in EST) P[k] = EST[k];
    const f = x.ficha || {};
    const row = (k, v, w) => `<div class="row${w ? " wide" : ""}"><div class="k">${k}</div><div class="v">${v}</div></div>`;
    const ficha = [
      row("Nome popular", esc(x.pop) + (x.outros && x.outros.length ? `<br><span class="muted">${esc(x.outros.join(", "))}</span>` : "")),
      row("Espécie", `<i class="sci">${esc(x.g + " " + x.e)}</i> ${esc(x.a)}`),
      row("Tamanho", f.tam ? esc(f.tam) + " (operária)" : '<span class="ni">não informado</span>'),
      row("Colônia", f.col ? esc(f.col) : '<span class="ni">não informado</span>'),
      row("Voo máximo", f.voo ? esc(f.voo) : '<span class="ni">não informado</span>'),
      row("Nidificação", (f.nid || (x.bio && x.bio.nid)) ? esc(f.nid || x.bio.nid) : '<span class="ni">não informado</span>'),
      row("Manejável", ctx.pill(x.man)),
      row("Registro no MA", stTxt(x) + (x.ma.loc ? `<br><span class="muted">${esc(x.ma.loc.join(", "))}</span>` : "") + (x.ma.nota ? `<br><span class="muted">${esc(x.ma.nota)}</span>` : ""), true),
      row("Destaque", esc(x.dest), true),
      x.bio && x.bio.nota ? row("Biologia", esc(x.bio.nota), true) : ""
    ].join("");
    const tr = [
      T.semCorbicula && "Operária desenhada sem corbícula: as Lestrimelitta não coletam pólen nas flores.",
      T.basitarsoLargo && "Basitarso posterior da operária desenhado largo, como é típico de Scaura.",
      T.antenaLonga && "Antenas das fêmeas desenhadas mais longas, como em Celetrigona longicornis.",
      T.faixas && "Faixas claras nos tergitos, típicas da tiúba."
    ].filter(Boolean);
    const prev = LISTA[(i - 1 + LISTA.length) % LISTA.length], next = LISTA[(i + 1) % LISTA.length];
    const pager = `<a class="embp-button sec" href="${slugOf(prev)}.html">← <i class="sci">${esc(prev.g[0] + ". " + prev.e)}</i> · ${esc(prev.pop)}</a><a class="embp-button sec" href="${slugOf(next)}.html">${esc(next.pop)} · <i class="sci">${esc(next.g[0] + ". " + next.e)}</i> →</a>`;
    const SVG = SVG0.replace("<!-- rótulos -->", escala(x) + "\n        <!-- rótulos -->").replace('aria-label="Vista lateral de uma tiúba"', `aria-label="Vista lateral esquemática de ${esc(x.g + " " + x.e)}"`);
    const conteudo = tpl
      .replace("{{MIGALHA}}", () => ctx.migalha(`Atlas: <i>${esc(x.g + " " + x.e)}</i>`, true).replace(/<li><span aria-current/, `<li><a href="index.html">Atlas anatômico</a></li><li><span aria-current`))
      .replace(/{{N}}/g, x.n).replace(/{{TOTAL}}/g, TOTAL).replace(/{{GRUPO}}/g, () => esc(G.t)).replace(/{{GRP}}/g, G.id)
      .replace(/{{POP}}/g, () => esc(x.pop)).replace(/{{SCI}}/g, () => esc(x.g + " " + x.e)).replace(/{{SCI_TXT}}/g, () => esc(x.g + " " + x.e)).replace(/{{AUTOR}}/g, () => esc(x.a))
      .replace("{{SVG}}", () => SVG).replace("{{FICHA}}", () => ficha)
      .replace("{{TRACOS}}", () => tr.length ? `<ul class="tracos">${tr.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "")
      .replace("{{SLUG}}", slugOf(x)).replace("{{PAGER}}", () => pager);
    const cfg = `const P=${json(P)};\nconst N=${json(N)};\nconst NA="Nesta espécie";\nconst FLAGS=${json(flags)};`;
    const JS = JS0.replace("/*{{CFG}}*/", () => cfg);
    escreve(`atlas/${slugOf(x)}.html`, pagina({title: `Atlas: ${x.g} ${x.e} (${x.pop}) · Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão`, B: "../", ativo: "atlas/index.html", conteudo, css: CSSA, scripts: `<script>\n${JS}\n</script>`}));
    relatorio.push({slug: slugOf(x), notas: Object.keys(N).length, flags});
  });

  /* atlas/index.html: escolher a espécie */
  const placa = x => {
    const f = x.ma.s === "r" ? '<span class="flag r">Revisar</span>' : x.ma.s === "i" ? '<span class="flag i">Incerta</span>' : '';
    return `<li><a class="placa" href="${slugOf(x)}.html" aria-label="Abrir atlas de ${esc(x.g + " " + x.e)}, ${esc(x.pop)}"><span class="no">nº ${x.n}</span>${f}${ctx.hexOf(x)}<span class="g">${esc(x.g)}</span><span class="e">${esc(x.e)}</span><span class="p">${esc(x.pop)}</span></a></li>`;
  };
  const conteudo = `<div class="embp-page-banner"><div class="embp-container">
   ${ctx.migalha("Atlas anatômico", true)}
   <p class="embp-chapeu">Atlas anatômico · ${LISTA.length} espécies</p>
   <h1>Atlas anatômico das abelhas sem ferrão</h1>
   <p class="subtitulo">Cada espécie do guia tem um atlas interativo, com vista externa e interna, sete sistemas do corpo e as diferenças entre operária, rainha e macho. As notas de cada atlas vêm das fichas catalográficas, do Catálogo Moure e dos cartões A.B.E.L.H.A.</p>
  </div></div>
  <nav class="embp_unidades_menu menu-paineis menu-grupos" aria-label="Grupos de abelhas"><ul>${GROUPS.map(G => `<li><a href="#${G.id}">${esc(grpLabel(G))}</a></li>`).join('')}</ul></nav>
  <main id="main-content" class="embp-main"><div class="embp-container">
   <p class="embp-aviso" style="max-width:var(--web-texto-largura)">A ilustração é um esquema comum aos meliponíneos. Ela muda só nos traços de gênero bem estabelecidos (sem corbícula em <i>Lestrimelitta</i>, basitarso largo em <i>Scaura</i>, antenas longas em <i>Celetrigona longicornis</i>). A barra de escala usa o tamanho real da operária quando as fichas o informam.</p>
   ${GROUPS.map(G => { const L = LISTA.filter(x => x.grp === G.id); return `<section class="secao-painel" id="${G.id}" aria-labelledby="t-${G.id}"><div class="grupo-cab"><h2 class="portlet-title-text" id="t-${G.id}">${esc(G.t)}</h2><span class="embp-chapeu">${esc(G.gen)}</span></div><ul class="placas">${L.map(placa).join("")}</ul></section>`; }).join("")}
   <p class="nota-rodape"><i>Ptilotrigona heideri</i>, listada à parte na lista original, é sinônimo de <i>Ptilotrigona lurida</i> e usa o mesmo atlas.</p>
  </div></main>`;
  escreve("atlas/index.html", pagina({title: "Atlas anatômico · Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão", B: "../", ativo: "atlas/index.html", conteudo}));

  /* Endereço antigo */
  escreve("atlas-tiuba.html", `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Atlas da tiúba</title><meta http-equiv="refresh" content="0; url=atlas/melipona-fasciculata.html"><link rel="canonical" href="atlas/melipona-fasciculata.html"></head><body><p>O Atlas da tiúba mudou de endereço: <a href="atlas/melipona-fasciculata.html">abrir o atlas</a>.</p><script>location.replace("atlas/melipona-fasciculata.html"+location.hash)</script></body></html>\n`);
  fs.writeFileSync("/tmp/relatorio-atlas.json", JSON.stringify(relatorio, null, 1));
  ctx.atlasOf = atlasOf;
}
console.log("ok:", fs.readdirSync(OUT).join(", "), "| espécies:", fs.readdirSync(path.join(OUT, "especies")).length);
