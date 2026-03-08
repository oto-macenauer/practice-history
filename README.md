# Procvičování dějepisu

Interaktivní webová aplikace pro procvičování učiva z dějepisu pro 4. třídu ZŠ.

## Spuštění

Otevřete `index.html` v prohlížeči, nebo hostujte na GitHub Pages.

## Přidání nového testu

1. Vytvořte nový soubor v `js/tests/`, např. `js/tests/muj-test.js`
2. Soubor musí definovat pole `QUESTIONS` s objekty:
   ```js
   const QUESTIONS = [
     {
       question: "Otázka?",
       options: ["Odpověď A", "Odpověď B", "Odpověď C"],
       correct: 0, // index správné odpovědi
       explanation: "Vysvětlení správné odpovědi."
     }
   ];
   ```
3. Zaregistrujte test v `js/tests/index.js`
4. Test se automaticky zobrazí na hlavní stránce
