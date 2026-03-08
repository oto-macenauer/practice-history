/**
 * Stats persistence — localStorage wrapper for gamification & mistake tracking.
 *
 * Storage shape:
 * {
 *   totalXp: Number,
 *   tests: {
 *     [testId]: {
 *       bestPct: Number,          // best percentage 0-100
 *       bestScore: Number,
 *       bestTotal: Number,
 *       attempts: Number,
 *       lastAttempt: String,      // ISO date
 *       xp: Number,
 *       mistakes: [ questionText, … ]   // unique question texts answered wrong last run
 *     }
 *   }
 * }
 */
var Stats = (function () {
  var KEY = "history-practice-stats";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || { totalXp: 0, tests: {} };
    } catch (_) {
      return { totalXp: 0, tests: {} };
    }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getTest(testId) {
    var data = load();
    return data.tests[testId] || {
      bestPct: 0, bestScore: 0, bestTotal: 0,
      attempts: 0, lastAttempt: null, xp: 0, mistakes: []
    };
  }

  /** Call after a test run completes. isMistakesMode = true skips attempt count & best score update. */
  function recordRun(testId, score, total, mistakeTexts, xpEarned, isMistakesMode) {
    var data = load();
    var t = data.tests[testId] || {
      bestPct: 0, bestScore: 0, bestTotal: 0,
      attempts: 0, lastAttempt: null, xp: 0, mistakes: []
    };

    if (!isMistakesMode) {
      var pct = total > 0 ? Math.round((score / total) * 100) : 0;
      if (pct > t.bestPct) {
        t.bestPct = pct;
        t.bestScore = score;
        t.bestTotal = total;
      }
      t.attempts++;
      t.mistakes = mistakeTexts;
    } else {
      // Only shrink the mistake list and add XP
      t.mistakes = mistakeTexts;
    }

    t.lastAttempt = new Date().toISOString();
    t.xp += xpEarned;

    data.tests[testId] = t;
    data.totalXp += xpEarned;
    save(data);
  }

  function getTotalXp() {
    return load().totalXp;
  }

  function getAllTests() {
    return load().tests;
  }

  return {
    getTest: getTest,
    recordRun: recordRun,
    getTotalXp: getTotalXp,
    getAllTests: getAllTests
  };
})();
