/**
 * Lucemburkové — český stát za vlády Lucemburků
 * Otázky řazeny chronologicky sestupně (od začátku rodu po konec)
 */
var QUESTIONS = [
  // ===== NÁSTUP LUCEMBURKŮ =====
  {
    question: "Proč na český trůn nastoupili Lucemburkové?",
    options: [
      "Protože rod Přemyslovců vymřel po meči smrtí Václava III.",
      "Protože Přemyslovci dobrovolně předali vládu",
      "Protože Lucemburkové vyhráli válku o český trůn"
    ],
    correct: 0,
    explanation: "Smrtí Václava III. rod Přemyslovců vymřel po meči. Po čtyřech letech sporů o korunu nastoupili v roce 1310 na trůn panovníci z rodu Lucemburků."
  },

  // ===== JAN LUCEMBURSKÝ =====
  {
    question: "Jak se jmenoval první král z rodu Lucemburků?",
    options: [
      "Karel IV.",
      "Jan Lucemburský",
      "Zikmund Lucemburský"
    ],
    correct: 1,
    explanation: "Prvním Lucemburkem na českém trůně byl Jan Lucemburský, syn římskoněmeckého krále. Nastoupil na český trůn ve 14 letech v roce 1310."
  },
  {
    question: "Koho si vzal Jan Lucemburský za manželku?",
    options: [
      "Elišku Přemyslovnu — sestru zavražděného Václava III.",
      "Annu Falckou — dceru německého knížete",
      "Blanku z Valois — francouzskou princeznu"
    ],
    correct: 0,
    explanation: "Jan Lucemburský se oženil s princeznou Eliškou Přemyslovnou, sestrou zavražděného Václava III. Tím získal nárok na český trůn."
  },
  {
    question: "Proč se Janu Lucemburskému říkalo 'král cizinec'?",
    options: [
      "Protože nerozuměl řeči ani potřebám země a většinu času pobýval na válečných taženích",
      "Protože pocházel z Francie",
      "Protože vládl z ciziny a nikdy do Čech nepřijel"
    ],
    correct: 0,
    explanation: "Jan Lucemburský se příliš nevěnoval záležitostem českého království. Nerozuměl řeči ani potřebám země, většinu času pobýval na válečných taženích nebo na rytířských turnajích."
  },
  {
    question: "Kde a jak zemřel Jan Lucemburský?",
    options: [
      "Padl v bitvě u Kresčaku ve Francii roku 1346",
      "Zemřel v Praze roku 1350 na mor",
      "Padl v bitvě u Lipan roku 1434"
    ],
    correct: 0,
    explanation: "Jan Lucemburský padl v bitvě u Kresčaku ve Francii v roce 1346 — nejkrvavější bitva stoleté války mezi Anglií a Francií. Bojoval jako spojenec francouzského krále, už jako slepý. Jsou známá jeho slova: 'Toho bohdá nebude, aby český král z boje utíkal!'"
  },

  // ===== KAREL IV. =====
  {
    question: "Kdo byl Karel IV. a kdo byli jeho rodiče?",
    options: [
      "Syn Jana Lucemburského a Elišky Přemyslovny, nejvýznamnější panovník v historii českého státu",
      "Syn Zikmunda Lucemburského a Elišky Přemyslovny",
      "Syn Václava IV. a francouzské princezny"
    ],
    correct: 0,
    explanation: "Karel IV. byl syn Jana Lucemburského a Elišky Přemyslovny. Narodil se roku 1316. Je nazýván Otcem vlasti a je považován za nejvýznamnějšího panovníka v tisícileté historii českého státu."
  },
  {
    question: "Proč si syn Jana Lucemburského změnil jméno z Václav na Karel?",
    options: [
      "Podle svého strýce a kmotra — francouzského krále Karla",
      "Podle římského císaře Karla Velikého",
      "Protože jméno Václav bylo zakázáno papežem"
    ],
    correct: 0,
    explanation: "Od sedmi let byl vychováván ve Francii na královském dvoře. Jméno Václav si změnil na Karel podle strýce a kmotra — francouzského krále."
  },
  {
    question: "Jaké tituly měl Karel IV.?",
    options: [
      "Byl český král, římskoněmecký král a římský císař",
      "Byl pouze český král",
      "Byl český a polský král"
    ],
    correct: 0,
    explanation: "Karel IV. se za života otce stal římskoněmeckým králem (již čtvrtý jména Karel, proto Karel IV.) a později byl korunován papežem na římského císaře — vládce Svaté říše římské. Po smrti otce se roku 1347 stal českým králem."
  },
  {
    question: "Co jsou korunovační klenoty a kde jsou uloženy?",
    options: [
      "Svatováclavská koruna, jablko a žezlo — uloženy v chrámu sv. Víta na Pražském hradě",
      "Koruna, meč a štít — uloženy na hradě Karlštejn",
      "Koruna, prsten a plášť — uloženy v Národním muzeu"
    ],
    correct: 0,
    explanation: "Karel IV. nechal ke své korunovaci zhotovit korunovační klenoty: svatováclavskou korunu, jablko a žezlo. Jsou uloženy v chrámu sv. Víta na Pražském hradě."
  },
  {
    question: "Podle koho se jmenuje svatováclavská koruna?",
    options: [
      "Podle krále Václava IV.",
      "Podle patrona české země — svatého Václava",
      "Podle Václava III., posledního Přemyslovce"
    ],
    correct: 1,
    explanation: "Svatováclavská koruna je nazvaná podle patrona české země — sv. Václava. Je vyrobena ze zlata, váží 2,5 kg a zdobí ji 90 drahokamů a 20 perel."
  },
  {
    question: "Co je Zlatá bula z roku 1356 vydaná Karlem IV.?",
    options: [
      "Listina, která zajistila právo svobodné volby českého krále v případě, že panovnický rod vymřel",
      "Listina, která potvrzovala nezávislost českého království na Svaté říši římské",
      "Listina, která zakládala Karlovu univerzitu"
    ],
    correct: 0,
    explanation: "V roce 1356 Karel IV. vydal Zlatou bulu — listinu, která zajistila právo svobodné volby českého krále v případě, že panovnický rod vymřel."
  },
  {
    question: "Jak se liší Zlatá bula z roku 1356 od Zlaté buly sicilské z roku 1212?",
    options: [
      "Zlatá bula sicilská (1212) potvrzovala dědičný královský titul Přemyslovcům, Zlatá bula (1356) zajistila právo svobodné volby českého krále, když rod vymřel",
      "Obě listiny jsou totožné, jen byly vydány jinými panovníky",
      "Zlatá bula sicilská zakládala univerzitu, Zlatá bula z 1356 zakládala Karlův most"
    ],
    correct: 0,
    explanation: "Zlatá bula sicilská z roku 1212 potvrzovala dědičný královský titul českým Přemyslovcům. Zlatá bula Karla IV. z roku 1356 zajistila právo svobodné volby českého krále v případě, že panovnický rod vymřel."
  },
  {
    question: "Která čtyři místa založil Karel IV.?",
    options: [
      "Nové Město pražské, Karlovu univerzitu, Karlův most, hrad Karlštejn",
      "Staré Město pražské, Pražský hrad, Vyšehrad, Juditin most",
      "Kutnou Horu, Tábor, Plzeň, České Budějovice"
    ],
    correct: 0,
    explanation: "Karel IV. založil: Nové Město pražské, Karlovu univerzitu (1348, první univerzita ve střední Evropě), Karlův most (nejstarší most přes Vltavu), hrad Karlštejn a katedrálu sv. Víta. Nechal také postavit Hladovou zeď na Petříně."
  },
  {
    question: "V jakém roce byla založena Karlova univerzita a čím je výjimečná?",
    options: [
      "V roce 1348 — byla to první univerzita ve střední Evropě",
      "V roce 1310 — byla to největší univerzita v Evropě",
      "V roce 1378 — byla to první českojazyčná univerzita"
    ],
    correct: 0,
    explanation: "Karel IV. založil Karlovu univerzitu v roce 1348. Byla to první univerzita ve střední Evropě. Za jeho vlády patřila Praha k největším městům Evropy a stala se centrem vzdělanosti."
  },
  {
    question: "Co byl Karlův most a proč byl postaven?",
    options: [
      "Nejstarší most přes Vltavu, postaven místo původního Juditina mostu, který strhla povodeň",
      "Most přes Labe spojující Prahu s Drážďany",
      "Dřevěný most spojující Staré a Nové Město"
    ],
    correct: 0,
    explanation: "Karlův most je nejstarší most přes Vltavu. Byl postaven místo původního Juditina mostu, který strhla povodeň."
  },
  {
    question: "Kdy zemřel Karel IV. a kde je pohřben?",
    options: [
      "Roku 1378, pohřben ve chrámu sv. Víta",
      "Roku 1346, pohřben na hradě Karlštejn",
      "Roku 1400, pohřben v Karlově univerzitě"
    ],
    correct: 0,
    explanation: "Karel IV. zemřel roku 1378 a byl pohřben ve chrámu sv. Víta na Pražském hradě."
  },

  // ===== VÁCLAV IV. =====
  {
    question: "Kdo nastoupil na trůn po Karlu IV.?",
    options: [
      "Jeho syn Václav IV.",
      "Jeho bratr Zikmund",
      "Jan Lucemburský mladší"
    ],
    correct: 0,
    explanation: "Po smrti Karla IV. nastoupil na trůn jeho syn Václav IV. Byl českým a římským králem. Měl výborné vzdělání, ale panování mu příliš nešlo."
  },
  {
    question: "Proč byl Václav IV. považován za slabého panovníka?",
    options: [
      "Chyběly mu zkušenosti a diplomatické schopnosti, vládl ve složité době plné nepokojů",
      "Protože odmítal vládnout a žil v cizině",
      "Protože byl příliš mladý a brzy zemřel"
    ],
    correct: 0,
    explanation: "Václavu IV. chyběly zkušenosti a diplomatické schopnosti. Vládl ve složité době plné nepokojů, hospodářských problémů, válek a nespokojenosti s církví. Zemi postihl mor. Zemřel bez potomků roku 1419."
  },

  // ===== ZIKMUND =====
  {
    question: "Kdo byl posledním králem z rodu Lucemburků a jak rod dopadl?",
    options: [
      "Zikmund Lucemburský — zemřel roku 1437 bez mužského potomka a rod vymřel po meči",
      "Václav IV. — zemřel roku 1419 a rod vymřel po meči",
      "Karel IV. — zemřel roku 1378 a rod pokračoval Jagellonci"
    ],
    correct: 0,
    explanation: "Posledním králem z rodu Lucemburků byl Zikmund (přezdívaný 'liška ryšavá'). Po smrti bratra Václava IV. usedl na český trůn. Zemřel roku 1437 bez mužského potomka a rod Lucemburků vymřel po meči."
  },
  {
    question: "Jakou přezdívku měl Zikmund Lucemburský?",
    options: [
      "Král cizinec",
      "Otec vlasti",
      "Liška ryšavá"
    ],
    correct: 2,
    explanation: "Zikmundovi se říkalo 'liška ryšavá'. Byl uherským králem a římským císařem. Mezi prostým lidem byl neoblíbený. Českým králem se nakonec stal až po bitvě u Lipan."
  },

  // ===== ŽIVOT VE STŘEDOVĚKU =====
  {
    question: "Kdo žil na středověké vesnici?",
    options: [
      "Rolníci, bezzemci (pracovali na cizí půdě) a sedláci (bohatí, ale měli malé zastoupení)",
      "Pouze šlechtici a kněží",
      "Řemeslníci a obchodníci"
    ],
    correct: 0,
    explanation: "Na vesnici žili poddaní: rolníci, bezzemci (nevlastnili pozemky a pracovali na cizí půdě) a sedláci (byli bohatí, ale měli malé zastoupení). Bydleli v dřevěných domech s kamennou podezdívkou."
  },
  {
    question: "Kdo tvořil obyvatelstvo středověkých měst?",
    options: [
      "Obchodníci (nejbohatší), řemeslníci (sdružovali se do cechů) a chudina (tovaryši, učedníci, žebráci)",
      "Pouze šlechta a duchovenstvo",
      "Pouze rolníci, kteří se přestěhovali z vesnic"
    ],
    correct: 0,
    explanation: "Měšťané se dělili na: obchodníky (nejbohatší), řemeslníky (sdružovali se do cechů — kováři, truhláři, krejčí, obuvníci) a chudinu bez majetku (tovaryši, učedníci, dělníci, žebráci)."
  },
  {
    question: "Jak vypadalo středověké město?",
    options: [
      "Vznikalo u hradů, střed tvořilo náměstí s tržištěm, kostelem a radnicí, chráněno hradbou a příkopem",
      "Města neměla hradby a byla rozložena podél řek",
      "Města tvořily pouze kamenné hrady a kláštery"
    ],
    correct: 0,
    explanation: "Středověká města vznikala u hradů a šlechtických sídel. Střed města tvořilo náměstí s tržištěm, kostel a radnice. Město bylo chráněno hradbou a příkopem. Na domech byly vývěsní štíty s obrázky, protože prostí lidé neuměli číst."
  },
  {
    question: "Jaké postavení měla šlechta a jak se dělila?",
    options: [
      "Páni (žili v hradech, vlastnili velká panství) a zemané (žili ve tvrzích, vlastnili jednu vesnici)",
      "Šlechta neexistovala, všichni byli si rovni",
      "Vévodové (vládli krajům) a baroni (veleli vojskům)"
    ],
    correct: 0,
    explanation: "Po panovníkovi měla šlechta nejvyšší postavení. Dělila se na: pány (žili v hradech, vlastnili velká panství a hodně poddaných) a zemany (žili ve tvrzích, vlastnili jednu vesnici)."
  },
  {
    question: "Co museli poddaní odvádět a komu?",
    options: [
      "Poddanské dávky v penězích nebo část úrody (desátky) — králi, šlechtě a církvi",
      "Pouze vojenskou službu králi",
      "Nic, byli svobodní"
    ],
    correct: 0,
    explanation: "Poddaní museli odvádět králi, šlechtě a církvi poddanské dávky v penězích nebo část úrody (desátky). Peníze získávali prodejem úrody a výrobků."
  },

  // ===== GOTICKÝ SLOH =====
  {
    question: "Které tři prvky jsou typické pro gotický sloh?",
    options: [
      "Lomený oblouk, žebrová klenba, vnější opěrný systém (oblouky a pilíře)",
      "Půlkruhový oblouk, kopule, sloupy",
      "Rovná střecha, malá okna, hladké zdi"
    ],
    correct: 0,
    explanation: "Typické prvky gotického slohu: lomený oblouk, žebrová klenba, vnější opěrný systém (oblouky a opěrné pilíře odlehčily zdi). Stavby směřovaly do výšky (vertikalismus)."
  },
  {
    question: "Co jsou vitráže v gotických stavbách?",
    options: [
      "Okna z barevných skel, která propouštějí hodně světla",
      "Malby na stěnách kostela",
      "Sochy svatých umístěné na střeše"
    ],
    correct: 0,
    explanation: "Vitráže jsou okna z barevných skel typická pro gotické stavby. Propouštějí hodně světla a mají tvar obdélníku zakončený lomeným obloukem."
  },
  {
    question: "Co jsou chrliče a fiály v gotické architektuře?",
    options: [
      "Chrliče jsou figury chrlící vodu, fiály jsou špičaté věžičky zdobící opěrné pilíře",
      "Chrliče jsou zvony ve věžích, fiály jsou malované okenice",
      "Chrliče jsou ozdobné sloupy, fiály jsou kamenné podlahy"
    ],
    correct: 0,
    explanation: "Chrliče jsou figury (sochy) chrlící vodu — sloužily k odvodu dešťové vody. Fiály jsou špičaté věžičky, které zdobí opěrné pilíře gotických staveb."
  },
  {
    question: "Co je vertikalismus v gotickém slohu?",
    options: [
      "Stavby směřují do výšky — jsou vysoké a štíhlé",
      "Stavby jsou široké a nízké",
      "Stavby mají kulaté kopule"
    ],
    correct: 0,
    explanation: "Vertikalismus znamená, že gotické stavby směřují do výšky — jsou vysoké a štíhlé. To je hlavní odlišnost od románského slohu, kde byly stavby masivnější."
  },

  // ===== DOPLŇKOVÉ OTÁZKY =====
  {
    question: "Jak se jmenuje katedrála na Pražském hradě, kterou založil Karel IV.?",
    options: [
      "Katedrála svatého Víta, Václava a Vojtěcha",
      "Katedrála svatého Jana",
      "Betlémská kaple"
    ],
    correct: 0,
    explanation: "Katedrála svatého Víta, Václava a Vojtěcha je gotická stavba zasvěcená třem světcům. Založil ji Karel IV. a je součástí Pražského hradu."
  },
  {
    question: "Co byla Hladová zeď na Petříně?",
    options: [
      "Zeď postavená Karlem IV. v době hladomoru, aby poskytl lidem práci",
      "Obranná zeď proti husitům",
      "Zeď kolem královské zahrady"
    ],
    correct: 0,
    explanation: "Hladová zeď na Petříně byla postavena za Karla IV. v době hladomoru, aby poskytl lidem práci a obživu."
  },
  {
    question: "Jak církev získávala peníze ve středověku?",
    options: [
      "Z poplatků za církevní úkony, vlastnila kostely, kláštery i vesnice s poddanými",
      "Pouze z darů od králů",
      "Prodejem zemědělských výrobků"
    ],
    correct: 0,
    explanation: "Církev vlastnila kostely, kláštery i vesnice s poddanými. Peníze získávala z poplatků za církevní úkony. Vysocí představitelé byli arcibiskupové a biskupové, řadoví představitelé byli kněží a mniši."
  },
  {
    question: "Co byly řemeslnické cechy?",
    options: [
      "Sdružení řemeslníků stejného oboru — kováři, truhláři, krejčí, obuvníci",
      "Vojenské jednotky složené z řemeslníků",
      "Školy, kde se učily děti řemeslníků"
    ],
    correct: 0,
    explanation: "Cechy byly sdružení řemeslníků stejného oboru. Existovaly cechy kovářů, truhlářů, krejčích, obuvníků a dalších. Řemeslníci tvořili důležitou součást městského obyvatelstva."
  }
];
