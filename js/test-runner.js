/**
 * Test runner — loads questions, renders them one by one, scores results.
 * Includes gamification (XP, streaks), mistake tracking via Stats module,
 * and session persistence so refreshing / navigating away resumes the test.
 */
(function () {
  var testArea = document.getElementById("test-area");
  var testTitle = document.getElementById("test-title");
  if (!testArea) return;

  // Read params from URL
  var params = new URLSearchParams(window.location.search);
  var testId = params.get("test");
  var mode = params.get("mode"); // "mistakes" = review only past mistakes

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
  document.title = testInfo.title + " — Procvičování vlastivědy";

  // --- Session persistence helpers ---
  var SESSION_KEY = "history-practice-session-" + testId + (mode === "mistakes" ? "-mistakes" : "");

  function saveSession(data) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  }

  function loadSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch (_) {
      return null;
    }
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  // Load question file dynamically
  var script = document.createElement("script");
  script.src = testInfo.file;
  script.onload = function () {
    if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {
      testArea.innerHTML = '<p class="loading">Žádné otázky nenalezeny.</p>';
      return;
    }
    var pool = QUESTIONS;
    if (mode === "mistakes") {
      pool = filterMistakes(QUESTIONS, testId);
      if (!pool.length) {
        testArea.innerHTML =
          '<div class="results-card">' +
          '<h2>Žádné chyby k procvičení!</h2>' +
          '<p style="margin-bottom:1.5rem">Zatím jsi neudělal/a žádné chyby, nebo jsi tento test ještě nespustil/a.</p>' +
          '<a href="test.html?test=' + encodeURIComponent(testId) + '" class="btn btn-primary">Spustit celý test</a>' +
          '</div>';
        return;
      }
    }

    // Check for saved session
    var saved = loadSession();
    if (saved && saved.questions && saved.current < saved.questions.length) {
      resumeTest(saved, testId, mode === "mistakes");
    } else {
      clearSession();
      startTest(pool, testId, mode === "mistakes");
    }
  };
  script.onerror = function () {
    testArea.innerHTML = '<p class="loading">Nepodařilo se načíst otázky.</p>';
  };
  document.head.appendChild(script);

  /** Filter QUESTIONS to only those whose text appears in stored mistakes. */
  function filterMistakes(allQuestions, tid) {
    var saved = Stats.getTest(tid);
    var set = {};
    for (var i = 0; i < saved.mistakes.length; i++) {
      set[saved.mistakes[i]] = true;
    }
    return allQuestions.filter(function (q) { return set[q.question]; });
  }

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

  // --- XP config ---
  var XP_CORRECT = 10;
  var XP_STREAK_BONUS = 5;

  // --- Start a fresh test ---
  function startTest(originalQuestions, tid, isMistakesMode) {
    var questions = shuffle(originalQuestions).map(function (q) {
      var indices = q.options.map(function (_, i) { return i; });
      var shuffled = shuffle(indices);
      return {
        question: q.question,
        options: shuffled.map(function (i) { return q.options[i]; }),
        correct: shuffled.indexOf(q.correct),
        explanation: q.explanation || "",
        originalQuestion: q.question
      };
    });

    var state = {
      questions: questions,
      current: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xpEarned: 0,
      mistakeTexts: []
    };

    saveSession(state);
    runEngine(state, tid, isMistakesMode);
  }

  // --- Resume from saved session ---
  function resumeTest(state, tid, isMistakesMode) {
    runEngine(state, tid, isMistakesMode);
  }

  // --- Shared engine ---
  function runEngine(state, tid, isMistakesMode) {
    var questions = state.questions;
    var total = questions.length;
    var current = state.current;
    var score = state.score;
    var streak = state.streak;
    var bestStreak = state.bestStreak;
    var xpEarned = state.xpEarned;
    var mistakeTexts = state.mistakeTexts;

    renderQuestion();

    function persistState() {
      saveSession({
        questions: questions,
        current: current,
        score: score,
        streak: streak,
        bestStreak: bestStreak,
        xpEarned: xpEarned,
        mistakeTexts: mistakeTexts
      });
    }

    function handleStartOver() {
      clearSession();
      location.reload();
    }

    function renderQuestion() {
      var q = questions[current];

      var streakHtml = '';
      if (streak >= 2) {
        streakHtml = '<div class="streak-badge">' + streak + 'x série!</div>';
      }

      var html =
        '<div class="test-toolbar">' +
          '<button class="btn btn-small btn-secondary" id="start-over-btn">Začít znovu</button>' +
        '</div>' +
        '<div class="hud">' +
          '<div class="hud-item"><span class="hud-label">XP</span><span class="hud-value" id="hud-xp">' + xpEarned + '</span></div>' +
          '<div class="hud-item"><span class="hud-label">Správně</span><span class="hud-value">' + score + '/' + (current) + '</span></div>' +
          '<div class="hud-item"><span class="hud-label">Série</span><span class="hud-value" id="hud-streak">' + streak + '</span></div>' +
        '</div>' +
        '<div class="progress-text">Otázka ' + (current + 1) + " z " + total +
        (isMistakesMode ? ' <span class="mistakes-mode-label">Procvičování chyb</span>' : '') +
        "</div>" +
        '<div class="progress-bar-container"><div class="progress-bar" style="width:' +
        ((current / total) * 100) + '%"></div></div>' +
        streakHtml +
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

      // Start over button
      document.getElementById("start-over-btn").addEventListener("click", handleStartOver);

      // Answer buttons
      var buttons = testArea.querySelectorAll(".answer-btn");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handleAnswer);
      }

      // Next button
      document.getElementById("next-btn").addEventListener("click", function () {
        current++;
        persistState();
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

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === q.correct) {
          buttons[i].classList.add("correct");
        }
      }

      if (chosen === q.correct) {
        score++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
        var gained = XP_CORRECT + (streak > 1 ? streak * XP_STREAK_BONUS : 0);
        xpEarned += gained;
        showXpPopup(e.target, "+" + gained + " XP");
      } else {
        buttons[chosen].classList.add("incorrect");
        streak = 0;
        mistakeTexts.push(q.originalQuestion);
      }

      // Update HUD
      var hudXp = document.getElementById("hud-xp");
      var hudStreak = document.getElementById("hud-streak");
      if (hudXp) hudXp.textContent = xpEarned;
      if (hudStreak) hudStreak.textContent = streak;

      // Show explanation
      var expl = document.getElementById("explanation");
      if (q.explanation) {
        expl.classList.add("visible");
      }

      // Show next button
      document.getElementById("next-btn").classList.add("visible");

      // Persist after answering
      persistState();
    }

    function showXpPopup(anchor, text) {
      var popup = document.createElement("div");
      popup.className = "xp-popup";
      popup.textContent = text;
      anchor.style.position = "relative";
      anchor.appendChild(popup);
      setTimeout(function () { popup.remove(); }, 900);
    }

    function renderResults() {
      // Clear session — test is complete
      clearSession();

      var pct = Math.round((score / total) * 100);

      if (!isMistakesMode) {
        Stats.recordRun(tid, score, total, mistakeTexts, xpEarned, false);
      } else {
        var prev = Stats.getTest(tid);
        var stillWrong = {};
        for (var i = 0; i < mistakeTexts.length; i++) stillWrong[mistakeTexts[i]] = true;
        var updated = prev.mistakes.filter(function (m) { return stillWrong[m]; });
        Stats.recordRun(tid, 0, 0, updated, xpEarned, true);
      }

      var message, emoji;
      if (pct === 100) {
        message = "Výborně! Máš vše správně!";
        emoji = "🏆";
      } else if (pct >= 80) {
        message = "Skvělá práce! Jen pár chybiček.";
        emoji = "⭐";
      } else if (pct >= 60) {
        message = "Dobrá práce, ale zkus to ještě jednou!";
        emoji = "👍";
      } else if (pct >= 40) {
        message = "Ještě je co zlepšovat. Nevzdávej to!";
        emoji = "💪";
      } else {
        message = "Zkus si učivo znovu projít a pak to zkus znovu.";
        emoji = "📖";
      }

      var stars = pct >= 90 ? "★★★" : pct >= 70 ? "★★☆" : pct >= 40 ? "★☆☆" : "☆☆☆";

      var mistakeBtnHtml = '';
      if (mistakeTexts.length > 0) {
        mistakeBtnHtml =
          '<a href="test.html?test=' + encodeURIComponent(tid) + '&mode=mistakes" class="btn btn-warning">' +
          'Procvičit chyby (' + mistakeTexts.length + ')' +
          '</a>';
      }

      testArea.innerHTML =
        '<div class="results-card">' +
        '<div class="results-emoji">' + emoji + '</div>' +
        "<h2>Výsledky</h2>" +
        '<div class="results-stars">' + stars + '</div>' +
        '<div class="results-score">' + score + " / " + total + "</div>" +
        '<div class="results-percentage">' + pct + " %</div>" +
        '<div class="results-xp">+' + xpEarned + ' XP</div>' +
        (bestStreak >= 2 ? '<div class="results-streak">Nejdelší série: ' + bestStreak + 'x</div>' : '') +
        '<div class="results-message">' + message + "</div>" +
        '<div class="results-buttons">' +
        '<button class="btn btn-primary" onclick="location.reload()">Zkusit znovu</button>' +
        mistakeBtnHtml +
        '<a href="index.html" class="btn btn-secondary">Zpět na hlavní stránku</a>' +
        "</div></div>";
    }
  }
})();
