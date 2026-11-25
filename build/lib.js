/* Funções compartilhadas: usadas no gerador (Node) e embutidas no index.html.
   Dependem das globais SP, IMGS, GROUPS e BASE ("" na raiz, "../" em especies/). */
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const NI = '<span class="ni">não informado</span>';
const slugOf = x => x.dup ? "ptilotrigona-heideri" : (x.g + "-" + x.e).toLowerCase();
const imgKey = x => (x.g + "-" + x.e).toLowerCase();
const imgsOf = x => x.dup ? [] : (IMGS[imgKey(x)] || []);
const cover = x => { const L = imgsOf(x).filter(i => !/ficha/.test(i.f)); return L.length ? BASE + "img/" + L[0].f : null; };
const pageOf = x => BASE + "especies/" + slugOf(x) + ".html";
const byN = [...SP].sort((a, b) => a.n - b.n);
const TOTAL = SP.length;
const STL = {c:"Registro confirmado", i:"Registro de identidade incerta", r:"Revisar: não confirmado"};
const MANL = {Sim:["sim","Manejável"], "Não":["nao","Não manejável"], "Chão":["chao","Ninho no chão"]};
const initials = x => (x.g[0] + x.e[0]).toUpperCase();
const epOf = x => x.dup ? "heideri" : x.e;

function hex(x){
  const c = cover(x);
  return `<div class="hex" aria-hidden="true"><div class="in"${c ? ` style="background-image:url('${c}')"` : ''}>${c ? '' : initials(x)}</div></div>`;
}
function plate(x){
  const f = x.ma.s === "r" ? '<span class="flag r">Revisar</span>' : x.ma.s === "i" ? '<span class="flag i">Incerta</span>' : '';
  return `<li><a class="placa" href="${pageOf(x)}" aria-label="Abrir ficha de ${esc(x.g + ' ' + epOf(x))}, ${esc(x.pop)}">
   <span class="no">nº ${x.n}</span>${f}${hex(x)}
   <span class="g">${esc(x.g)}</span><span class="e">${esc(epOf(x))}</span><span class="p">${esc(x.pop)}</span></a></li>`;
}
const pill = m => `<span class="pill ${MANL[m][0]}">${esc(m)}</span>`;
const stTxt = x => `<span class="st ${x.ma.s}">${x.ma.s === "c" ? "Confirmado" : x.ma.s === "i" ? "Incerto" : "Revisar"}</span>`;
const nid = x => x.ficha ? x.ficha.nid : (x.bio ? x.bio.nid : null);

function guideTable(L){
  const cz = [
   ["Nome popular", x => `<strong>${esc(x.pop)}</strong>${x.outros && x.outros.length ? `<small>${esc(x.outros.join(", "))}</small>` : ''}`],
   ["Nidificação", x => nid(x) ? esc(nid(x)) : NI],
   ["Colônia", x => x.ficha ? esc(x.ficha.col) : NI],
   ["Tamanho aproximado", x => x.ficha ? `<strong class="num">${esc(x.ficha.tam)}</strong>` : NI],
   ["Distância máxima de voo", x => x.ficha ? (x.ficha.voo === "Desconhecida" ? '<span class="ni">desconhecida</span>' : `<strong class="num">${esc(x.ficha.voo)}</strong>`) : NI],
   ["Registro no Maranhão", x => stTxt(x) + (x.ma.loc ? `<small>${esc(x.ma.loc.join(", "))}</small>` : '')]
  ];
  const mg = [
   ["Manejável (lista)", x => pill(x.man)],
   ["Cultivos que poliniza", x => x.pol ? esc(x.pol.slice(0, 6).join(", ")) + (x.pol.length > 6 ? ` <small>+${x.pol.length - 6} na ficha</small>` : '') : '<span class="ni">sem registro nas fontes</span>']
  ];
  let h = `<div class="tablebox"><table class="guide"><thead><tr><th class="corner" colspan="2"><span class="embp-sr-only">Atributo</span></th>${L.map(x => `<th class="thname" scope="col"><a href="${pageOf(x)}">${hex(x)}<span class="g">${esc(x.g)}</span><span class="e">${esc(epOf(x))}</span></a></th>`).join('')}</tr></thead><tbody>`;
  cz.forEach((r, i) => { h += `<tr class="cz">${i === 0 ? `<th class="band" rowspan="${cz.length}"><span>Características</span></th>` : ''}<th class="lab" scope="row">${r[0]}</th>${L.map(x => `<td>${r[1](x)}</td>`).join('')}</tr>`; });
  mg.forEach((r, i) => { h += `<tr class="mg">${i === 0 ? `<th class="band m" rowspan="${mg.length}"><span>Manejo</span></th>` : ''}<th class="lab" scope="row">${r[0]}</th>${L.map(x => `<td>${r[1](x)}</td>`).join('')}</tr>`; });
  return h + `</tbody></table></div>${L.length > 4 ? '<p class="scrollnote">Role a tabela para o lado para ver todas as espécies do grupo.</p>' : ''}`;
}

function sectionsHTML(match){
  let total = 0;
  const html = GROUPS.map(G => {
    const L = byN.filter(x => x.grp === G.id && match(x)); total += L.length;
    if (!L.length) return '';
    return `<section class="secao-painel" id="${G.id}" aria-labelledby="t-${G.id}"><div class="grupo-cab"><h2 class="portlet-title-text" id="t-${G.id}">${esc(G.t)}</h2><span class="embp-chapeu">${esc(G.gen)}</span><p>${esc(G.d)}</p></div>
      <ul class="placas">${L.map(plate).join('')}</ul>${guideTable(L)}</section>`;
  }).join('') || `<p class="empty">Nenhuma espécie corresponde aos filtros. Limpe a busca ou escolha outro filtro.</p>`;
  return {html, total};
}
