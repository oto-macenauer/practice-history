/**
 * Husitské války a české země po husitských válkách
 * Combined test covering chapters 12 & 13
 */
var QUESTIONS = [
  {
    question: "Co se dělo v českých zemích za vlády Václava IV.?",
    options: [
      "Země prožívala úpadek, šlechta bojovala s králem",
      "Země zažívala velký rozkvět a bohatství",
      "Byly postaveny největší české hrady"
    ],
    correct: 0,
    explanation: "Za vlády Václava IV. prožívala naše země úpadek. Šlechta bojovala s králem i mezi sebou, zemi postihl mor a život chudiny se zhoršil."
  },
  {
    question: "Co byly odpustky?",
    options: [
      "Dary pro chudé lidi od církve",
      "Doklady od církve, které za peníze odpouštěly hříchy",
      "Povolení ke stavbě kostelů"
    ],
    correct: 1,
    explanation: "Odpustky si lidé kupovali od církve — tomu, kdo si odpustky koupil, měly být odpuštěny jeho zlé skutky."
  },
  {
    question: "Kdo byl mistr Jan Hus?",
    options: [
      "Nejvýznamnější osoba v boji za nápravu církve",
      "Český král, který vládl po Václavu IV.",
      "Velitel husitského vojska"
    ],
    correct: 0,
    explanation: "Mistr Jan Hus byl nejvýznamnější osobou v boji za nápravu církve. Požadoval, aby církev byla opět chudobná a sloužila lidem."
  },
  {
    question: "Kde Jan Hus kázal v Praze?",
    options: [
      "V katedrále sv. Víta",
      "V Betlémské kapli",
      "Na Staroměstském náměstí"
    ],
    correct: 1,
    explanation: "Jan Hus psal spisy a kázal v Betlémské kapli v Praze. Na jeho kázání se sjížděli lidé zdaleka."
  },
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
    question: "Proč byl Jan Hus pozván na církevní sněm do Kostnice?",
    options: [
      "Aby se stal papežem",
      "Aby tam vysvětlil své myšlenky",
      "Aby převzal cenu za svou práci"
    ],
    correct: 1,
    explanation: "V roce 1414 přijal Hus pozvání na církevní sněm do Kostnice na území dnešního Německa, kde měl své myšlenky vysvětlit."
  },
  {
    question: "Co se stalo s Janem Husem 6. července 1415?",
    options: [
      "Stal se pražským biskupem",
      "Uprchl z Kostnice zpět do Čech",
      "Byl upálen za hradbami města Kostnice"
    ],
    correct: 2,
    explanation: "6. července 1415 byl mistr Jan Hus za hradbami města Kostnice upálen. Den upálení Jana Husa je dnes státním svátkem České republiky."
  },
  {
    question: "Co symbolizuje kalich u husitů?",
    options: [
      "Přijímání podobojí — chleba a vína pro všechny věřící",
      "Bohatství husitských měst",
      "Královskou moc českého krále"
    ],
    correct: 0,
    explanation: "Kalich představuje přijímání podobojí — chleba (tělo Páně) a vína z kalicha (krev Páně) pro všechny věřící. Kalich byl znamením rovnosti všech lidí."
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
    question: "Kdo stál v čele husitského vojska?",
    options: [
      "Prokop Holý",
      "Jan Žižka z Trocnova",
      "Zikmund Lucemburský"
    ],
    correct: 1,
    explanation: "V čele husitského vojska stál Jan Žižka z Trocnova. Pocházel z chudého šlechtického rodu z jižních Čech."
  },
  {
    question: "Jak se husitskému vojsku říkalo po Žižkově smrti?",
    options: [
      "Žižkovy děti",
      "Sirotci",
      "Táborité"
    ],
    correct: 1,
    explanation: "Jan Žižka byl mezi husity oblíbeným a uznávaným vůdcem. Proto si po jeho smrti část husitských vojsk říkala \'sirotci\'."
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
    question: "Kolik křížových výprav bylo vedeno proti husitům?",
    options: [
      "Tři",
      "Pět",
      "Sedm"
    ],
    correct: 1,
    explanation: "Všech pět křížových výprav vedených proti husitům skončilo porážkou křižáků a vítězstvím husitských vojsk."
  },
  {
    question: "Kdo vedl husity po smrti Jana Žižky?",
    options: [
      "Prokop Holý",
      "Zikmund Lucemburský",
      "Jiří z Poděbrad"
    ],
    correct: 0,
    explanation: "Husity po Žižkově smrti vedl hejtman Prokop Holý. Pod jeho velením zahnali husité na útěk početné křižácké vojsko v bitvě u Domažlic roku 1431."
  },
  {
    question: "Kde a kdy husité porazili křižáky pod vedením Prokopa Holého?",
    options: [
      "V bitvě u Lipan roku 1434",
      "V bitvě u Domažlic roku 1431",
      "V bitvě u Sudoměře roku 1420"
    ],
    correct: 1,
    explanation: "Pod vedením Prokopa Holého zahnali husité na útěk početné křižácké vojsko v bitvě u Domažlic roku 1431. Křižáci se údajně rozprchli, když uslyšeli zpěv husitských bojovníků."
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
    question: "Co se stalo v bitvě u Lipan roku 1434?",
    options: [
      "Husité porazili křižáky",
      "Bojovní husité s Prokopem Holým byli poraženi panským vojskem",
      "Jan Žižka zvítězil nad Zikmundem"
    ],
    correct: 1,
    explanation: "V bitvě u Lipan roku 1434 byla skupina bojovných husitů v čele s Prokopem Holým poražena panským vojskem. Prokop Holý v boji padl. Bitva u Lipan znamenala konec husitského hnutí."
  },
  {
    question: "Kdo byl po bitvě u Lipan uznán českým králem?",
    options: [
      "Jan Žižka",
      "Jiří z Poděbrad",
      "Zikmund Lucemburský"
    ],
    correct: 2,
    explanation: "Po vítězství panských vojsk byl uznán českým králem Zikmund Lucemburský."
  },
  {
    question: "Kdy skončila vláda rodu Lucemburků na českém trůně?",
    options: [
      "Roku 1415, když byl upálen Jan Hus",
      "Roku 1437, když zemřel Zikmund bez mužského potomka",
      "Roku 1458, když nastoupil Jiří z Poděbrad"
    ],
    correct: 1,
    explanation: "Král Zikmund zemřel roku 1437 bez mužského potomka. Jeho smrtí končí období Lucemburků na českém trůně."
  },
  {
    question: "Proč se Ladislavovi říkalo Pohrobek?",
    options: [
      "Protože se narodil v městě Pohořelice",
      "Protože se narodil až po smrti svého otce Albrechta",
      "Protože přežil mnoho bitev"
    ],
    correct: 1,
    explanation: "Syn Ladislav se narodil až po Albrechtově smrti. Získal proto přezdívku Pohrobek."
  },
  {
    question: "Čím byl výjimečný Jiří z Poděbrad?",
    options: [
      "Byl jediným panovníkem, který nepocházel z panovnického rodu",
      "Byl nejmladším českým králem v historii",
      "Byl prvním králem, který mluvil česky"
    ],
    correct: 0,
    explanation: "Jiří z Poděbrad byl jediným panovníkem naších zemí, který nepocházel z panovnického rodu. Na trůn roku 1458 byl dosazen po složitém vyjednávání."
  },
  {
    question: "Jak vládl Jiří z Poděbrad?",
    options: [
      "Krutě a nespravedlivě",
      "Přísně, spravedlivě a moudře — jako diplomat",
      "Slabě, šlechta ho nerespektovala"
    ],
    correct: 1,
    explanation: "Král Jiří vládl přísně, spravedlivě a moudře. Vynikal jako diplomat a trpělivý úředník. Usiloval o pokojné soužití katolíků a kališníků."
  },
  {
    question: "Kdo byl Matyáš Korvín?",
    options: [
      "Polský princ, který se stal českým králem",
      "Uherský (maďarský) král, který bojoval proti Jiřímu z Poděbrad",
      "Velitel husitského vojska po Žižkovi"
    ],
    correct: 1,
    explanation: "Proti husitskému králi Jiřímu se postavila katolická šlechta. Do jejího čela se postavil uherský (maďarský) král Matyáš Korvín."
  },
  {
    question: "Proč se Vladislavu Jagellonskému přezdívalo \'král Dobře\'?",
    options: [
      "Protože vládl velmi spravedlivě",
      "Protože na všechny návrhy odpovídal \'bene\' (dobře)",
      "Protože za jeho vlády se lidem žilo dobře"
    ],
    correct: 1,
    explanation: "Vladislav Jagellonský byl slabý a nerozhodný panovník. Na všechny návrhy odpovídal latinsky \'bene\' (dobře), proto se mu přezdívalo král \'Dobře\'."
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
    question: "Jak zemřel Ludvík Jagellonský?",
    options: [
      "Zemřel na mor v Praze",
      "Zahynul na útěku v bažině po bitvě u Moháče roku 1526",
      "Padl v bitvě u Lipan"
    ],
    correct: 1,
    explanation: "Ludvík Jagellonský statečně zasáhl proti Turkům v bitvě u Moháče. Mnohem početnější turecké vojsko zvítězilo a král Ludvík na útěku zahynul v bažině ve věku pouhých 20 let."
  },
  {
    question: "Který rod nastoupil na český trůn po vymření Jagellonců roku 1526?",
    options: [
      "Lucemburkové",
      "Přemyslovci",
      "Habsburkové"
    ],
    correct: 2,
    explanation: "Smrtí Ludvíka roku 1526 vymírá rod Jagellonců po meči. Vlády u nás se ujímá nejmocnější evropský rod: Habsburkové."
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
  },
  {
    question: "Která bitva byla první velkou výhrou husitů?",
    options: [
      "Bitva u Lipan",
      "Bitva u Domažlic",
      "Bitva u Sudoměře roku 1420"
    ],
    correct: 2,
    explanation: "Roku 1420 bylo při cestě do Tábora u obce Sudoměř několik stovek husitů v čele s Janem Žižkou obklíčeno. Husité využili své vozy a opevnili se na hrázi rybníků. Bitva u Sudoměře byla první z mnoha husitských vítězných bitev."
  }
];
