/**
 * Husité a doba pohusitská
 * Test pokrývající kapitoly 12 & 13 — zaměřeno na otázky z testu
 */
var QUESTIONS = [
  // ===== 1. MISTR JAN HUS =====
  {
    question: "Kdo byl Jan Hus?",
    options: [
      "Kněz, kazatel a profesor na pražské univerzitě, který kritizoval církev",
      "Český král, který vládl po Václavu IV.",
      "Velitel husitského vojska z jižních Čech"
    ],
    correct: 0,
    explanation: "Jan Hus byl kněz, kazatel a profesor na pražské univerzitě. Byl nejvýznamnější osobou v boji za nápravu církve. Narodil se v chudé rodině v jihočeském městečku Husinec."
  },
  {
    question: "Kde Jan Hus kázal?",
    options: [
      "V katedrále sv. Víta",
      "V Betlémské kapli v Praze",
      "Na Staroměstském náměstí"
    ],
    correct: 1,
    explanation: "Jan Hus kázal v Betlémské kapli v Praze. Svá kázání přednášel česky a na jeho bohoslužby chodilo mnoho lidí."
  },
  {
    question: "Proč Jan Hus kritizoval církev?",
    options: [
      "Protože církev zbohatla, kněží žili v přepychu a prodávali odpustky",
      "Protože církev stavěla málo kostelů",
      "Protože církev neměla dost kněží"
    ],
    correct: 0,
    explanation: "Hus kritizoval společenské a církevní poměry — církev nesmírně zbohatla, kněží žili v přepychu jako šlechta, prodávali odpustky a zanedbávali své povinnosti."
  },
  {
    question: "Co byly odpustky?",
    options: [
      "Dary pro chudé lidi od církve",
      "Doklady od církve, které za peníze odpouštěly hříchy",
      "Povolení ke stavbě kostelů"
    ],
    correct: 1,
    explanation: "Odpustky si lidé kupovali od církve — tomu, kdo si odpustky koupil, měly být odpuštěny jeho zlé skutky. Prodej odpustků vyvolával největší odpor."
  },
  {
    question: "Kdy a kde zemřel Jan Hus?",
    options: [
      "6. července 1415, byl upálen za hradbami města Kostnice",
      "30. července 1419, zemřel v Praze",
      "V roce 1414, byl popraven na církevním sněmu v Praze"
    ],
    correct: 0,
    explanation: "6. července 1415 byl Jan Hus upálen za hradbami města Kostnice (na území dnešního Německa). Protože neodvolal své učení, byl prohlášen za kacíře a upálen. Den jeho upálení je dnes státním svátkem ČR."
  },
  {
    question: "Proč byl Jan Hus upálen?",
    options: [
      "Protože vedl vojsko proti králi",
      "Protože neodvolal své učení a byl prohlášen za kacíře",
      "Protože odmítl zaplatit daně církvi"
    ],
    correct: 1,
    explanation: "V roce 1414 ho král Zikmund Lucemburský vylákal na církevní sněm (koncil) do Kostnice, aby tam vysvětlil své myšlenky. Byl uvězněn a prohlášen za kacíře. Protože neodvolal své učení, byl 6. července 1415 upálen."
  },

  // ===== 2. HUSITSKÉ HNUTÍ =====
  {
    question: "Jaký byl symbol (znak) husitů?",
    options: [
      "Kříž",
      "Kalich",
      "Meč"
    ],
    correct: 1,
    explanation: "Husité měli ve znaku kalich — symbol rovnosti. Kalich představoval přijímání vína z kalicha pro všechny věřící, nejen pro kněze."
  },
  {
    question: "Jaký byl symbol křižáků?",
    options: [
      "Kalich",
      "Orlice",
      "Kříž — symbol křesťanů, nosili ho na oděvech"
    ],
    correct: 2,
    explanation: "Křižáci byli vojáci najatí papežem a na svých oděvech nosili kříž — symbol křesťanů."
  },
  {
    question: "Co znamená přijímání pod obojí?",
    options: [
      "Věřící při svatém přijímání dostávají chléb (tělo Krista) i víno z kalicha (krev Kristova)",
      "Věřící se modlí ve dvou jazycích — latinsky a česky",
      "Věřící chodí na bohoslužby do dvou kostelů"
    ],
    correct: 0,
    explanation: "Přijímání pod obojí znamená, že věřící při svatém přijímání konzumují chléb (hostii = tělo Krista) i víno z kalicha (krev Kristova). Dříve směli z kalicha pít víno jen představitelé církve. Husité vyžadovali přijímání z kalicha pro všechny."
  },
  {
    question: "Kdy a kde byla první pražská defenestrace?",
    options: [
      "30. července 1419 v Praze — husité vyhodili z oken radnice katolické radní",
      "6. července 1415 v Kostnici",
      "V roce 1420 na Pražském hradě"
    ],
    correct: 0,
    explanation: "30. července 1419 proběhla první pražská defenestrace — husité v čele s knězem Janem Želivským vyhodili z oken radnice nenáviděné katolické radní, kteří tam zasedali."
  },
  {
    question: "Co znamená slovo 'defenestrace'?",
    options: [
      "Vyhození z oken",
      "Sesazení z trůnu",
      "Vyhnání z města"
    ],
    correct: 0,
    explanation: "Defenestrace znamená vyhození z oken (z latinského 'fenestra' = okno). Při první pražské defenestraci 30. 7. 1419 husité vyhodili z oken radnice katolické radní."
  },

  // ===== 3. KŘÍŽOVÉ VÝPRAVY =====
  {
    question: "Kdo velel husitskému vojsku?",
    options: [
      "Prokop Holý",
      "Jan Žižka z Trocnova",
      "Zikmund Lucemburský"
    ],
    correct: 1,
    explanation: "Husitskému vojsku velel vojevůdce Jan Žižka z Trocnova. Pocházel z chudého šlechtického rodu z jižních Čech. Všechny bitvy, které vedl, vyhrál — vedl vojsko i jako úplně slepý."
  },
  {
    question: "Proti komu husité bojovali v křížových výpravách?",
    options: [
      "Proti Turkům",
      "Proti křižákům — vojákům najatým papežem, s podporou Zikmunda Lucemburského",
      "Proti polskému králi"
    ],
    correct: 1,
    explanation: "Husité bojovali proti křižákům. Křížové výpravy vyhlašoval papež proti nepřátelům katolické víry. Vojáky najímal papež a s jejich pomocí se chtěl Zikmund zmocnit českého trůnu."
  },
  {
    question: "Kdo vyhlašoval a najímal vojáky pro křížové výpravy proti husitům?",
    options: [
      "Český král Václav IV.",
      "Papež",
      "Anglický král"
    ],
    correct: 1,
    explanation: "Křížové výpravy proti husitům vyhlašoval papež. Najatí vojáci (křižáci) nosili na oděvech kříž — symbol křesťanů. Všech pět křížových výprav skončilo porážkou křižáků."
  },
  {
    question: "Kolik křížových výprav bylo vedeno proti husitům a kdo vyhrál?",
    options: [
      "Tři výpravy, vyhrál Zikmund",
      "Pět výprav, všechny vyhráli husité",
      "Sedm výprav, střídavé úspěchy"
    ],
    correct: 1,
    explanation: "V letech 1420–1433 bylo proti husitům pořádáno pět křížových výprav. Všech pět skončilo porážkou křižáků a vítězstvím husitů."
  },
  {
    question: "Která z těchto bitev byla první velkou výhrou husitů?",
    options: [
      "Bitva u Lipan",
      "Bitva u Domažlic",
      "Bitva u Sudoměře (1420)"
    ],
    correct: 2,
    explanation: "Bitva u Sudoměře roku 1420 byla první z velkých husitských vítězných bitev. Jan Žižka s několika stovkami husitů využil vozy a opevnil se na hrázi rybníků."
  },
  {
    question: "Která bitva u Domažlic roku 1431 byla nejslavnějším husitským vítězstvím?",
    options: [
      "Křižáci utekli, když uslyšeli husitský chorál 'Ktož jsú boží bojovníci'",
      "Husité použili novou zbraň — děla",
      "Jan Žižka osobně vedl útok"
    ],
    correct: 0,
    explanation: "Pod vedením Prokopa Holého zahnali husité na útěk početné křižácké vojsko v bitvě u Domažlic roku 1431. Křižáci se údajně rozprchli, když uslyšeli zpěv husitských bojovníků — píseň 'Ktož jsú boží bojovníci'."
  },
  {
    question: "Jakou bitvou končí husitské hnutí a co se v ní stalo?",
    options: [
      "Bitvou u Domažlic 1431 — husité definitivně porazili křižáky",
      "Bitvou u Lipan 1434 — bojovní husité s Prokopem Holým byli poraženi panským vojskem",
      "Bitvou u Sudoměře 1420 — Jan Žižka padl"
    ],
    correct: 1,
    explanation: "Bitvou u Lipan roku 1434 končí husitské hnutí. Skupina bojovných husitů v čele s Prokopem Holým byla poražena panským vojskem. Prokop Holý v boji padl."
  },
  {
    question: "Kdo se stal českým králem po bitvě u Lipan?",
    options: [
      "Jan Žižka",
      "Jiří z Poděbrad",
      "Zikmund Lucemburský"
    ],
    correct: 2,
    explanation: "Po vítězství panských vojsk v bitvě u Lipan byl uznán českým králem Zikmund Lucemburský."
  },
  {
    question: "Které tři bitvy patří mezi nejznámější husitské bitvy?",
    options: [
      "Bitva u Sudoměře, bitva u Domažlic, bitva u Lipan",
      "Bitva u Moháče, bitva u Kostnice, bitva u Tábora",
      "Bitva u Prahy, bitva u Brna, bitva u Plzně"
    ],
    correct: 0,
    explanation: "Mezi nejznámější husitské bitvy patří: bitva u Sudoměře (1420, první velká výhra), bitva na Vítkově, bitva pod Vyšehradem, bitva u Kutné Hory, bitva u Domažlic (1431, nejslavnější vítězství) a bitva u Lipan (1434, konec husitského hnutí)."
  },
  {
    question: "Kdo vedl husity po smrti Jana Žižky (1424)?",
    options: [
      "Prokop Holý",
      "Zikmund Lucemburský",
      "Jiří z Poděbrad"
    ],
    correct: 0,
    explanation: "Po Žižkově smrti (1424) husity vedl hejtman Prokop Holý. Žižkovi stoupenci si začali říkat 'sirotci'."
  },

  // ===== 4. KONEC VLÁDY LUCEMBURKŮ A DOBA POHUSITSKÁ =====
  {
    question: "Kdy a proč skončila vláda Lucemburků na českém trůně?",
    options: [
      "Roku 1415, když byl upálen Jan Hus",
      "Roku 1437, když zemřel Zikmund bez mužského potomka",
      "Roku 1458, když nastoupil Jiří z Poděbrad"
    ],
    correct: 1,
    explanation: "Král Zikmund Lucemburský zemřel roku 1437 bez mužského potomka. Jeho smrtí rod Lucemburků vymřel po meči."
  },
  {
    question: "Jak se jmenoval syn Albrechta Habsburského a proč se mu říkalo Pohrobek?",
    options: [
      "Ladislav — narodil se až po smrti svého otce Albrechta",
      "Zikmund — přežil mnoho bitev",
      "Vladislav — narodil se v městě Pohořelice"
    ],
    correct: 0,
    explanation: "Syn Albrechta Habsburského se jmenoval Ladislav. Narodil se až po smrti svého otce (Albrecht zemřel při tažení proti Turkům), proto získal přezdívku Pohrobek. Také se mu říkalo Holec, protože se stal králem mladý a neměl fousy."
  },
  {
    question: "Kdo spravoval zemi místo mladého Ladislava Pohrobka?",
    options: [
      "Zikmund Lucemburský",
      "Jiří z Poděbrad — šlechtic, příznivec husitského hnutí",
      "Prokop Holý"
    ],
    correct: 1,
    explanation: "Ladislav Pohrobek byl na vládnutí moc malý. Místo krále spravoval zemi šlechtic Jiří z Poděbrad, příznivec husitského hnutí, který v zemi obnovil pořádek."
  },
  {
    question: "Kdo byl jediný český panovník, který nepocházel z panovnického (královského) rodu?",
    options: [
      "Vladislav Jagellonský",
      "Ladislav Pohrobek",
      "Jiří z Poděbrad"
    ],
    correct: 2,
    explanation: "Jiří z Poděbrad byl jediným panovníkem našich zemí, který nepocházel z panovnického rodu. Byl to šlechtic, na trůn byl dosazen roku 1458 po smrti Ladislava Pohrobka."
  },
  {
    question: "Komu se říkalo král 'Dobře'?",
    options: [
      "Jiřímu z Poděbrad",
      "Vladislavu Jagellonskému",
      "Ludvíku Jagellonskému"
    ],
    correct: 1,
    explanation: "Vladislav Jagellonský byl slabý a nerozhodný panovník. Na všechny žádosti odpovídal 'dobře', proto získal přezdívku král 'Dobře'. Králem se stal v 15 letech."
  },
  {
    question: "Jaký král vystřídal posledního Jagellonce (Ludvíka) na českém trůně?",
    options: [
      "Matyáš Korvín",
      "Ferdinand I. Habsburský",
      "Jiří z Poděbrad"
    ],
    correct: 1,
    explanation: "Ludvík Jagellonský zemřel roku 1526 v bitvě u Moháče proti Turkům. Smrtí Ludvíka vymírá rod Jagellonců po meči. Na český trůn nastoupil Ferdinand I. Habsburský."
  },
  {
    question: "S nástupem Habsburků na český trůn začíná jaké období?",
    options: [
      "Středověk",
      "Novověk",
      "Doba temna"
    ],
    correct: 1,
    explanation: "Nástupem Ferdinanda I. Habsburského na český trůn roku 1526 začíná nové období — novověk. České království se stalo na 400 let součástí soustátí Česko, Rakousko, Uhersko."
  },
  {
    question: "Jak zemřel Ludvík Jagellonský?",
    options: [
      "Zemřel na mor v Praze",
      "Zahynul na útěku v bažině po bitvě u Moháče roku 1526 proti Turkům",
      "Padl v bitvě u Lipan"
    ],
    correct: 1,
    explanation: "Ludvík Jagellonský statečně zasáhl proti Turkům v bitvě u Moháče. Mnohem početnější turecké vojsko zvítězilo a král Ludvík na útěku zahynul v bažině ve věku pouhých 20 let."
  },
  {
    question: "Kdo byl Matyáš Korvín a proč bojoval proti Jiřímu z Poděbrad?",
    options: [
      "Polský princ, který chtěl český trůn pro sebe",
      "Uherský (maďarský) král — papež ho poslal na křížovou výpravu proti husitskému králi Jiřímu",
      "Velitel husitského vojska, který zradil"
    ],
    correct: 1,
    explanation: "Proti husitskému králi Jiřímu z Poděbrad se postavila katolická šlechta. Papež vyslal křížovou výpravu, do jejího čela se postavil uherský (maďarský) král Matyáš Korvín. Boje pokračovaly až do smrti Jiřího z Poděbrad roku 1471."
  },
  {
    question: "Co se dělo v českých zemích za vlády Václava IV.?",
    options: [
      "Země prožívala úpadek — šlechta bojovala s králem, zemi postihl mor",
      "Země zažívala velký rozkvět a bohatství",
      "Byly postaveny největší české hrady"
    ],
    correct: 0,
    explanation: "Za vlády Václava IV. prožívala naše země úpadek. Šlechta bojovala s králem i mezi sebou, zemi postihl mor, život chudiny se zhoršil. Václav IV. byl slabý panovník."
  },
  {
    question: "Kdo nastoupil na trůn po Zikmundovi Lucemburském?",
    options: [
      "Jiří z Poděbrad",
      "Albrecht Habsburský — manžel dcery Zikmunda Lucemburského",
      "Vladislav Jagellonský"
    ],
    correct: 1,
    explanation: "Po Zikmundovi na trůn nastoupil Albrecht Habsburský, manžel dcery Zikmunda Lucemburského. Ten ale brzy zemřel při tažení proti Turkům a králem se stal jeho syn Ladislav (Pohrobek)."
  },

  // ===== DOPLŇKOVÉ OTÁZKY =====
  {
    question: "Kde se narodil Jan Hus?",
    options: [
      "V Praze",
      "V Táboře",
      "V jihočeském městečku Husinec"
    ],
    correct: 2,
    explanation: "Mistr Jan Hus se narodil v chudé rodině v jihočeském městečku Husinec."
  },
  {
    question: "Jaké město si husité vybudovali v jižních Čechách?",
    options: [
      "Plzeň",
      "Tábor",
      "České Budějovice"
    ],
    correct: 1,
    explanation: "V jižních Čechách si husité vybudovali opevněné město Tábor. V něm si měli být všichni lidé rovni a žít podle bible."
  },
  {
    question: "Co byla vozová hradba?",
    options: [
      "Hradba z kamenů kolem města Tábor",
      "Bojové vozy sražené k sobě, spojené řetězy do tvaru obdélníku",
      "Dřevěná palisáda kolem husitského tábora"
    ],
    correct: 1,
    explanation: "Husité sestavovali na bojišti vozovou hradbu — vozy srazily těsně k sobě a spojily se řetězy do tvaru obdélníku, sloužily jako opevnění."
  },
  {
    question: "Jaké zbraně používali husité?",
    options: [
      "Meče, luky a kuše",
      "Cepy, sudlice, kopí a ručnice",
      "Děla a katapulty"
    ],
    correct: 1,
    explanation: "Pro boj zblízka sloužily cepy, sudlice nebo kopí. Husité užívali také první ruční střelné zbraně, takzvané ručnice. Tyto zbraně byly vyrobeny ze zemědělského nářadí."
  },
  {
    question: "Jak se husitskému vojsku říkalo po Žižkově smrti?",
    options: [
      "Žižkovy děti",
      "Sirotci",
      "Táborité"
    ],
    correct: 1,
    explanation: "Jan Žižka byl mezi husity oblíbeným a uznávaným vůdcem. Proto si po jeho smrti část husitských vojsk říkala 'sirotci'."
  },
  {
    question: "Kdy zemřel Jan Žižka?",
    options: [
      "V roce 1415",
      "V roce 1424",
      "V roce 1434"
    ],
    correct: 1,
    explanation: "Jan Žižka zemřel při obléhání hradu u města Přibyslav nedaleko Havlíčkova Brodu. Husitská vojska vedl i jako úplně slepý až do své smrti v roce 1424."
  },
  {
    question: "Co byly spanilé jízdy?",
    options: [
      "Slavnostní přehlídky husitského vojska",
      "Výpravy husitů za hranice země — šířili myšlenky husitství a získávali kořist",
      "Rychlé přesuny vojsk mezi českými městy"
    ],
    correct: 1,
    explanation: "Husité začali podnikat spanilé jízdy — výpravy za hranice země. Jejich cílem bylo jednak šířit myšlenky husitství a zastrašovat nepřátele, jednak plenit a získávat kořist."
  },
  {
    question: "Jak vládl Jiří z Poděbrad?",
    options: [
      "Krutě a nespravedlivě",
      "Přísně, spravedlivě a moudře — jako diplomat",
      "Slabě, šlechta ho nerespektovala"
    ],
    correct: 1,
    explanation: "Král Jiří vládl přísně, spravedlivě a moudře. Vynikal jako diplomat a trpělivý úředník. Usiloval o pokojné soužití katolíků a kališníků. Přišel s návrhem celoevropské mírové úmluvy, plán se ale neuskutečnil."
  },
  {
    question: "Jaké významné stavby vznikly za vlády Vladislava Jagellonského?",
    options: [
      "Karlův most a katedrála sv. Víta",
      "Vladislavský sál na Pražském hradě a chrám sv. Barbory v Kutné Hoře",
      "Betlémská kaple a Staroměstská radnice"
    ],
    correct: 1,
    explanation: "Za Vladislavova panování vznikla řada významných gotických staveb. Na Pražském hradě to byl Vladislavský sál a část katedrály sv. Víta. Z téže doby pochází také chrám sv. Barbory v Kutné Hoře."
  },
  {
    question: "Co byl zemský sněm?",
    options: [
      "Vojenská rada husitských hejtmanů",
      "Shromáždění zástupců šlechty a městského stavu, kteří rozhodovali o nejdůležitějších problémech země",
      "Církevní sněm, kde se volil nový biskup"
    ],
    correct: 1,
    explanation: "V českých zemích byla moc panovníka omezena. O nejdůležitějších problémech země se rozhodovalo na sněmech. Scházeli se zde zástupci šlechty a městského stavu. Král musel přijmout jejich rozhodnutí."
  }
];
