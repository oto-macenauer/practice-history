/**
 * Dashboard — renders test cards, global stats, nickname bar, sidebar tabs (badges + leaderboard).
 */
(function () {
  var grid = document.getElementById("card-grid");
  if (!grid) return;

  // --- Nickname bar (non-intrusive) ---
  var nicknameBar = document.getElementById("nickname-bar");
  var nicknameForm = document.getElementById("nickname-form");
  var nicknameInput = document.getElementById("nickname-input");
  var nicknameDismiss = document.getElementById("nickname-dismiss");

  var currentNick = Fire.getNickname();

  if (!currentNick && nicknameBar) {
    nicknameBar.style.display = "";
  }

  function activateNickname(val) {
    currentNick = val;
    nicknameBar.style.display = "none";
    nicknameInput.setCustomValidity("");
    Fire.syncTotalXp();
    checkAndAwardXpBadges();
    renderGlobalStats();
    showLeaderboardTab();
    Fire.onMyData(function (data) {
      var earnedBadges = data.badges || [];
      renderBadges(earnedBadges);
      var firebaseXp = data.xp || 0;
      if (firebaseXp > Stats.getTotalXp()) {
        Stats.setTotalXp(firebaseXp);
        totalXp = firebaseXp;
        renderGlobalStats();
      }
      var maxXp = Math.max(Stats.getTotalXp(), firebaseXp);
      var xpBadges = Badges.checkXpBadges(maxXp, earnedBadges);
      for (var i = 0; i < xpBadges.length; i++) {
        Fire.awardBadge(xpBadges[i]);
      }
    });
  }

  if (nicknameForm) {
    nicknameForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = nicknameInput.value.trim();
      if (!val) return;

      var oldNick = Fire.getNickname();

      // Same nickname — just close the bar
      if (oldNick && val === oldNick) {
        nicknameBar.style.display = "none";
        return;
      }

      // Disable input while checking
      nicknameInput.disabled = true;

      if (oldNick) {
        // Rename: transfer data from old to new, block if new exists
        Fire.renameNickname(oldNick, val, function (err) {
          nicknameInput.disabled = false;
          if (err) {
            nicknameInput.setCustomValidity(err);
            nicknameInput.reportValidity();
            return;
          }
          activateNickname(val);
        });
      } else {
        // First time: check the nickname isn't taken
        Fire.nicknameExists(val, function (exists) {
          nicknameInput.disabled = false;
          if (exists) {
            nicknameInput.setCustomValidity("P\u0159ezd\u00edvka \u201E" + val + "\u201C u\u017E je zabran\u00e1.");
            nicknameInput.reportValidity();
            return;
          }
          Fire.setNickname(val);
          activateNickname(val);
        });
      }
    });
  }

  // Clear validation message on input change
  if (nicknameInput) {
    nicknameInput.addEventListener("input", function () {
      nicknameInput.setCustomValidity("");
    });
  }

  if (nicknameDismiss) {
    nicknameDismiss.addEventListener("click", function () {
      nicknameBar.style.display = "none";
    });
  }

  // --- Global stats ---
  var totalXp = Stats.getTotalXp();
  var allTests = Stats.getAllTests();

  var statsBar = document.getElementById("global-stats");
  function renderGlobalStats() {
    if (!statsBar) return;
    var level = Math.floor(totalXp / 500) + 1;
    var xpInLevel = totalXp % 500;
    var nickHtml = '';
    if (currentNick) {
      nickHtml = '<span class="stat-chip stat-chip-nick" id="nick-chip" title="Klikni pro změnu přezdívky">' + escHtml(currentNick) + '</span>';
    }
    statsBar.innerHTML =
      '<div class="global-stats-inner">' +
        nickHtml +
        '<span class="stat-chip">Úroveň ' + level + '</span>' +
        '<span class="stat-chip">' + totalXp + ' XP</span>' +
        '<div class="level-bar"><div class="level-bar-fill" style="width:' + ((xpInLevel / 500) * 100) + '%"></div></div>' +
      '</div>';

    var nickChip = document.getElementById("nick-chip");
    if (nickChip) {
      nickChip.addEventListener("click", function () {
        nicknameBar.style.display = "";
        nicknameInput.value = currentNick || "";
        nicknameInput.focus();
      });
    }
  }

  renderGlobalStats();

  // --- Sync XP to Firebase on dashboard load ---
  if (currentNick) {
    Fire.syncTotalXp();
    checkAndAwardXpBadges();
  }

  // --- Test cards ---
  function getSessionInfo(tid, mistakesMode) {
    var key = "history-practice-session-" + tid + (mistakesMode ? "-mistakes" : "");
    try {
      var s = JSON.parse(localStorage.getItem(key));
      if (s && s.questions && s.current < s.questions.length) {
        var answered = s.current + (s.answered ? 1 : 0);
        return { current: answered, total: s.questions.length, score: s.score || 0, xpEarned: s.xpEarned || 0 };
      }
    } catch (_) {}
    return null;
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

    var session = getSessionInfo(test.id, false);
    var sessionHtml = '';
    if (session) {
      var pct = Math.round((session.current / session.total) * 100);
      sessionHtml =
        '<div class="card-session">' +
          '<div class="card-session-header">' +
            '<span>Rozdělaný test: ' + session.current + '/' + session.total + '</span>' +
            '<span>' + session.score + ' správně · +' + session.xpEarned + ' XP</span>' +
          '</div>' +
          '<div class="card-session-bar"><div class="card-session-bar-fill" style="width:' + pct + '%"></div></div>' +
          '<a href="test.html?test=' + encodeURIComponent(test.id) + '" class="card-resume-btn">Pokračovat</a>' +
        '</div>';
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
      sessionHtml +
      mistakesBtnHtml;

    grid.appendChild(card);
  });

  // --- Sidebar tabs ---
  var tabBadges = document.getElementById("tab-badges");
  var tabLeaderboard = document.getElementById("tab-leaderboard");
  var paneBadges = document.getElementById("pane-badges");
  var paneLeaderboard = document.getElementById("pane-leaderboard");

  // Hide leaderboard tab if no nickname
  if (!currentNick && tabLeaderboard) {
    tabLeaderboard.style.display = "none";
  }

  function showLeaderboardTab() {
    if (tabLeaderboard) tabLeaderboard.style.display = "";
  }

  function switchTab(tab) {
    tabBadges.classList.toggle("active", tab === "badges");
    tabLeaderboard.classList.toggle("active", tab === "leaderboard");
    paneBadges.classList.toggle("active", tab === "badges");
    paneLeaderboard.classList.toggle("active", tab === "leaderboard");
  }

  if (tabBadges) tabBadges.addEventListener("click", function () { switchTab("badges"); });
  if (tabLeaderboard) tabLeaderboard.addEventListener("click", function () { switchTab("leaderboard"); });

  // --- Badges list ---
  var badgesListEl = document.getElementById("badges-list");

  function renderBadges(earnedIds) {
    var all = Badges.getAll();
    var earnedSet = {};
    for (var i = 0; i < earnedIds.length; i++) earnedSet[earnedIds[i]] = true;

    var earnedCount = 0;
    var html = '';
    for (var i = 0; i < all.length; i++) {
      var b = all[i];
      var earned = earnedSet[b.id];
      if (earned) earnedCount++;
      html +=
        '<div class="badge-item' + (earned ? ' badge-earned-item' : ' badge-locked') + '">' +
          '<span class="badge-item-icon">' + (earned ? b.icon : '🔒') + '</span>' +
          '<div class="badge-item-info">' +
            '<span class="badge-item-label">' + escHtml(b.label) + '</span>' +
            '<span class="badge-item-desc">' + escHtml(b.desc) + '</span>' +
          '</div>' +
        '</div>';
    }

    html = '<div class="badges-counter">' + earnedCount + ' / ' + all.length + '</div>' + html;
    badgesListEl.innerHTML = html;
  }

  if (currentNick) {
    Fire.onMyData(function (data) {
      var earnedBadges = data.badges || [];
      renderBadges(earnedBadges);
      // Sync local XP from Firebase (use the higher value)
      var firebaseXp = data.xp || 0;
      if (firebaseXp > Stats.getTotalXp()) {
        Stats.setTotalXp(firebaseXp);
        totalXp = firebaseXp;
        renderGlobalStats();
      }
      // Award XP badges using the higher XP
      var maxXp = Math.max(Stats.getTotalXp(), firebaseXp);
      var xpBadges = Badges.checkXpBadges(maxXp, earnedBadges);
      for (var i = 0; i < xpBadges.length; i++) {
        Fire.awardBadge(xpBadges[i]);
      }
    });
  } else {
    renderBadges([]);
  }

  // --- Leaderboard (real-time) ---
  var leaderboardEl = document.getElementById("leaderboard");

  Fire.onLeaderboard(function (entries) {
    if (!entries.length) {
      leaderboardEl.innerHTML = '<p class="leaderboard-empty">Zatím tu nikdo není. Buď první!</p>';
      return;
    }

    var html = '<div class="lb-list">';

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var level = Math.floor(e.xp / 500) + 1;
      var isMe = currentNick && e.nickname === currentNick;
      var rankIcon = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1);

      var displayBadges = Badges.getLeaderboardBadges(e.badges);
      var badgeHtml = '';
      for (var j = 0; j < displayBadges.length; j++) {
        var b = Badges.getById(displayBadges[j]);
        if (b) {
          badgeHtml += '<span class="lb-badge" title="' + escHtml(b.label) + '">' + b.icon + '</span>';
        }
      }

      html += '<div class="lb-row' + (isMe ? ' lb-me' : '') + '">' +
        '<span class="lb-rank">' + rankIcon + '</span>' +
        '<div class="lb-content">' +
          '<div class="lb-top">' +
            '<div class="lb-info">' +
              '<div class="lb-nick">' + escHtml(e.nickname) + '</div>' +
              '<div class="lb-meta">' +
                '<span class="lb-xp">' + e.xp + ' XP</span>' +
                '<span>Úr. ' + level + '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
          (badgeHtml ? '<div class="lb-badges">' + badgeHtml + '</div>' : '') +
        '</div>' +
        '</div>';
    }

    html += '</div>';
    leaderboardEl.innerHTML = html;
  }, function () {
    leaderboardEl.innerHTML = '<p class="leaderboard-error">Nepodařilo se načíst žebříček. Zkontroluj připojení.</p>';
  });

  // --- XP badge check helper ---
  function checkAndAwardXpBadges() {
    var nick = Fire.getNickname();
    if (!nick) return;
    var xp = Stats.getTotalXp();
    var newBadges = Badges.checkXpBadges(xp, []);
    for (var i = 0; i < newBadges.length; i++) {
      Fire.awardBadge(newBadges[i]);
    }
  }

  // --- Helpers ---
  function escHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }
})();
