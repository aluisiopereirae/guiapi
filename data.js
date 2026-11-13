/* Guia de Abelhas sem Ferrão do Maranhão — dados
   Fontes: Lista de ASF do Maranhão (anexo único, 63 espécies); Fichas catalográficas de espécies de abelhas sem ferrão
   relevantes para a meliponicultura (Menezes et al., Embrapa Meio Ambiente/USP/A.B.E.L.H.A., 2022); cartões A.B.E.L.H.A.;
   Moure's Bee Catalogue (CRIA), consultado em 29/09/2026. */

const MOURE = id => `https://moure.cria.org.br/catalogue?id=${id}`;

/* ma: c = registro confirmado no Catálogo Moure; i = registro com identidade incerta; r = revisar (não confirmado / erro) */
const SP = [
/* ================= MELIPONA ================= */
{n:15,g:"Melipona",e:"fasciculata",a:"Smith, 1854",grp:"melipona",pop:"Tiúba",outros:["jandaíra-preta-da-Amazônia","uruçu-cinzenta"],man:"Sim",moure:117852,
 ficha:{nid:"Ocos em árvores",ninho:"Cerume de coloração escura. Favos de cria horizontais sobrepostos, compostos por células de cria de igual tamanho, envoltos por invólucro. Presença de batume (mistura de barro e resina) delimitando o ninho na cavidade. A entrada do ninho é formada por um orifício situado no centro de raios convergentes (como cristas salientes alternadas por sulcos) de barro.",col:"Uma rainha-mãe e 600 operárias em média (de 300 a 1.000 operárias)",asp:"Operárias vivem cerca de 42 dias (máximo: 80 dias). Operárias maiores vivem mais, especialmente na estação seca, quando mais plantas estão florescendo e as atividades de forrageamento são mais intensas na região amazônica.",voo:"10 km",tam:"11,5 mm"},
 pol:["açaí","berinjela","cajá","camu-camu","pimenta","pimentão","mandioca","tomate","urucum"],
 ma:{s:"c",loc:["Barra do Corda","Barreirinhas","Carolina","Carutapera","Chapadinha","Codó","São Luís","Vitória do Mearim"]},
 dest:"Principal abelha da meliponicultura maranhense; a maior da lista (11,5 mm) e a de maior raio de voo registrado (10 km)."},

{n:16,g:"Melipona",e:"flavolineata",a:"Friese, 1900",grp:"melipona",pop:"Uruçu-amarela",outros:["ira-açu"],man:"Sim",moure:117926,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, compostos por células de cria de igual tamanho, envoltos por invólucro. Presença de batume (mistura de barro e resina) delimitando o ninho na cavidade. A entrada do ninho é formada por um orifício situado no centro de raios convergentes (como cristas salientes alternadas por sulcos) de barro.",col:"Uma rainha-mãe e 1.500 operárias em média (de 770 a 3.000 operárias)",asp:"Como comportamento de defesa contra inimigos, as operárias bloqueiam a entrada de seus ninhos com pequenas bolas de batume ou resina endurecida.",voo:"Desconhecida",tam:"9 mm"},
 ma:{s:"c",loc:["Alcântara","Barra do Corda","Buriticupu","Chapadinha","São Luís"]},
 dest:"Uruçu de colônias populosas (até 3.000 operárias), com registros do litoral ao centro do estado."},

{n:17,g:"Melipona",e:"melanoventer",a:"Schwarz, 1932",lista:"Melipona melanoventer Schrwarz, 1932",grp:"melipona",pop:"Uruçu-da-barriga-preta",outros:["uruçu-sem-canudo"],man:"Sim",moure:117922,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, compostos por células de cria de igual tamanho, envoltos por invólucro com depósitos de resina. Presença de batume (mistura de barro e resina) delimitando o ninho na cavidade. A entrada do ninho é formada por um orifício situado no centro de raios convergentes (como cristas salientes alternadas por sulcos) de barro com resina.",col:"Sem informações disponíveis",asp:"As operárias são mansas. Apenas uma guarda permanece na entrada do ninho.",voo:"Desconhecida",tam:"10 mm"},
 ma:{s:"c",loc:["Barreirinhas","Buriticupu","São Luís","Vitória do Mearim"]},
 dest:"Uruçu mansa, com apenas uma guarda na entrada. Grafia do autor corrigida para Schwarz."},

{n:18,g:"Melipona",e:"puncticollis",a:"Friese, 1902",grp:"melipona",pop:"Uruçu-de-bugre",outros:["uruçu-amarela-preguiçosa"],man:"Sim",moure:117837,
 bio:{nid:"Ocos de árvores",nota:"O Catálogo Moure registra defesa do ninho, visitas a Byrsonima, Hyptis, palmeiras e leguminosas, e criação em caixas racionais."},
 ma:{s:"c",loc:["Alcântara"]},
 dest:"Uruçu amazônica com registro no litoral norte (Alcântara)."},

{n:19,g:"Melipona",e:"rufiventris",a:"Lepeletier, 1836",grp:"melipona",pop:"Tujuba",outros:["uruçu-amarela","tuiuva"],man:"Sim",moure:117923,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, compostos por células de cria de igual tamanho, envoltos por invólucro com depósitos de resina. Presença de batume (mistura de barro e resina) delimitando o ninho na cavidade. A entrada do ninho é formada por um orifício situado no centro de raios convergentes (como cristas salientes alternadas por sulcos) de barro.",col:"Uma rainha-mãe e 600 operárias em média (de 500 a 700 operárias)",asp:"Com boa capacidade de regulação térmica. Colônias fortes resistem com maior sucesso aos ataques de Lestrimelitta limao, enquanto ninhos pequenos são destruídos por essas abelhas ladras. As forrageiras não usam trilhas de cheiro para recrutar as operárias do seu ninho para as fontes de alimento. A rainha inicia a postura de ovos 16 dias após realizar a cópula.",voo:"Desconhecida",tam:"9,5 mm"},
 ma:{s:"r",nota:"O Catálogo Moure não lista o Maranhão na distribuição de M. rufiventris e observa que registros do Nordeste podem ser de uma espécie nova do grupo rufiventris. Confirmar a identificação do material do Maranhão."},
 dest:"Espécie do Cerrado do Centro-Sul; registro no Maranhão precisa de confirmação."},

{n:20,g:"Melipona",e:"subnitida",a:"Ducke, 1910",grp:"melipona",pop:"Jandaíra",outros:["jandaíra-do-nordeste"],man:"Sim",moure:117812,
 ficha:{nid:"Ocos em árvores e no interior de cupinzeiros arbóreos (Constrictotermes cyphergaster)",ninho:"Favos de cria horizontais sobrepostos, compostos por células de cria de igual tamanho, envoltos por invólucro. Os potes de alimento são ovoides. A entrada do ninho é formada por um orifício revestido por resina situado no centro de raios convergentes (como cristas salientes alternadas por sulcos) de barro ou de areia com resina.",col:"Uma rainha-mãe e 700 operárias em média (de 200 a 1.200 operárias)",asp:"Devido aos longos períodos de seca e à disponibilidade incerta de recursos florais na Caatinga, a jandaíra reduz as atividades de forrageamento e de produção de cria até que as condições ambientais melhorem com a chegada das chuvas. Na curta estação chuvosa, as forrageiras coletam o máximo que podem de néctar e pólen nas flores e os estocam em seus ninhos.",voo:"4 km",tam:"9 mm"},
 pol:["abacate","goiaba","girassol","muriri","pimentão","urucum"],
 ma:{s:"c",loc:["Barreirinhas"]},
 dest:"Abelha da Caatinga adaptada à seca; no Maranhão há registro nos Lençóis (Barreirinhas)."},

/* ================= SCAPTOTRIGONA ================= */
{n:38,g:"Scaptotrigona",e:"bipunctata",a:"Lepeletier, 1836",grp:"scapto",pop:"Tubuna",outros:["canudo","tapesuá"],man:"Sim",moure:118178,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, com presença de células reais, envoltos por invólucro. Construído com cerume, o tubo de entrada tem formato de funil ou de trombeta.",col:"Sem informações disponíveis",asp:"Associação com fungo filamentoso, que cresce na superfície do alimento larval das células de cria e é ingerido pelas larvas. Trilhas de cheiro são utilizadas pelas forrageiras para recrutar abelhas de seus ninhos para fontes de alimento.",voo:"Desconhecida",tam:"5,5 mm"},
 pol:["canola","cenoura","girassol"],
 ma:{s:"c",loc:["Codó"]},dest:"Entrada em funil ou trombeta de cerume."},

{n:39,g:"Scaptotrigona",e:"polysticta",a:"Moure, 1950",grp:"scapto",pop:"Benjoim",outros:["benjoí","bijuí","abelha-canudão"],man:"Sim",moure:118182,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, com presença de células reais. Construído com cerume de coloração escura, o longo tubo de entrada se direciona para baixo.",col:"Sem informações disponíveis",asp:"Entrada do ninho com mais de seis guardas. Embora sejam mansas, as guardas mordiscam possíveis invasores de seus ninhos e recrutam outras operárias para defesa.",voo:"Desconhecida",tam:"6 mm"},
 ma:{s:"c",loc:["Chapadinha"]},dest:"Tubo de entrada longo, escuro e voltado para baixo."},

{n:40,g:"Scaptotrigona",e:"postica",a:"Latreille, 1807",grp:"scapto",pop:"Canudo",outros:["mandaguari","tubuna"],man:"Sim",moure:118168,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, com presença de células reais, envoltos por invólucro. Construído com cerume, o tubo de entrada tem coloração bege, levemente mais escuro que o tubo de S. xanthotricha.",col:"Uma rainha-mãe e 8.000 operárias em média (de 6.000 a 10.000 operárias)",asp:"Operárias vivem cerca de 33-39 dias (máximo: 60 dias). No recrutamento de companheiras de ninho, as forrageiras fornecem informações específicas sobre direção e distância do local da fonte de alimento. Algumas colônias podem compartilhar uma cavidade, dividida por placas de batume. Cerca de duas semanas após a enxameagem, a rainha inicia a postura de ovos.",voo:"0,9 km",tam:"6 mm"},
 ma:{s:"c",loc:["Codó","São Luís","Vitória do Mearim"]},dest:"Colônias muito populosas (6.000 a 10.000 operárias)."},

{n:41,g:"Scaptotrigona",e:"tubiba",a:"Smith, 1863",grp:"scapto",pop:"Tubiba",outros:["tubi","tapissuá"],man:"Sim",moure:118185,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos (provavelmente com células reais, como ocorre em outras espécies do gênero Scaptotrigona). Tubo interno conecta o ninho à sua entrada.",col:"Uma rainha-mãe e 1.800 operárias em média",asp:"Operárias são pouco defensivas. Os ninhos ocupam cavidades, de árvores vivas, com cerca de 3 L de volume.",voo:"Desconhecida",tam:"5,5 mm"},
 ma:{s:"c",loc:["Codó"]},dest:"Ninhos em cavidades de cerca de 3 L em árvores vivas."},

/* ================= PEQUENAS: TETRAGONISCA, NANNOTRIGONA, PLEBEIA, LEUROTRIGONA, TRIGONISCA, CELETRIGONA ================= */
{n:48,g:"Tetragonisca",e:"angustula",a:"Latreille, 1811",grp:"mirins",pop:"Jataí",outros:["jaty","jataí-verdadeira"],man:"Sim",moure:117791,
 ficha:{nid:"Ocos em árvores e cavidades em rochas, paredes, caixas de luz e de cartas",ninho:"Favos de cria horizontais sobrepostos, com presença de células reais, envoltos por invólucro. Os potes de alimento são ovais e há depósitos de resina viscosa e de cera branca pura. Construído com cerume, o tubo de entrada possui tamanho variável, podendo ser inclinado ou no formato de gancho com o orifício de entrada voltado para cima.",col:"Uma rainha-mãe e 5.000 operárias em média (de 2.000 a 8.000 operárias)",asp:"Operárias vivem cerca de 24 dias (máximo: 76 dias). As guardas são maiores que as demais operárias. Durante o dia, elas permanecem posicionadas sobre o tubo de entrada ou voando pairadas próximas a ele. As rainhas virgens podem ser aprisionadas em câmaras reais. De dois a sete dias após a cópula, a rainha inicia a postura de ovos.",voo:"0,6 km",tam:"4 mm"},
 pol:["acapu","abacate","café","cenoura","cupuaçu","goiaba","laranja","manga","melancia","morango","moressuma","pimentão","pepino","tangerina","umbu","urucum"],
 ma:{s:"c",loc:["Buriticupu"]},dest:"Ocorre em quase todo o Brasil; guardas pairam em voo diante do tubo de entrada."},

{n:21,g:"Nannotrigona",e:"punctata",a:"Smith, 1854",grp:"mirins",pop:"Iraí-da-amazônia",outros:["iraí"],man:"Sim",moure:118457,
 ficha:{nid:"Ocos em árvores",ninho:"Provavelmente, os favos de cria sejam horizontais sobrepostos, com presença de células reais e envoltos por invólucro, como ocorre em outras espécies do gênero Nannotrigona. Construído com cerume marrom, o tubo de entrada do ninho possui uma larga abertura que é margeada por muitas guardas.",col:"Sem informações disponíveis",asp:"A distância máxima de voo das operárias varia com o tipo de paisagem onde os ninhos são mantidos. Enquanto em áreas com cultivos agrícolas a distância de retorno aos ninhos é de até 600 m, em áreas urbanizadas essa distância diminui para 450 m.",voo:"0,6 km",tam:"4 mm"},
 ma:{s:"i",loc:["Carutapera"],nota:"O Catálogo Moure marca parte dos registros do Maranhão como de identidade incerta."},
 dest:"Tubo de entrada largo, margeado por muitas guardas."},

{n:34,g:"Plebeia",e:"minima",a:"Gribodo, 1893",grp:"mirins",pop:"Mosquito",outros:["lambe-lágrima","abelha-mirim"],man:"Sim",moure:118220,
 ficha:{nid:"Ocos em árvores e cavidades em paredes e moirões de cerca",ninho:"Células de cria são ligadas umas às outras por finas conexões de cerume, formando cachos. Aglomerados de pequenos potes de alimento ovalados ou arredondados. A entrada para o ninho é constituída por um curto tubo de cerume esbranquiçado.",col:"Uma rainha-mãe e 350 operárias em média (de 200 a 900 operárias)",asp:"Ninhos ocupam cavidades com volume médio de 0,1 L. Quando a cavidade é muito grande, as operárias isolam a parte ativa do ninho com invólucro.",voo:"Desconhecida",tam:"3 mm"},
 ma:{s:"c",loc:["Barreirinhas","São Luís"]},dest:"Minúscula (3 mm); ninhos em cavidades de apenas 0,1 L."},

{n:35,g:"Plebeia",e:"mosquito",a:"Smith, 1863",grp:"mirins",pop:"Mirim-mosquito",outros:["mosquito","jataí-mosquito"],man:"Sim",moure:118226,
 bio:{nid:"Troncos ocos, bambu, cavidades em paredes e pedras",nota:"O Catálogo Moure registra enxameagem, produção de mel e cera. Adverte que a identidade de P. mosquito \"permanece obscura\", pois várias espécies foram citadas sob esse nome."},
 ma:{s:"i",loc:["Norte do Maranhão (região setentrional)"],nota:"Registro antigo e de identidade incerta segundo o Catálogo Moure."},dest:"Nome aplicado a mais de uma espécie na literatura; identificação exige especialista."},

{n:11,g:"Leurotrigona",e:"muelleri",a:"Friese, 1900",grp:"mirins",pop:"Lambe-olhos",outros:["mirim"],man:"Sim",moure:117694,
 ficha:{nid:"Ocos em árvores e cavidades em paredes, alicerces de pedra, moirões de cerca e canos de ferro",ninho:"Células de cria são relativamente esféricas, ligadas umas às outras por conexões de cerume, formando cachos. Ausência de invólucro envolvendo as células de cria. Os potes de alimento são ovalados e com coloração amarela clara. Construído com cerume escuro e circundado por gotículas de resina, o curto tubo de entrada permite a entrada de mais de uma abelha.",col:"Uma rainha-mãe e 750 operárias em média (de 500 a 1.000 operárias)",asp:"Quando há necessidade de criar novas rainhas, operárias constroem células auxiliares com alimento larval ao lado de células com larvas. Pequenas pelotas de lixo são jogadas, e se acumulam, na frente da entrada do ninho. As operárias são tímidas e, quando molestadas, entram em seus ninhos. Estes ocupam cavidades de 0,2 a 0,5 L de volume.",voo:"Desconhecida",tam:"3 mm"},
 ma:{s:"c",loc:["Alcântara"]},dest:"Uma das menores abelhas sem ferrão (3 mm); operárias tímidas."},

{n:60,g:"Trigonisca",e:"duckei",a:"Friese, 1900",grp:"mirins",pop:"Lambe-olhos",outros:["lambi-olhos","mirim"],man:"Sim",moure:118294,
 bio:{nid:"Troncos e cavidades tubulares finas em árvores",nota:"Abelha anã. O Catálogo Moure registra comportamento de postura e de aprovisionamento de células."},
 ma:{s:"c",loc:["Alcântara","Carolina","Codó","São Luís"]},dest:"Abelha anã com registros do litoral ao sul do estado."},

{n:61,g:"Trigonisca",e:"meridionalis",a:"Albuquerque & Camargo, 2007",lista:"Trigonisca meridionalis Albuquerque & Camargo",grp:"mirins",pop:"Abelha-meridional",outros:[],man:"Sim",moure:118299,
 bio:{nid:"Não informado nas fontes consultadas",nota:"Espécie descrita em 2007; ocorre em MA, MT, MG, PA e SP segundo o Catálogo Moure."},
 ma:{s:"c",loc:["Barra do Corda","Carutapera"]},dest:"Descrita em 2007; ano do autor acrescentado ao nome."},

{n:62,g:"Trigonisca",e:"nataliae",a:"Moure, 1950",grp:"mirins",pop:"Abelha-mosquito",outros:[],man:"Sim",moure:118306,
 bio:{nid:"Não informado nas fontes consultadas",nota:"A localidade-tipo da espécie é Imperatriz (MA), coleta de agosto de 1949."},
 pol:["açaí"],
 ma:{s:"c",loc:["Buriticupu","Imperatriz (localidade-tipo)"]},dest:"Descrita a partir de exemplares coletados em Imperatriz, Maranhão."},

{n:63,g:"Trigonisca",e:"pediculana",a:"Fabricius, 1804",grp:"mirins",pop:"Lambe-olhos-amarela",outros:["mirim"],man:"Sim",moure:118281,
 bio:{nid:"Não informado nas fontes consultadas",nota:"Registrada na Caatinga e em bordas de fragmentos florestais, visitando Nicotiana glauca, Mimosa ophthalmocentra e Aspidosperma pyrifolium, entre outras."},
 ma:{s:"c",loc:["Barra do Corda","Barreirinhas","Carolina","Chapadinha","Fortaleza dos Nogueiras","Grajaú","São Luís"],nota:"Alguns registros marcados como de identidade incerta."},dest:"A Trigonisca com mais municípios registrados no estado."},

{n:3,g:"Celetrigona",e:"longicornis",a:"Friese, 1903",grp:"mirins",pop:"Abelha-formiga",outros:[],man:"Sim",moure:117625,
 bio:{nid:"Ocos finos de galhos em árvores secas ou vivas e cavidades artificiais",nota:"Capaz de criar rainhas de emergência. Não foi observada polinizando plantas cultivadas (cartão A.B.E.L.H.A.)."},
 ma:{s:"c",loc:["Arari","Chapadinha","Imperatriz"]},dest:"Antenas longas (\"longicornis\"); ninhos em galhos finos."},

/* ================= FRIESEOMELITTA ================= */
{n:4,g:"Frieseomelitta",e:"doederleini",a:"Friese, 1900",grp:"frieso",pop:"Moça-branca",outros:["mané-de-abreu","abelha-branca"],man:"Sim",moure:118376,
 ficha:{nid:"Ocos em árvores",ninho:"Células de cria ligadas umas às outras por conexões de cerume, formando cachos. Ausência de invólucro envolvendo o agrupamento de células de cria. Abundante estoque de resina.",col:"Sem informações disponíveis",asp:"É uma espécie resistente aos longos períodos de seca da Caatinga. Seu mel é mais fluido que o de outras espécies de Frieseomelitta, composto por cerca de 29% de água.",voo:"Desconhecida",tam:"5,5 mm"},
 ma:{s:"c",loc:["Barreirinhas","Chapadinha","Codó"]},dest:"Resistente à seca; mel com cerca de 29% de água."},

{n:5,g:"Frieseomelitta",e:"flavicornis",a:"Fabricius, 1798",grp:"frieso",pop:"Moça-branca",outros:["marmelada-amarela-mais-mansa"],man:"Sim",moure:118383,
 ficha:{nid:"Ocos em árvores",ninho:"Células de cria são verticalmente alongadas, ligadas umas às outras por finas conexões de cerume, formando cachos. Ausência de invólucro envolvendo o agrupamento de células de cria. Potes de mel são cilíndricos e os de pólen são levemente cônicos e alongados. A entrada para o ninho, coberta triangularmente por resina escura, permite a passagem de uma abelha.",col:"Uma rainha-mãe e 380 operárias em média",asp:"Ao anoitecer, as operárias fecham a entrada do ninho com cerume e resina. Quando molestadas, as guardas abrem as mandíbulas e projetam seus corpos para frente e depois se retraem, repetindo este movimento muitas vezes. Dependendo da intensidade do estímulo, as guardas entram no ninho ou voam para fora dele.",voo:"Desconhecida",tam:"5,5 mm"},
 ma:{s:"c",loc:["Carutapera"]},dest:"Fecha a entrada do ninho ao anoitecer."},

{n:6,g:"Frieseomelitta",e:"longipes",a:"Smith, 1854",lista:"Friesomelitta longipes (Smith, 1854)",grp:"frieso",pop:"Marmelada-branca",outros:["marmelada"],man:"Sim",moure:118379,
 ficha:{nid:"Ocos em árvores",ninho:"Células de cria são verticalmente alongadas, ligadas umas às outras por finas conexões de cerume, formando cachos. Construída com pequenas bolas de resina, de cor e transparência variáveis, a entrada para o ninho tem o formato de cone, semelhante a um vulcão de açúcar cristal.",col:"Uma rainha-mãe e 2.600 operárias em média (de 1.000 a 4.400 operárias)",asp:"As guardas são um pouco maiores que as forrageiras, além de serem mais escuras em algumas partes do corpo, especialmente, na face.",voo:"Desconhecida",tam:"5 mm"},
 ma:{s:"r",nota:"O Catálogo Moure lista apenas AM, MT, PA e Guiana; não há localidade do Maranhão. Confirmar o material de referência."},
 dest:"Entrada em cone de bolinhas de resina, \"vulcão de açúcar cristal\". Grafia do gênero corrigida."},

{n:7,g:"Frieseomelitta",e:"portoi",a:"Friese, 1900",lista:"Frieseomelitta aff portoi (Friese, 1900)",aff:true,grp:"frieso",pop:"Moça-branca-do-sul",outros:[],man:"Sim",moure:118386,
 bio:{nid:"Ocos de cipós secos (\"ambé\") e cavidades tubulares finas em árvores",nota:"Visita flores de Compositae e Cassia, entre outras (Catálogo Moure)."},
 ma:{s:"c",loc:["Alcântara","São Luís"]},dest:"Listada como \"aff.\" (afim): exemplares próximos de F. portoi, que tem registros confirmados em Alcântara e São Luís."},

{n:8,g:"Frieseomelitta",e:"silvestrii",a:"Friese, 1902",lista:"Frieseomelitta silvestri (Friese, 1902)",grp:"frieso",pop:"Moça-branca-pequena",outros:[],man:"Sim",moure:118388,
 bio:{nid:"Ocos e cavidades de árvores",nota:"Comportamento de \"fingir-se de morta\" como defesa; comunicação por som e cheiro (Catálogo Moure)."},
 ma:{s:"r",nota:"O Catálogo Moure considera erro o registro de Rebêlo et al. (2003): \"F. silvestrii does not occur in Maranhão\". Distribuição confirmada: Bolívia, MT e RO."},
 dest:"Registro no Maranhão considerado erro de identificação pelo Catálogo Moure."},

/* ================= TETRAGONA, CEPHALOTRIGONA, PTILOTRIGONA, SCAURA ================= */
{n:44,g:"Tetragona",e:"clavipes",a:"Fabricius, 1804",grp:"boras",pop:"Borá",outros:["vamos-embora"],man:"Sim",moure:117772,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais em espiral, com células reais em sua periferia, e envoltos por invólucro. Os potes de alimento são ovoides, com 3 a 5 cm de altura. O batume é constituído por resina. A arquitetura da entrada do ninho é variável, desde uma fenda relativamente alongada, ou um tubo de resina endurecida com larga abertura, que permite a entrada de muitas abelhas.",col:"Uma rainha-mãe e 7.300 operárias em média (de 5.400 a 29.000 operárias)",asp:"Com comportamento territorialista, as operárias são muito defensivas: mordiscam e depositam resina em quem se aproxima de seu ninho ou o perturba. Comumente, invadem ninhos de outras espécies de abelhas sem ferrão quando muito próximos aos seus.",voo:"Desconhecida",tam:"6,5 mm"},
 ma:{s:"c",loc:["Alcântara","Buriticupu","Carutapera","Chapadinha"],nota:"O Catálogo Moure alerta que sob o nome T. clavipes há várias espécies não descritas."},
 dest:"Colônias de até 29.000 operárias; muito defensiva."},

{n:45,g:"Tetragona",e:"dorsalis",a:"Smith, 1854",grp:"boras",pop:"Borá-pito-de-vidro",outros:["borá-bico-de-vidro"],man:"Sim",moure:117767,
 bio:{nid:"Ocos de árvores",nota:"O Catálogo Moure registra cheiro de resina, comportamento de defesa, produção de mel, enxameagem e usos medicinais da resina."},
 ma:{s:"c",loc:["Alcântara","Buriticupu","Carutapera","Chapadinha","São Luís","Vitória do Mearim"]},dest:"Borá com ampla distribuição no estado."},

{n:46,g:"Tetragona",e:"quadrangula",a:"Lepeletier, 1836",lista:"Tetragona quadrangula (Lepeletier, 1863)",grp:"boras",pop:"Borá-de-chão",outros:[],man:"Sim",moure:117761,
 bio:{nid:"Não informado no Catálogo Moure",nota:"Criada por povos Kayapó para mel e cera (Catálogo Moure). Ano do autor corrigido de 1863 para 1836."},
 ma:{s:"c",loc:["Buriticupu","Chapadinha"]},dest:"Ano da descrição corrigido para 1836."},

{n:47,g:"Tetragona",e:"truncata",a:"Moure, 1971",grp:"boras",pop:"Borá-de-canudo",outros:[],man:"Sim",moure:117766,
 bio:{nid:"Ocos de árvores vivas (registro em Protium sp., almécega-vermelha)",nota:"Forma agregações de ninhos com outras espécies (Catálogo Moure)."},
 ma:{s:"c",loc:["Buriticupu","Chapadinha"]},dest:"Nidifica em árvores vivas como a almécega."},

{n:1,g:"Cephalotrigona",e:"capitata",a:"Smith, 1854",lista:"Cephalotrigona capitata (Smith, 1874)",grp:"boras",pop:"Mombucão",outros:["mombuca"],man:"Sim",moure:117746,
 ficha:{nid:"Ocos em árvores vivas",ninho:"Favos de cria horizontais sobrepostos, com células reais, envoltos por invólucro. Os potes de alimento são relativamente grandes e, geralmente, os potes com mel estão separados dos com pólen. Há depósitos de detritos permanentes. A entrada do ninho, delimitada por resinas, possui uma pequena rampa de cerume endurecido, que funciona como plataforma de pouso.",col:"Uma rainha-mãe e 1.250 operárias em média (de 1.000 a 1.500 operárias)",asp:"Rainhas virgens emergem de células reais ou de células de dimensões similares às de operárias. Geralmente, as abelhas são mansas. As forrageiras esfregam suas peças bucais no substrato a cada 5 m e depositam compostos químicos, formando uma trilha de cheiro que serve para recrutar companheiras de ninho para fontes de alimento.",voo:"1,7 km",tam:"9,5 mm"},
 pol:["urucum"],
 ma:{s:"r",nota:"O Catálogo Moure não lista o Maranhão e observa que C. capitata \"provavelmente corresponde a um complexo de espécies\". A espécie irmã C. femorata tem registro no estado; confirmar qual das duas ocorre. Ano do autor corrigido de 1874 para 1854."},
 dest:"Grande e mansa; potes de mel separados dos de pólen."},

{n:2,g:"Cephalotrigona",e:"femorata",a:"Smith, 1854",grp:"boras",pop:"Mombucão amarelo",outros:["mombucão-da-Amazônia"],man:"Sim",moure:117745,
 bio:{nid:"Cavidades em árvores",nota:"Registrada como polinizadora da castanheira-do-brasil (Bertholletia excelsa) e mantida por comunidades tradicionais amazônicas para mel (Catálogo Moure)."},
 ma:{s:"c",loc:["Maranhão (sem município indicado)"]},dest:"Mombucão amazônico; polinizadora da castanheira."},

{n:37,g:"Ptilotrigona",e:"lurida",a:"Smith, 1854",grp:"boras",pop:"Lurida",outros:["aramá","borá-boi","borá-cavalo","tataíra-grande"],man:"Sim",moure:117483,
 bio:{nid:"Ocos de troncos",nota:"Colônias com defesa agressiva; produz mel; forrageia em Clusia e leguminosas (Catálogo Moure)."},
 ma:{s:"c",loc:["Maranhão (sem município indicado)"]},dest:"Nomes populares borá-boi e borá-cavalo. Inclui Trigona heideri como sinônimo."},

{n:36,g:"Ptilotrigona",e:"lurida",dup:true,a:"Smith, 1854",lista:"Ptilotrigona heideri (Friese, 1900)",grp:"boras",pop:"Borá-cavalo",outros:[],man:"Sim",moure:117483,
 ma:{s:"r",nota:"Trigona heideri Friese, 1900 é sinônimo júnior de Ptilotrigona lurida (Smith, 1854) no Catálogo Moure. Esta entrada e a nº 37 são a mesma espécie."},
 dest:"Sinônimo de P. lurida: entrada duplicada na lista."},

{n:42,g:"Scaura",e:"latitarsis",a:"Friese, 1900",lista:"Scaura latitarsi (Friese, 1900)",grp:"boras",pop:"Mirim-de-perna-chata",outros:[],man:"Sim",moure:117737,
 bio:{nid:"Cupinzeiros arbóreos ativos, sobretudo de Nasutitermes",nota:"Comportamento especializado de coleta de pólen; associação mutualística com cochonilhas produtoras de cera (Camargo & Pedro, 2002, citado no Catálogo Moure)."},
 ma:{s:"c",loc:["Maranhão (Rebêlo et al., 2003)"]},dest:"Pernas traseiras achatadas; vive dentro de cupinzeiros ativos. Grafia corrigida para latitarsis."},

{n:43,g:"Scaura",e:"longula",a:"Lepeletier, 1836",grp:"boras",pop:"Jataí-negra",outros:["jataí-preta"],man:"Sim",moure:117732,
 bio:{nid:"Ocos de troncos e cupinzeiros",nota:"Não foi observada polinizando plantas cultivadas (cartão A.B.E.L.H.A.)."},
 ma:{s:"c",loc:["Buriticupu"]},dest:"Pequena abelha escura de ninhos em troncos e cupinzeiros."},

/* ================= PARTAMONA, PARATRIGONA, GEOTRIGONA ================= */
{n:26,g:"Partamona",e:"ailyae",a:"Camargo, 1980",grp:"cupiras",pop:"Cupira",outros:[],man:"Sim",moure:117434,
 bio:{nid:"Dentro de cupinzeiros (epígeos, no solo, em troncos podres ou em árvores vivas), com Syntermes molestus e Termes cf. medioculatus",nota:"Guardas com comportamento agressivo (Catálogo Moure)."},
 ma:{s:"c",loc:["Carolina","Carutapera","Chapadinha","Imperatriz","Mirador","Nova Olinda do Maranhão","São Luís","São Raimundo das Mangabeiras"]},dest:"A cupira com mais registros no Maranhão."},

{n:27,g:"Partamona",e:"chapadicola",a:"Pedro & Camargo, 2003",lista:"Partamona chapadicola (Pedro e Camargo, 2003)",grp:"cupiras",pop:"Cupira-da-chapada",outros:["boca-de-barro"],man:"Sim",moure:117423,
 bio:{nid:"Cupinzeiros dentro de árvores",nota:"Registros antigos de \"P. cupira\" no Maranhão correspondem a esta espécie (Catálogo Moure)."},
 ma:{s:"c",loc:["Balsas","Barreirinhas","Buriticupu","Carolina","Carutapera","Chapadinha","Pastos Bons","Rosário","São Luís","Timon"]},dest:"Ampla no Cerrado maranhense; confundida com P. cupira."},

{n:28,g:"Partamona",e:"combinata",a:"Pedro & Camargo, 2003",lista:"Partamona combinata (Pedro e Camargo, 2003)",grp:"cupiras",pop:"Cupira-da-amazônia",outros:[],man:"Sim",moure:117433,
 bio:{nid:"Cupinzeiros arbóreos externos (Nasutitermes cf. kemneri, Microcerotermes spp.)",nota:"Mantida por povos Kayapó e Kaxinawá (Catálogo Moure)."},
 ma:{s:"c",loc:["Imperatriz"]},dest:"Cupira amazônica de cupinzeiros arbóreos."},

{n:29,g:"Partamona",e:"cupira",a:"Smith, 1863",grp:"cupiras",pop:"Cupira",outros:["boca-de-sapo"],man:"Sim",moure:117438,
 bio:{nid:"Cupinzeiros epígeos",nota:"Comportamento agressivo; forma agregações de ninhos em cupinzeiros (Catálogo Moure)."},
 ma:{s:"r",nota:"Segundo o Catálogo Moure, P. cupira ocorre no DF, GO, MS, MG e SP e \"não ocorre no Maranhão\"; os registros do estado correspondem a P. chapadicola."},
 dest:"Registro no Maranhão considerado erro (é P. chapadicola)."},

{n:30,g:"Partamona",e:"nigrior",a:"Cockerell, 1925",lista:"Partamona aff nigrior (Cockerell, 1925)",aff:true,grp:"cupiras",pop:"Cupira",outros:[],man:"Sim",moure:117404,
 bio:{nid:"Ninhos de barro em paredes e troncos",nota:"No Brasil, P. nigrior só tem registro em Roraima (Catálogo Moure)."},
 ma:{s:"r",nota:"Os registros \"Partamona aff. nigrior\" do norte do Maranhão aparecem no Catálogo Moure como de identidade incerta, sob P. seridoensis. Confirmar com especialista."},
 dest:"Listada como \"aff.\"; provavelmente corresponde a P. seridoensis."},

{n:31,g:"Partamona",e:"pearsoni",a:"Schwarz, 1938",grp:"cupiras",pop:"Cupira-da-amazônia",outros:[],man:"Sim",moure:117421,
 bio:{nid:"Cupinzeiros arbóreos externos (Nasutitermes cf. peruanus, Amitermes excellens)",nota:"Coleta resina de Clusia (Catálogo Moure)."},
 ma:{s:"i",loc:["Alcântara","Buriticupu","Nova Olinda do Maranhão","Rosário"],nota:"Parte dos registros marcados como de identidade incerta."},dest:"Cupira de cupinzeiros arbóreos."},

{n:32,g:"Partamona",e:"seridoensis",a:"Pedro & Camargo, 2003",lista:"Partamona seridoensis (Pedro e Camargo, 2003)",grp:"cupiras",pop:"Cupira-do-Sertão",outros:["cupira"],man:"Sim",moure:117415,
 bio:{nid:"Cupinzeiros arbóreos externos de barro (Constrictotermes sp.)",nota:"Visita diversas plantas da Caatinga (Catálogo Moure)."},
 ma:{s:"c",loc:["Alto Parnaíba","Barreirinhas","Mirador","São Luís","Urbano Santos"]},dest:"Cupira do semiárido, em cupinzeiros de barro."},

{n:33,g:"Partamona",e:"testacea",a:"Klug, 1807",grp:"cupiras",pop:"Cupira-amarela",outros:["boca-de-barro"],man:"Sim",moure:117420,
 bio:{nid:"Cavidades subterrâneas em cupinzeiros (Syntermes spinosus) e formigueiros (Atta spp.)",nota:"Guardas defensivas; operárias poedeiras em colônias órfãs (Catálogo Moure)."},
 ma:{s:"c",loc:["Buriticupu","Imperatriz","Nova Olinda do Maranhão","Vitória do Mearim"]},dest:"Cupira amarelada de ninhos subterrâneos."},

{n:24,g:"Paratrigona",e:"lineata",a:"Lepeletier, 1836",grp:"cupiras",pop:"Cupira",outros:["jataí-da-terra","mosquito-do-chão"],man:"Sim",moure:117555,
 ficha:{nid:"Cavidades no solo",ninho:"Favos de cria horizontais sobrepostos, com presença de células reais, envoltos por invólucro. A entrada para o ninho tem o formato de pequena torre.",col:"Sem informações disponíveis",asp:"Seus ninhos estão alojados em cavidades previamente ocupadas por colônias de formigas, com mais de 1 m de profundidade. Ao tentar substituir a rainha-mãe, a atrativa rainha virgem pode depositar substâncias químicas sobre o corpo da rainha dominante, que será intensamente lambida e cortejada pelas operárias. Assim, as operárias avaliam qual rainha será eliminada.",voo:"Desconhecida",tam:"4,5 mm"},
 pol:["butiá-do-cerrado","morango","moressuma","pimentão"],
 ma:{s:"c",loc:["Norte do Maranhão (região setentrional)"]},dest:"Ninho subterrâneo a mais de 1 m, com entrada em pequena torre."},

{n:25,g:"Paratrigona",e:"peltata",a:"Spinola, 1853",lista:"Paratrigona peltata (Lepeletier, 1853)",grp:"cupiras",pop:"Mirim-peltata",outros:[],man:"Sim",moure:117554,
 bio:{nid:"Não informado no Catálogo Moure",nota:"Visita Miconia minutiflora e Pseudima frutescens (Catálogo Moure)."},
 ma:{s:"c",loc:["Carolina","Imperatriz"]},dest:"Autor corrigido: Spinola, 1853 (e não Lepeletier)."},

{n:9,g:"Geotrigona",e:"aequinoctialis",a:"Ducke, 1925",grp:"cupiras",pop:"Guiruçu",outros:["mombuca"],man:"Chão",moure:117638,
 bio:{nid:"Subterrâneo",nota:"Produz mel e cera; visita Rourea ligulata e Borreria verticillata (Catálogo Moure)."},
 ma:{s:"c",loc:["Alcântara","Barra do Corda","Buriticupu","Nina Rodrigues","São Luís","São Raimundo das Mangabeiras"]},dest:"Abelha de chão: ninho subterrâneo."},

{n:10,g:"Geotrigona",e:"mombuca",a:"Smith, 1863",grp:"cupiras",pop:"Mombuca",outros:["guira","guiruçu"],man:"Chão",moure:117637,
 ficha:{nid:"Cavidades no solo",ninho:"Favos de cria horizontais sobrepostos ou helicoidais, com células reais, envoltos por invólucro. Os potes de alimento são cilíndricos. Com depósitos de detritos permanentes. Camada de invólucro envolve o ninho. Possivelmente, as aberturas na parte inferior do ninho têm a mesma função que uma galeria de drenagem. Canal subterrâneo conecta o ninho à entrada.",col:"Uma rainha-mãe e 2.500 operárias em média (de 2.000 a 3.000 operárias)",asp:"Seus ninhos subterrâneos estão alojados em cavidades previamente ocupadas por ninhos de formigas-cortadeiras. As abelhas são mansas. Ao estender suas peças bucais, as forrageiras depositam compostos químicos, formando uma trilha de cheiro, que serve para recrutar companheiras de ninho para fontes de alimento.",voo:"Desconhecida",tam:"5 mm"},
 pol:["crambe"],
 ma:{s:"c",loc:["Alto Parnaíba","São Luís"]},dest:"Ninho subterrâneo em antigos formigueiros de saúva."},

/* ================= TRIGONA e OXYTRIGONA ================= */
{n:57,g:"Trigona",e:"spinipes",a:"Fabricius, 1793",grp:"trigona",pop:"Irapuá",outros:["arapuá","abelha-de-cachorro"],man:"Não",moure:118065,
 ficha:{nid:"Ninhos aéreos expostos",ninho:"Favos de cria horizontais sobrepostos, comumente dispostos em espiral, com células reais, e envoltos por invólucro. Potes de alimento são esféricos e há depósitos de cera marrom na periferia dos favos e de resina nas paredes internas do ninho. Ninhos possuem formato elipsoidal, com entrada ampla, oval e dividida por lamelas verticais internas.",col:"Uma rainha-mãe e 13.200 operárias em média (de 5.000 a 23.600 operárias)",asp:"Operárias são defensivas. Usam trilhas de cheiro para recrutar abelhas para fontes de alimento. Durante as horas mais quentes do dia, operárias fazem pequenas perfurações nas camadas externas do ninho, possivelmente, para melhorar a circulação do ar. O ninho é revestido por camadas de invólucro, composto por cerume, resina, barro, fibras e excrementos de vertebrados.",voo:"0,8 km",tam:"6,5 mm"},
 pol:["abacate","abiu","abóbora","acerola","butiá-do-cerrado","café","cajá","cenoura","chuchu","coco-da-bahia","copaíba","gergelim","girassol","goiaba","laranja","manga","macadâmia","melancia","melão","pera","pêssego","pimenta","pimentão","pinhão-manso","romã","tangerina","umbu","urucum"],
 ma:{s:"c",loc:["Arari","Barra do Corda","Carolina","Carutapera","Chapadinha","Codó","Imperatriz","Vitória do Mearim"]},dest:"Ninho aéreo exposto; visita a maior lista de cultivos entre as espécies do guia."},

{n:55,g:"Trigona",e:"pallens",a:"Fabricius, 1798",grp:"trigona",pop:"Olho-de-vidro",outros:["irapuá-amarela"],man:"Não",moure:118054,
 ficha:{nid:"No interior de cupinzeiros arbóreos",ninho:"Favos de cria horizontais sobrepostos. O tubo de entrada do ninho pode ser ornamentado com barro ou com resina e fragmentos florais coloridos. Com abertura relativamente ampla, algumas operárias se posicionam na sua parte interna.",col:"Uma rainha-mãe e 4.400 operárias em média (de 660 a 8.200 operárias)",asp:"Operárias vivem cerca de 29 dias. As operárias são muito defensivas, mesmo durante suas visitas às flores. Ocasionalmente, operárias podem coletar carne em decomposição, assim como óleos florais.",voo:"Desconhecida",tam:"5,5 mm"},
 pol:["açaí","acapu","cajá","camu-camu","cupuaçu","melão","murici"],
 ma:{s:"c",loc:["Maranhão (sem município indicado)"]},dest:"Tubo de entrada ornamentado com fragmentos florais coloridos."},

{n:49,g:"Trigona",e:"branneri",a:"Cockerell, 1912",grp:"trigona",pop:"Arapuá",outros:["guaxupé","abelha-corta-cabelo"],man:"Não",moure:118071,
 bio:{nid:"Troncos de palmeiras e árvores; locais expostos em árvores finas ou galhos altos",nota:"Associação com membracídeos; forrageamento agressivo e coleta em nectários extraflorais (Catálogo Moure)."},
 ma:{s:"c",loc:["Carutapera","Codó","São Luís"]},dest:"Defensiva; também chamada de abelha-corta-cabelo."},

{n:50,g:"Trigona",e:"dallatorreana",a:"Friese, 1900",grp:"trigona",pop:"Arapuá-vermelha",outros:[],man:"Não",moure:118085,
 bio:{nid:"Principalmente em cupinzeiros; também em galhos expostos de árvores altas",nota:"Destrói anteras de flores de Melastomataceae (Catálogo Moure)."},
 ma:{s:"c",loc:["Alcântara","Buriticupu","São Luís"]},dest:"Nidifica em cupinzeiros."},

{n:51,g:"Trigona",e:"fulviventris",a:"Guérin, 1844",lista:"Trigona fulviventris Guérin, 1837",grp:"trigona",pop:"Bunda-de-vaca",outros:[],man:"Não",moure:118057,
 bio:{nid:"Não informado nas fontes consultadas",nota:"Ampla distribuição, do México ao Brasil (Catálogo Moure). Ano corrigido de 1837 para 1844."},
 ma:{s:"c",loc:["Maranhão (sem município indicado)"]},dest:"Ano da descrição corrigido para 1844."},

{n:52,g:"Trigona",e:"fuscipennis",a:"Friese, 1900",grp:"trigona",pop:"Abelha-diabo",outros:["sanharó","corta-cabelo"],man:"Não",moure:118076,
 bio:{nid:"Cupinzeiros (principalmente Nasutitermes); às vezes cavidades de árvores",nota:"Forrageadora agressiva; conhecida por danos em bananeira e citros (Catálogo Moure)."},
 ma:{s:"i",loc:["Chapadinha","Vitória do Mearim","Baixada Maranhense"],nota:"O Catálogo Moure considera T. fuscipennis apenas do México ao oeste do Equador; os registros sul-americanos, inclusive do Maranhão, provavelmente são espécies ainda não descritas."},
 dest:"No Maranhão, provavelmente uma espécie ainda não descrita do grupo fuscipennis."},

{n:53,g:"Trigona",e:"hyalinata",a:"Lepeletier, 1836",grp:"trigona",pop:"Guaxupé",outros:["xupé","abelha-brava"],man:"Não",moure:118060,
 bio:{nid:"Ninhos expostos entre galhos ou fixos em troncos",nota:"Recrutamento em massa por trilhas de cheiro (Catálogo Moure)."},
 pol:["abóbora","butiá-do-cerrado","girassol","goiaba"],
 ma:{s:"c",loc:["São Luís"]},dest:"Ninho externo fixado em galhos."},

{n:54,g:"Trigona",e:"hypogea",a:"Silvestri, 1902",grp:"trigona",pop:"Abelha-abutre",outros:["mombuca-carniceira"],man:"Não",moure:118052,
 bio:{nid:"Subterrâneo e cavidades de árvores",nota:"Necrófaga obrigatória: usa carcaças de animais (cobras, lagartos, sapos) como fonte de alimento (Catálogo Moure). Não foi observada polinizando cultivos (cartão A.B.E.L.H.A.)."},
 ma:{s:"i",loc:["Maranhão (sem município indicado)"],nota:"O Catálogo Moure alerta que sob o nome T. hypogea há outras espécies não descritas."},dest:"Abelha que se alimenta de carniça em vez de pólen."},

{n:56,g:"Trigona",e:"recursa",a:"Smith, 1863",grp:"trigona",pop:"Feiticeira",outros:["vamos-embora"],man:"Não",moure:118068,
 bio:{nid:"Subterrâneo (em cupinzeiros, entre raízes e em formigueiros)",nota:"Trilhas de cheiro com secreção de glândulas labiais; necrofagia facultativa (Catálogo Moure)."},
 ma:{s:"c",loc:["Buriticupu","Chapadinha"]},dest:"Ninho subterrâneo, em cupinzeiros ou entre raízes."},

{n:58,g:"Trigona",e:"truculenta",a:"Almeida, 1984",grp:"trigona",pop:"Sanharão",outros:["sanharó"],man:"Não",moure:118053,
 bio:{nid:"Cavidades abertas em troncos, semiexpostas",nota:"Muito defensiva; visita carcaças e excrementos (Catálogo Moure)."},
 ma:{s:"c",loc:["Balsas","Caxias","Chapadinha"]},dest:"Muito defensiva; evitar aproximação do ninho."},

{n:59,g:"Trigona",e:"williana",a:"Friese, 1900",grp:"trigona",pop:"Borá-mansa-laranja",outros:["arapuá-amarelo-maior"],man:"Sim",moure:118056,
 bio:{nid:"Ocos de árvores; também cupinzeiros em troncos",nota:"Forrageamento agressivo; destrói anteras de Melastomataceae (Catálogo Moure)."},
 ma:{s:"c",loc:["Buriticupu"]},dest:"Única Trigona da lista marcada como manejável."},

{n:22,g:"Oxytrigona",e:"tataira",a:"Smith, 1863",lista:"Oxytrigona tataira Smith, 1863",grp:"trigona",pop:"Caga-fogo",outros:["tataíra"],man:"Sim",moure:118428,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais e em espiral, com células reais em sua periferia, e envoltos por invólucro. Um túnel de acesso comunica o ninho com sua entrada. Construída com cerume, a entrada consiste em uma fissura em formato elipsoidal, que não se projeta sobre a superfície do tronco.",col:"Sem informações disponíveis",asp:"Operárias com comportamento muito defensivo. Elas depositam uma substância cáustica, produzida por suas glândulas, em possíveis invasores de seus ninhos, provocando queimaduras. As operárias coletam secreções açucaradas de cigarrinhas que sugam a seiva das plantas.",voo:"Desconhecida",tam:"5,5 mm"},
 ma:{s:"r",nota:"O Catálogo Moure registra como erro a citação de Rebêlo et al. (2003): \"O. tataira does not occur in Maranhão\". A espécie do gênero confirmada no estado é O. ignis (nº 23)."},
 dest:"Secreção cáustica que queima a pele. Registro no Maranhão considerado erro."},

{n:23,g:"Oxytrigona",e:"ignis",a:"Camargo, 1984",lista:"Oxytrigona nigris (Camargo, 1984)",grp:"trigona",pop:"Caga-fogo-preta",outros:["tataíra-preta"],man:"Sim",moure:118432,
 bio:{nid:"Árvores",nota:"Espécie amazônica (AM, MA, PA). Como as demais Oxytrigona, defende o ninho com secreção cáustica."},
 ma:{s:"c",loc:["Carutapera"]},dest:"O nome \"Oxytrigona nigris\" não existe no Catálogo Moure; o nome válido correspondente é Oxytrigona ignis Camargo, 1984 (tataíra-preta)."},

/* ================= LESTRIMELITTA ================= */
{n:12,g:"Lestrimelitta",e:"limao",a:"Smith, 1863",grp:"limao",pop:"Limão",outros:["iratim","irati"],man:"Sim",moure:118496,
 ficha:{nid:"Ocos em árvores",ninho:"Favos de cria horizontais sobrepostos, com células reais, envoltos por invólucro. A entrada do ninho é constituída por um tubo de cerume que, aos poucos, é aumentado em comprimento. Lateralmente a esse tubo principal, há muitas ramificações, que são raramente ou nada usadas como entrada para o ninho (entradas falsas).",col:"Uma rainha-mãe e 4.500 operárias em média (de 2.000 a 7.000 operárias)",asp:"Como as operárias não possuem corbícula funcional, elas não obtêm alimento das flores e sim do roubo de recursos estocados em ninhos de outras espécies de abelhas sociais. Ao se aproximarem do \"ninho-alvo\", liberam um forte cheiro de limão, o invadem, agridem as abelhas residentes (ou matam aquelas que tentam impedir o ataque) e saqueiam pólen, mel e alimento larval.",voo:"Desconhecida",tam:"6,5 mm"},
 ma:{s:"c",loc:["Barreirinhas","Carutapera","Urbano Santos"]},dest:"Abelha-ladra: saqueia meliponários. Não é criada para produção."},

{n:13,g:"Lestrimelitta",e:"monodonta",a:"Camargo & Moure, 1989",lista:"Lestrimelitta monodonta (Camargo e Moure, 1989)",grp:"limao",pop:"Limão",outros:[],man:"Sim",moure:118520,
 bio:{nid:"Não informado no Catálogo Moure",nota:"Cleptobiótica: rouba alimento de ninhos de outras abelhas (Kerr et al., 2005, citado no Catálogo Moure)."},
 ma:{s:"c",loc:["Urbano Santos"]},dest:"Abelha-ladra."},

{n:14,g:"Lestrimelitta",e:"rufipes",a:"Friese, 1903",grp:"limao",pop:"Iraxim",outros:["limão"],man:"Sim",moure:118502,
 bio:{nid:"Ocos de troncos",nota:"Ataques em massa a colônias de outras abelhas, com liberação de citral (cheiro de limão) (Catálogo Moure)."},
 ma:{s:"c",loc:["Barra do Corda"]},dest:"Abelha-ladra."}
];

const GROUPS = [
 {id:"melipona",t:"Uruçus, tiúba e jandaíra",gen:"Melipona",d:"Abelhas grandes (9 a 11,5 mm) da meliponicultura. Ninhos em ocos de árvores, com entrada de barro em raios convergentes e batume delimitando a cavidade."},
 {id:"scapto",t:"Tubunas e canudos",gen:"Scaptotrigona",d:"Colônias populosas, com células reais e tubo de entrada de cerume. Recrutam companheiras por trilhas de cheiro."},
 {id:"mirins",t:"Jataí, iraí e mirins",gen:"Tetragonisca · Nannotrigona · Plebeia · Leurotrigona · Trigonisca · Celetrigona",d:"Abelhas pequenas (3 a 4 mm) que ocupam cavidades pequenas em árvores, muros e moirões."},
 {id:"frieso",t:"Moças-brancas e marmeladas",gen:"Frieseomelitta",d:"Cria em cachos, sem favos, e muita resina estocada. Várias resistem bem à seca."},
 {id:"boras",t:"Borás, mombucões e afins",gen:"Tetragona · Cephalotrigona · Ptilotrigona · Scaura",d:"Grupo diverso, de borás muito defensivas a mombucões mansos, e as Scaura que vivem em cupinzeiros."},
 {id:"cupiras",t:"Cupiras e abelhas de chão",gen:"Partamona · Paratrigona · Geotrigona",d:"Ninhos em cupinzeiros, formigueiros ou no subsolo. Exigem manejo diferente das espécies de caixa."},
 {id:"trigona",t:"Arapuás e caga-fogos",gen:"Trigona · Oxytrigona",d:"Espécies defensivas. A maioria das Trigona não é manejável e as Oxytrigona liberam secreção cáustica."},
 {id:"limao",t:"Abelhas-limão",gen:"Lestrimelitta",d:"Cleptobióticas: não visitam flores para alimento e saqueiam ninhos de outras abelhas."}
];
