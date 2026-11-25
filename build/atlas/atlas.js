{
const SYS={
  ext:{n:"Exoesqueleto e apêndices",c:"var(--web-acao)"},
  dig:{n:"Digestório",c:"var(--dig)"}, nerv:{n:"Nervoso",c:"var(--nerv)"}, circ:{n:"Circulatório",c:"var(--circ)"},
  resp:{n:"Respiratório",c:"var(--resp)"}, gland:{n:"Glândulas",c:"var(--gland)"}, repro:{n:"Reprodutor",c:"var(--repro)"}, musc:{n:"Muscular",c:"var(--musc)"}
};
// P: id → [sistema, nome, termo, descrição, rótulo [x,y,lx,ly]]; N: notas da espécie; NA: "Na tiúba", "No mombucão"...
/*{{CFG}}*/
const order=["ext","dig","nerv","circ","resp","gland","repro","musc"];
const svg=document.getElementById("bee");FLAGS.forEach(c=>svg.classList.add(c));
let view="ext",caste="worker",sel=null,labelsOn=true;
const off={};
function visible(id){const el=svg.querySelector('[data-id="'+id+'"]');if(!el)return false;return el.getClientRects().length>0}
function renderInfo(id){
  const box=document.getElementById("info");
  id=id&&P[id]?id:null;
  if(!id){box.style.setProperty("--c","var(--web-acao)");box.innerHTML='<span class="embp-chapeu">Comece aqui</span><h2>Toque numa estrutura</h2><p>A vista externa mostra cabeça, mesossoma e metassoma, com asas e pernas. A vista interna revela sete sistemas: digestório, nervoso, circulatório, respiratório, glândulas, reprodutor e muscular.</p><p>Troque a casta para ver como rainha e macho diferem da operária. As estruturas marcadas com ● têm nota sobre esta espécie ('+Object.keys(N).length+' no total).</p>';return}
  const [s,n,t,d]=P[id];const note=N[id];
  box.style.setProperty("--c",SYS[s].c);
  box.innerHTML='<span class="embp-chapeu">'+SYS[s].n+'</span><h2>'+n+'</h2><div class="termo">'+t+'</div><p>'+d+'</p>'+(note?'<div class="note"><b>'+NA+'</b>'+note+'</div>':'');
}
function renderList(){
  const L=document.getElementById("list");L.innerHTML="";
  order.forEach(s=>{
    if(view==="ext"&&s!=="ext")return; if(view==="int"&&s==="ext")return;
    if(off[s])return;
    const ids=Object.keys(P).filter(k=>P[k][0]===s&&visible(k));
    if(!ids.length)return;
    const h=document.createElement("h3");h.style.setProperty("--c",SYS[s].c);h.innerHTML="<i></i>"+SYS[s].n;L.appendChild(h);
    ids.forEach(k=>{const b=document.createElement("button");b.type="button";b.textContent=P[k][1]+(N[k]?" ●":"");if(N[k])b.title="Tem nota sobre a espécie";b.className=k===sel?"sel":"";if(k===sel)b.setAttribute("aria-current","true");b.onclick=()=>select(k);L.appendChild(b)});
  });
}
function renderLabels(){
  const g=document.getElementById("labels");g.innerHTML="";g.dataset.off=labelsOn?"0":"1";
  Object.keys(P).forEach(k=>{
    const s=P[k][0]; if((view==="ext")!==(s==="ext"))return; if(off[s]||!visible(k))return;
    const [x,y,lx,ly]=P[k][4];
    const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("class","lblline");l.setAttribute("d","M"+x+","+y+" L"+lx+","+ly);g.appendChild(l);
    const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("class","lbl");t.setAttribute("x",lx);t.setAttribute("y",ly+(ly<y?-4:12));
    t.setAttribute("text-anchor",lx<x-10?"end":lx>x+10?"start":"middle");t.textContent=P[k][1].split(" (")[0];
    if(k===sel)t.style.fill="var(--web-titulo)";g.appendChild(t);
  });
}
function select(id){
  sel=id;svg.querySelectorAll(".part").forEach(p=>p.classList.toggle("sel",p.dataset.id===id));
  svg.classList.toggle("dim",!!id);renderInfo(sel);renderList();renderLabels();
}
function refresh(){
  svg.classList.toggle("internal",view==="int");
  svg.classList.remove("c-worker","c-queen","c-male");svg.classList.add("c-"+caste);
  document.getElementById("chips").hidden=view!=="int";
  svg.querySelectorAll(".layer").forEach(l=>l.dataset.off=off[l.dataset.sys]?"1":"0");
  if(sel&&(!visible(sel)||((view==="ext")!==(P[sel][0]==="ext"))))sel=null;
  select(sel);
}
const chips=document.getElementById("chips");
order.slice(1).forEach(s=>{const b=document.createElement("button");b.type="button";b.className="sis";b.style.setProperty("--c",SYS[s].c);b.setAttribute("aria-pressed","true");b.innerHTML="<i></i>"+SYS[s].n;
  b.onclick=()=>{off[s]=!off[s];b.setAttribute("aria-pressed",off[s]?"false":"true");refresh()};chips.appendChild(b)});
function seg(ids,fn){ids.forEach(id=>{document.getElementById(id).onclick=()=>{ids.forEach(j=>document.getElementById(j).setAttribute("aria-pressed",j===id?"true":"false"));fn(id)}})}
seg(["v-ext","v-int"],id=>{view=id==="v-int"?"int":"ext";refresh()});
seg(["c-worker","c-queen","c-male"],id=>{caste=id.slice(2);refresh()});
const tl=document.getElementById("t-lbl");tl.onclick=()=>{labelsOn=!labelsOn;tl.setAttribute("aria-pressed",labelsOn);renderLabels()};
svg.addEventListener("click",e=>{const p=e.target.closest(".part");if(p&&P[p.dataset.id])select(p.dataset.id===sel?null:p.dataset.id);else if(!p)select(null)});
svg.addEventListener("mouseover",e=>{const p=e.target.closest(".part");if(p&&P[p.dataset.id]&&!sel)renderInfo(p.dataset.id)});
svg.addEventListener("mouseleave",()=>{if(!sel)renderInfo(null)});
try{if(location.hash.slice(1)==="interna")document.getElementById("v-int").click()}catch(e){}
refresh();
}
