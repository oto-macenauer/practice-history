/**
 * Dashboard — renders test cards from the registry with stats from localStorage.
 */
(function () {
  var grid = document.getElementById("card-grid");
  if (!grid) return;

  // Show total XP bar
  var totalXp = Stats.getTotalXp();
  var allTests = Stats.getAllTests();

  var statsBar = document.getElementById("global-stats");
  if (statsBar) {
    var level = Math.floor(totalXp / 500) + 1;
    var xpInLevel = totalXp % 500;
    statsBar.innerHTML =
      '<div class="global-stats-inner">' +
        '<span class="stat-chip">Úroveň ' + level + '</span>' +
        '<span class="stat-chip">' + totalXp + ' XP</span>' +
        '<div class="level-bar"><div class="level-bar-fill" style="width:' + ((xpInLevel / 500) * 100) + '%"></div></div>' +
      '</div>';
  }

  /** Check if an in-progress session exists for a given test id and mode. */
  function hasActiveSession(tid, mistakesMode) {
    var key = "history-practice-session-" + tid + (mistakesMode ? "-mistakes" : "");
    try {
      var s = JSON.parse(localStorage.getItem(key));
      return s && s.questions && s.current < s.questions.length;
    } catch (_) {
      return false;
    }
  }

  TEST_REGISTRY.forEach(function (test) {
    var s = allTests[test.id];
    var card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--card-accent", test.accent || "#74b9ff");

    var metaHtml = '';
    if (s && s.attempts > 0) {
      var stars = s.bestPct >= 90 ? "★★★" : s.bestPct >= 70 ? "★★☆" : s.bestPct >= 40 ? "★☆☆" : "☆☆☆";
      metaHtml =
        '<div class="card-stats">' +
          '<span class="card-stars">' + stars + '</span>' +
          '<span>Nejlepší: ' + s.bestPct + ' %</span>' +
          '<span>Pokusů: ' + s.attempts + '</span>' +
        '</div>';
    }

    // Check for active session
    var activeSession = hasActiveSession(test.id, false);
    var resumeHtml = '';
    if (activeSession) {
      resumeHtml =
        '<a href="test.html?test=' + encodeURIComponent(test.id) + '" class="card-resume-btn">' +
        'Pokračovat v testu' +
        '</a>';
    }

    var mistakesBtnHtml = '';
    if (s && s.mistakes && s.mistakes.length > 0) {
      mistakesBtnHtml =
        '<a href="test.html?test=' + encodeURIComponent(test.id) + '&mode=mistakes" class="card-mistake-btn">' +
        'Procvičit chyby (' + s.mistakes.length + ')' +
        '</a>';
    }

    card.innerHTML =
      '<a class="card-link" href="test.html?test=' + encodeURIComponent(test.id) + '">' +
        '<div class="card-icon">' + test.icon + "</div>" +
        "<h2>" + test.title + "</h2>" +
        "<p>" + test.description + "</p>" +
        metaHtml +
      '</a>' +
      resumeHtml +
      mistakesBtnHtml;

    grid.appendChild(card);
  });
})();
