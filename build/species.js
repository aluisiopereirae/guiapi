/* Só no gerador: monta o conteúdo da ficha de cada espécie (BASE = "../"). */
const migalha = (ultimo, sub) => `<nav class="embp__breadcrumb" aria-label="Caminho de navegação"><ol><li><a href="https://www.embrapa.br/web/maranhao">Embrapa Maranhão</a></li>${sub ? `<li><a href="${BASE}index.html">Abelhas sem ferrão do Maranhão</a></li>` : ''}<li><span aria-current="page">${ultimo}</span></li></ol></nav>`;
const ICON = {
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg>',
 ruler:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 17 17 3l4 4L7 21z"/><path d="M8 12l2 2M11 9l2 2M14 6l2 2"/></svg>',
 fly:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h13"/><path d="m12 7 5 5-5 5"/><circle cx="20" cy="12" r="1.5"/></svg>',
 hand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>'
};
const FICHAS_URL = "https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1150556/fichas-catalograficas-de-especies-de-abelhas-sem-ferrao-relevantes-para-a-meliponicultura";
const ABELHA_URL = "https://abelha.org.br/fichas-catalograficas-das-especies-relevantes-para-a-meliponicultura-2/";

function manejoTips(x){
  const t = [];
  if (x.grp === "limao") t.push("Abelha-ladra (cleptobiótica): não coleta alimento em flores e saqueia ninhos de outras abelhas. Mantenha colônias fortes e entradas estreitas nos meliponários próximos.");
  if (x.g === "Oxytrigona") t.push("Defende o ninho com secreção cáustica que provoca queimaduras na pele. Use proteção e evite abrir o ninho.");
  if (x.man === "Não") t.push("Classificada como não manejável na lista. Não é indicada para criação racional; conserve os ninhos em campo.");
  if (x.man === "Chão") t.push("Ninho subterrâneo, em cavidades no solo. A lista a classifica como \"Chão\": não se adapta ao manejo usual em caixas.");
  if (x.ficha && /defensiv|agressiv/i.test(x.ficha.asp)) t.push("Operárias defensivas: aproxime-se do ninho com cuidado e em horários de menor atividade.");
  if (x.ficha && /mansa/i.test(x.ficha.asp)) t.push("As fichas descrevem as operárias como mansas.");
  if (x.ma.s !== "c") t.push("Antes de criar ou multiplicar, confirme a identificação com um especialista: o registro no Maranhão está marcado para revisão.");
  if (x.man !== "Não" && x.grp !== "limao") t.push("Crie apenas dentro da área de ocorrência natural (Portaria ICMBio 665/2021). Até 49 colônias sem fins econômicos dispensam autorização (CONAMA 496/2020).");
  return t;
}

function speciesPage(x){
  const ep = epOf(x);
  const i = byN.indexOf(x), prev = byN[(i - 1 + byN.length) % byN.length], next = byN[(i + 1) % byN.length];
  const G = GROUPS.find(g => g.id === x.grp); const IM = imgsOf(x); const main = IM.find(m => !/ficha/.test(m.f));
  const kv = [["Nome científico válido", `<i class="sci">${esc(x.g + ' ' + x.e)}</i> ${esc(x.a)}`],
    x.lista ? ["Como consta na lista", esc(x.lista)] : null,
    ["Gênero", `<i class="sci">${esc(x.g)}</i>`], ["Grupo no guia", `<a href="../index.html#${G.id}">${esc(G.t)}</a>`],
    ["Nome popular (lista)", esc(x.pop)], x.outros && x.outros.length ? ["Outros nomes", esc(x.outros.join(", "))] : null,
    ["Manejável (lista)", pill(x.man)], ["Nidificação", nid(x) ? esc(nid(x)) : NI],
    ["Colônia", x.ficha ? esc(x.ficha.col) : NI], ["Tamanho aproximado", x.ficha ? esc(x.ficha.tam) : NI], ["Distância máxima de voo", x.ficha ? esc(x.ficha.voo) : NI]].filter(Boolean);
  const tips = manejoTips(x); const warn = x.man === "Não" || x.grp === "limao" || x.g === "Oxytrigona";
  const atlas = `<p class="embp-aviso" style="margin:var(--web-espaco-20) 0 0">Veja a anatomia desta espécie por fora e por dentro, com as diferenças entre operária, rainha e macho, no <a href="../atlas/${x.dup ? "ptilotrigona-lurida" : slugOf(x)}.html"><b>atlas anatômico</b></a>.</p>`;

  const banner = `<div class="embp-page-banner"><div class="embp-container">
   ${migalha(`<i>${esc(x.g + ' ' + ep)}</i>`, true)}
   <p class="embp-chapeu">Ficha nº ${x.n} de ${TOTAL} · ${esc(G.t)}</p>
   <h1><i>${esc(x.g)} ${esc(ep)}</i> <span style="font-weight:400;font-size:.6em;opacity:.85">${esc(x.dup ? 'Friese, 1900' : x.a)}</span></h1>
   <p class="subtitulo">${esc(x.pop)}${x.outros && x.outros.length ? ` · também chamada ${esc(x.outros.join(", "))}` : ''}</p>
  </div></div>`;

  const body = `<main id="main-content" class="embp-main"><div class="embp-container">
   <div class="ficha-top"><a class="embp-button sec" href="../index.html#${x.grp}">← Voltar ao guia</a><span class="muted">${esc(G.t)} · nº ${x.n} de ${TOTAL}</span></div>
   <section class="ficha-hero" aria-label="Apresentação da espécie"><div class="hero-in">
     <div class="photo">${main ? `<img src="../img/${esc(main.f)}" alt="${esc(x.g + ' ' + x.e + ': ' + main.k)}">` : `<span class="ph" aria-hidden="true">${initials(x)}</span>`}</div>
     <div class="txt"><span class="embp-chapeu">Nº ${x.n} da lista · <i>${esc(x.g)}</i></span>
       <div class="pop">${esc(x.pop)}</div>${x.outros && x.outros.length ? `<div class="other">Também: ${esc(x.outros.join(", "))}</div>` : ''}
       <p class="lead">${esc(x.dest)}</p></div></div>
     <div class="faixa" aria-hidden="true"><span>${Array(6).fill(`${esc(x.pop)} <b>·</b> <i>${esc(x.g + ' ' + ep)}</i> <b>·</b> Maranhão <b>·</b> `).join('')}</span></div>
   </section>
   ${atlas}
   <ul class="selos" aria-label="Resumo da espécie">
     <li><span class="hx">${ICON.hand}</span><span><small>Manejável</small><b>${esc(MANL[x.man][1])}</b></span></li>
     <li><span class="hx">${ICON.home}</span><span><small>Nidificação</small><b>${nid(x) ? esc(nid(x).split(/[,(]/)[0]) : 'Não informado'}</b></span></li>
     <li><span class="hx">${ICON.ruler}</span><span><small>Tamanho</small><b>${x.ficha ? esc(x.ficha.tam) : 'Não informado'}</b></span></li>
     <li><span class="hx">${ICON.fly}</span><span><small>Voo máximo</small><b>${x.ficha ? esc(x.ficha.voo) : 'Não informado'}</b></span></li>
   </ul>
   <div class="duas">
     <section class="card"><div class="card-cab"><span class="embp-chapeu">Perfil</span><h2>Características</h2></div><div class="kvl">${kv.map(r => `<div class="row"><div class="k">${r[0]}</div><div class="v">${r[1]}</div></div>`).join('')}</div></section>
     <section class="card ma"><div class="card-cab"><span class="embp-chapeu">Catálogo Moure</span><h2>Ocorrência no Maranhão</h2></div>
       <div class="hd"><span class="stbig ${x.ma.s}">${STL[x.ma.s]}</span></div>
       ${x.ma.loc ? `<div class="chips">${x.ma.loc.map(l => `<span class="chip">${esc(l)}</span>`).join('')}</div>` : ''}
       ${x.ma.nota ? `<p style="margin:10px 0 0;font-size:.875rem">${esc(x.ma.nota)}</p>` : ''}
       <p class="muted" style="margin:10px 0 0">Localidades do <a href="${MOURE(x.moure)}" target="_blank" rel="noopener">Catálogo Moure</a>, consultado em 29/09/2026.</p>
       <h3>Cultivos e plantas que poliniza</h3>
       ${x.pol ? `<div class="chips">${x.pol.map(p => `<span class="chip pl">${esc(p)}</span>`).join('')}</div><p class="muted" style="margin:8px 0 0">Fonte: cartão de espécie A.B.E.L.H.A.</p>` : `<p class="muted" style="margin:0">Sem registro de polinização de cultivos nas fontes consultadas.</p>`}
     </section>
   </div>
   <section class="card" style="margin-top:var(--web-espaco-20)"><div class="card-cab"><span class="embp-chapeu">Ninho e colônia</span><h2>Biologia</h2></div>
     ${x.ficha ? `<div class="bio"><p><b>Ninho.</b> ${esc(x.ficha.ninho)}</p><p><b>Colônia.</b> ${esc(x.ficha.col)}.</p><p><b>Aspectos gerais.</b> ${esc(x.ficha.asp)}</p><p class="muted">Texto das Fichas catalográficas de espécies de abelhas sem ferrão (Menezes et al., Embrapa/USP/A.B.E.L.H.A., 2022).</p></div>`
      : x.bio ? `<div class="bio"><p><b>Nidificação.</b> ${esc(x.bio.nid)}.</p><p>${esc(x.bio.nota)}</p><p class="muted">Esta espécie não tem ficha catalográfica no acervo; dados resumidos do Catálogo Moure e, quando indicado, do cartão A.B.E.L.H.A.</p></div>`
      : `<p class="muted">Consulte a ficha de <a href="ptilotrigona-lurida.html"><i>Ptilotrigona lurida</i></a>.</p>`}
   </section>
   ${IM.length ? `<section class="card" style="margin-top:var(--web-espaco-20)"><div class="card-cab"><span class="embp-chapeu">Fotos</span><h2>Galeria</h2></div><div class="gal">${IM.map((m, k) => `<figure><button type="button" data-k="${k}" aria-label="Ampliar: ${esc(m.k)}"><img src="../img/${esc(m.f)}" alt="${esc(x.g + ' ' + x.e + ': ' + m.k)}" loading="lazy"></button><figcaption>${esc(m.k)}<span>${esc(m.c)}</span></figcaption></figure>`).join('')}</div></section>` : ''}
   <div class="duas">
     <section class="dicas${warn ? ' warn' : ''}" aria-label="${warn ? 'Atenção no manejo' : 'Dicas para o manejo'}"><h3>${warn ? 'Atenção no manejo' : 'Dicas para o manejo'}</h3><div class="b"><ul>${tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div></section>
     <section class="card"><div class="card-cab"><span class="embp-chapeu">Referências</span><h2>Fontes</h2></div><ol class="src">
       <li><a href="${MOURE(x.moure)}" target="_blank" rel="noopener">Moure's Bee Catalogue: <i>${esc(x.g + ' ' + x.e)}</i></a></li>
       ${x.ficha ? `<li>Menezes, C. et al. <a href="${FICHAS_URL}" target="_blank" rel="noopener">Fichas catalográficas de espécies de abelhas sem ferrão</a>. Embrapa Meio Ambiente, 2022.</li>` : ''}
       ${x.pol || IM.some(m => /card/.test(m.f)) ? `<li><a href="${ABELHA_URL}" target="_blank" rel="noopener">A.B.E.L.H.A.: cartões de espécies</a></li>` : ''}
       <li>Lista de meliponíneos com ocorrência no Maranhão (anexo único), nº ${x.n}.</li></ol></section>
   </div>
   <nav class="pager" aria-label="Espécie anterior e seguinte"><a class="embp-button sec" href="${slugOf(prev)}.html">← nº ${prev.n} <i class="sci">${esc(prev.g[0] + '. ' + epOf(prev))}</i></a><a class="embp-button sec" href="${slugOf(next)}.html">nº ${next.n} <i class="sci">${esc(next.g[0] + '. ' + epOf(next))}</i> →</a></nav>
   <p class="nota-rodape">Guia de abelhas sem ferrão do Maranhão · 09/2026. Imagens com os créditos indicados; as marcadas "autoria a confirmar" precisam de crédito antes da divulgação.</p>
  </div></main>`;

  const lb = IM.length ? `<div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Imagem ampliada"><div><img id="lbimg" alt=""><div class="cap" id="lbcap"></div></div><button type="button" id="lbx">Fechar</button></div>
<script>
{
const IM=${JSON.stringify(IM.map(m => ({f:m.f, k:m.k, c:m.c}))).replace(/</g, "\\u003c")};
const $=s=>document.querySelector(s); let last=null;
const fechar=()=>{$("#lb").hidden=true; if(last) last.focus();};
document.querySelectorAll(".gal button").forEach(b=>b.addEventListener("click",()=>{const m=IM[+b.dataset.k]; last=b; $("#lbimg").src="../img/"+m.f; $("#lbimg").alt=m.k; $("#lbcap").textContent=m.k+" · "+m.c; $("#lb").hidden=false; $("#lbx").focus();}));
$("#lbx").addEventListener("click",fechar);
$("#lb").addEventListener("click",e=>{if(e.target.id==="lb")fechar()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#lb").hidden)fechar()});
}
</script>` : '';
  return {banner, body, lb, title: `${x.g} ${ep} · Guia de abelhas sem ferrão do Maranhão — Embrapa Maranhão`};
}
