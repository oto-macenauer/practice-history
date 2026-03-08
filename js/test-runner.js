/**
 * Test runner — loads questions, renders them one by one, scores results.
 */
(function () {
  var testArea = document.getElementById("test-area");
  var testTitle = document.getElementById("test-title");
  if (!testArea) return;

  // Read test ID from URL
  var params = new URLSearchParams(window.location.search);
  var testId = params.get("test");

  if (!testId) {
    testArea.innerHTML = '<p class="loading">Nebyl vybrán žádný test.</p>';
    return;
  }

  // Find test in registry
  var testInfo = null;
  for (var i = 0; i < TEST_REGISTRY.length; i++) {
    if (TEST_REGISTRY[i].id === testId) {
      testInfo = TEST_REGISTRY[i];
      break;
    }
  }

  if (!testInfo) {
    testArea.innerHTML = '<p class="loading">Test nenalezen.</p>';
    return;
  }

  testTitle.textContent = testInfo.title;
  document.title = testInfo.title + " — Procvičování dějepisu";

  // Load question file dynamically
  var script = document.createElement("script");
  script.src = testInfo.file;
  script.onload = function () {
    if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {
      testArea.innerHTML = '<p class="loading">Žádné otázky nenalezeny.</p>';
      return;
    }
    startTest(QUESTIONS);
  };
  script.onerror = function () {
    testArea.innerHTML = '<p class="loading">Nepodařilo se načíst otázky.</p>';
  };
  document.head.appendChild(script);

  // --- Shuffle helper ---
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  // --- Test engine ---
  function startTest(originalQuestions) {
    var questions = shuffle(originalQuestions).map(function (q) {
      // Shuffle options, tracking correct answer
      var indices = q.options.map(function (_, i) { return i; });
      var shuffled = shuffle(indices);
      return {
        question: q.question,
        options: shuffled.map(function (i) { return q.options[i]; }),
        correct: shuffled.indexOf(q.correct),
        explanation: q.explanation || ""
      };
    });

    var current = 0;
    var score = 0;
    var total = questions.length;

    renderQuestion();

    function renderQuestion() {
      var q = questions[current];

      var html =
        '<div class="progress-text">Otázka ' + (current + 1) + " z " + total + "</div>" +
        '<div class="progress-bar-container"><div class="progress-bar" style="width:' +
        ((current / total) * 100) + '%"></div></div>' +
        '<div class="question-card">' +
        '<div class="question-text">' + q.question + "</div>" +
        '<div class="answers">';

      for (var i = 0; i < q.options.length; i++) {
        html += '<button class="answer-btn" data-index="' + i + '">' + q.options[i] + "</button>";
      }

      html += "</div>" +
        '<div class="explanation" id="explanation">' + q.explanation + "</div>" +
        "</div>" +
        '<button class="next-btn" id="next-btn">' +
        (current < total - 1 ? "Další otázka" : "Zobrazit výsledky") +
        "</button>";

      testArea.innerHTML = html;

      // Attach event listeners
      var buttons = testArea.querySelectorAll(".answer-btn");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handleAnswer);
      }

      document.getElementById("next-btn").addEventListener("click", function () {
        current++;
        if (current < total) {
          renderQuestion();
        } else {
          renderResults();
        }
      });
    }

    function handleAnswer(e) {
      var chosen = parseInt(e.target.getAttribute("data-index"), 10);
      var q = questions[current];
      var buttons = testArea.querySelectorAll(".answer-btn");

      // Disable all buttons
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === q.correct) {
          buttons[i].classList.add("correct");
        }
      }

      if (chosen === q.correct) {
        score++;
      } else {
        buttons[chosen].classList.add("incorrect");
      }

      // Show explanation
      var expl = document.getElementById("explanation");
      if (q.explanation) {
        expl.classList.add("visible");
      }

      // Show next button
      document.getElementById("next-btn").classList.add("visible");
    }

    function renderResults() {
      var pct = Math.round((score / total) * 100);
      var message;

      if (pct === 100) {
        message = "Výborně! Máš vše správně!";
      } else if (pct >= 80) {
        message = "Skvělá práce! Jen pár chybiček.";
      } else if (pct >= 60) {
        message = "Dobrá práce, ale zkus to ještě jednou!";
      } else if (pct >= 40) {
        message = "Ještě je co zlepšovat. Nevzdávej to!";
      } else {
        message = "Zkus si učivo znovu projít a pak to zkus znovu.";
      }

      testArea.innerHTML =
        '<div class="results-card">' +
        "<h2>Výsledky</h2>" +
        '<div class="results-score">' + score + " / " + total + "</div>" +
        '<div class="results-percentage">' + pct + " %</div>" +
        '<div class="results-message">' + message + "</div>" +
        '<div class="results-buttons">' +
        '<button class="btn btn-primary" onclick="location.reload()">Zkusit znovu</button>' +
        '<a href="index.html" class="btn btn-secondary">Zpět na hlavní stránku</a>' +
        "</div></div>";
    }
  }
})();
