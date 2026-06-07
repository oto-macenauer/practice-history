/**
 * Voda v krajině a podnebí – test k 8. 6.
 */
var QUESTIONS = [

  // ===== DĚLENÍ VODY V KRAJINĚ =====

  {
    question: "Jak dělíme vodu v krajině?",
    options: [
      "Na povrchovou a podzemní",
      "Na slanou a sladkou",
      "Na teplou a studenou"
    ],
    correct: 0,
    explanation: "Vodu v krajině dělíme na povrchovou (řeky, jezera, rybníky) a podzemní (prameny, studny)."
  },
  {
    question: "Co je příklad povrchové vody?",
    options: [
      "Řeka",
      "Studna",
      "Podzemní pramen"
    ],
    correct: 0,
    explanation: "Povrchová voda se nachází na povrchu země — řeky, potoky, jezera, rybníky, moře."
  },

  // ===== TOK ŘEKY =====

  {
    question: "Co je pramen?",
    options: [
      "Místo, kde řeka začíná",
      "Místo, kde řeka končí",
      "Místo, kde se dvě řeky spojují"
    ],
    correct: 0,
    explanation: "Pramen je místo, kde voda vyvěrá na povrch a řeka začíná svůj tok."
  },
  {
    question: "Jak se nazývá místo, kde řeka končí a vlévá se do moře nebo jiné řeky?",
    options: [
      "Ústí",
      "Pramen",
      "Soutok"
    ],
    correct: 0,
    explanation: "Ústí je místo, kde řeka končí — vlévá se do moře, jezera nebo jiné řeky."
  },
  {
    question: "Co je soutok?",
    options: [
      "Místo, kde se dvě řeky spojují",
      "Místo, kde řeka pramení",
      "Místo, kde řeka teče nejrychleji"
    ],
    correct: 0,
    explanation: "Soutok je místo, kde se dvě řeky (nebo řeka a potok) spojují v jeden tok."
  },
  {
    question: "Co je přítok?",
    options: [
      "Řeka nebo potok, který se vlévá do větší řeky",
      "Řeka, která teče z jezera",
      "Hlavní tok řeky"
    ],
    correct: 0,
    explanation: "Přítok je menší vodní tok (řeka nebo potok), který se vlévá do větší řeky."
  },
  {
    question: "Jak se určuje pravý a levý břeh řeky?",
    options: [
      "Stojíme čelem po proudu (ve směru toku)",
      "Stojíme čelem proti proudu",
      "Podle světových stran"
    ],
    correct: 0,
    explanation: "Pravý a levý břeh určujeme tak, že stojíme čelem ve směru toku (po proudu). Pravý břeh je napravo, levý nalevo."
  },

  // ===== RYBNÍK, PŘEHRADA, JEZERO =====

  {
    question: "Co je rybník?",
    options: [
      "Uměle vytvořená mělká vodní nádrž, většinou pro chov ryb",
      "Přirozeně vzniklá vodní plocha",
      "Přehrazená řeka pro výrobu elektřiny"
    ],
    correct: 0,
    explanation: "Rybník je umělá mělká vodní nádrž, kterou lidé vybudovali především pro chov ryb."
  },
  {
    question: "Co je jezero?",
    options: [
      "Přirozeně vzniklá vodní plocha v prohlubenině",
      "Uměle vytvořená nádrž pro chov ryb",
      "Přehrazená řeka"
    ],
    correct: 0,
    explanation: "Jezero je přirozená vodní plocha, která vznikla bez zásahu člověka — například v horách ledovcovou činností."
  },
  {
    question: "Co je přehrada (vodní nádrž)?",
    options: [
      "Uměle přehrazená řeka pro zásobu vodou nebo výrobu elektřiny",
      "Přirozeně vzniklé jezero v horách",
      "Mělká nádrž pro chov ryb"
    ],
    correct: 0,
    explanation: "Přehrada je umělá vodní nádrž vzniklá přehrazením řeky hrází. Slouží k zásobování vodou, ochraně před povodněmi nebo výrobě elektřiny."
  },
  {
    question: "Jaký je hlavní rozdíl mezi rybníkem a jezerem?",
    options: [
      "Rybník je umělý, jezero je přírodní",
      "Rybník je větší než jezero",
      "Rybník je hlubší než jezero"
    ],
    correct: 0,
    explanation: "Rybník vytvořil člověk (je umělý), zatímco jezero vzniklo přírodní cestou."
  },
  {
    question: "Jaký je hlavní rozdíl mezi rybníkem a přehradou?",
    options: [
      "Přehrada vzniká přehrazením řeky hrází, rybník je mělká nádrž pro chov ryb",
      "Rybník je větší než přehrada",
      "Přehrada slouží jen k chovu ryb"
    ],
    correct: 0,
    explanation: "Rybník je mělká umělá nádrž pro chov ryb. Přehrada vzniká přehrazením řeky a slouží k zásobování vodou, ochraně před povodněmi nebo výrobě elektřiny."
  },
  {
    question: "Který rybník je největší v České republice?",
    options: [
      "Rožmberk",
      "Svět",
      "Jordán"
    ],
    correct: 0,
    explanation: "Rožmberk v jižních Čechách je největší rybník v ČR (489 ha). Vybudoval ho Jakub Krčín z Jelčan v 16. století."
  },
  {
    question: "Jak se jmenuje největší přírodní jezero v ČR?",
    options: [
      "Černé jezero",
      "Máchovo jezero",
      "Lipno"
    ],
    correct: 0,
    explanation: "Černé jezero na Šumavě je největší přírodní jezero v ČR. Máchovo jezero je ve skutečnosti rybník a Lipno je přehradní nádrž."
  },

  // ===== ÚMOŘÍ ČR =====

  {
    question: "Co je úmoří?",
    options: [
      "Oblast, z níž všechny řeky odtékají do jednoho moře",
      "Část řeky u pramene",
      "Místo, kde se řeka vlévá do moře"
    ],
    correct: 0,
    explanation: "Úmoří je území, ze kterého všechny vodní toky odtékají do stejného moře."
  },
  {
    question: "Do kolika úmoří patří Česká republika?",
    options: [
      "Tří",
      "Dvou",
      "Čtyř"
    ],
    correct: 0,
    explanation: "ČR leží na rozvodí tří moří: Severního moře, Baltského moře a Černého moře."
  },
  {
    question: "Do kterého moře odtéká řeka Labe?",
    options: [
      "Do Severního moře",
      "Do Baltského moře",
      "Do Černého moře"
    ],
    correct: 0,
    explanation: "Labe teče z Čech přes Německo a vlévá se do Severního moře."
  },
  {
    question: "Do kterého moře odtéká řeka Odra?",
    options: [
      "Do Baltského moře",
      "Do Severního moře",
      "Do Černého moře"
    ],
    correct: 0,
    explanation: "Odra teče ze severní Moravy a Slezska přes Polsko do Baltského moře."
  },
  {
    question: "Do kterého moře odtéká řeka Morava?",
    options: [
      "Do Černého moře",
      "Do Severního moře",
      "Do Baltského moře"
    ],
    correct: 0,
    explanation: "Morava se vlévá do Dunaje, který teče do Černého moře. Proto patří do úmoří Černého moře."
  },

  // ===== POVODÍ A ŘEKY =====

  {
    question: "Co je povodí?",
    options: [
      "Území, ze kterého voda odtéká do jedné řeky",
      "Území, které zaplavila povodeň",
      "Místo, kde řeka pramení"
    ],
    correct: 0,
    explanation: "Povodí je území (oblast), ze kterého všechna voda (dešťová i podzemní) stéká do jedné řeky."
  },
  {
    question: "Která je nejdelší řeka protékající Českou republikou?",
    options: [
      "Vltava",
      "Labe",
      "Morava"
    ],
    correct: 0,
    explanation: "Vltava je nejdelší řeka na území ČR (430 km). Labe je sice hlavní řeka, ale na území ČR je kratší."
  },
  {
    question: "Do které řeky se vlévá Vltava?",
    options: [
      "Do Labe",
      "Do Moravy",
      "Do Odry"
    ],
    correct: 0,
    explanation: "Vltava se vlévá do Labe u Mělníka. Tento soutok je jedním z nejznámějších v ČR."
  },
  {
    question: "Která řeka protéká Prahou?",
    options: [
      "Vltava",
      "Labe",
      "Berounka"
    ],
    correct: 0,
    explanation: "Prahou protéká Vltava. Je to nejznámější řeka Česka, na které stojí i Karlův most."
  },
  {
    question: "Která řeka protéká Olomoucí?",
    options: [
      "Morava",
      "Labe",
      "Odra"
    ],
    correct: 0,
    explanation: "Olomoucí protéká řeka Morava, hlavní řeka na Moravě."
  },
  {
    question: "Která z těchto řek protéká Českou republikou?",
    options: [
      "Vltava",
      "Dunaj",
      "Visla"
    ],
    correct: 0,
    explanation: "Vltava je nejdelší řeka ČR. Dunaj ani Visla Českou republikou neprotékají."
  },
  {
    question: "Která řeka tvoří část jižní hranice ČR s Rakouskem?",
    options: [
      "Dyje",
      "Vltava",
      "Sázava"
    ],
    correct: 0,
    explanation: "Dyje tvoří část jižní hranice ČR s Rakouskem. Je to důležitá řeka jižní Moravy."
  },

  // ===== POČASÍ A PODNEBÍ =====

  {
    question: "Co je počasí?",
    options: [
      "Aktuální stav ovzduší na určitém místě v daném čase",
      "Dlouhodobý průměr teploty v určité oblasti",
      "Předpověď teploty na celý rok"
    ],
    correct: 0,
    explanation: "Počasí je aktuální stav ovzduší — teplota, srážky, vítr, oblačnost — v určitém místě a čase. Mění se každý den."
  },
  {
    question: "Co je podnebí (klima)?",
    options: [
      "Dlouhodobý průměr počasí v určité oblasti",
      "Aktuální teplota a srážky venku",
      "Předpověď počasí na příští týden"
    ],
    correct: 0,
    explanation: "Podnebí (klima) je průměrné počasí v dané oblasti za dlouhé období (desítky let). Na rozdíl od počasí se nemění ze dne na den."
  },
  {
    question: "Jaký je rozdíl mezi počasím a podnebím?",
    options: [
      "Počasí se mění každý den, podnebí je dlouhodobý průměr",
      "Počasí platí celý rok, podnebí jen jeden den",
      "Žádný rozdíl, jsou to stejné pojmy"
    ],
    correct: 0,
    explanation: "Počasí popisuje aktuální stav ovzduší (dnes prší, zítra svítí slunce). Podnebí je průměr počasí za mnoho let v dané oblasti."
  },
  {
    question: "V jakém podnebném pásu leží Česká republika?",
    options: [
      "V mírném",
      "V tropickém",
      "V subtropickém"
    ],
    correct: 0,
    explanation: "Česká republika leží v mírném podnebném pásu, pro který jsou typická čtyři roční období."
  },
  {
    question: "Co je typické pro mírný podnebný pás?",
    options: [
      "Střídání čtyř ročních období",
      "Celý rok vysoké teploty a sucho",
      "Polární noci v zimě"
    ],
    correct: 0,
    explanation: "V mírném podnebném pásu se střídají čtyři roční období: jaro, léto, podzim a zima. Teploty a srážky se v průběhu roku mění."
  }
];
