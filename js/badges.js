/**
 * Badge definitions — XP milestones, perfect-test, and achievement badges.
 */
var Badges = (function () {

  /** XP milestone badges (sorted ascending). */
  var XP_BADGES = [
    { id: "xp-100",    xp: 100,    icon: "🌱", label: "Začátečník",       desc: "Získej 100 XP" },
    { id: "xp-500",    xp: 500,    icon: "🌿", label: "Učedník",          desc: "Získej 500 XP" },
    { id: "xp-1000",   xp: 1000,   icon: "🌳", label: "Znalec",           desc: "Získej 1 000 XP" },
    { id: "xp-2500",   xp: 2500,   icon: "🏅", label: "Expert",           desc: "Získej 2 500 XP" },
    { id: "xp-5000",   xp: 5000,   icon: "🏆", label: "Mistr historie",   desc: "Získej 5 000 XP" },
    { id: "xp-10000",  xp: 10000,  icon: "💫", label: "Hvězda",           desc: "Získej 10 000 XP" },
    { id: "xp-15000",  xp: 15000,  icon: "🔱", label: "Velmistr",         desc: "Získej 15 000 XP" },
    { id: "xp-25000",  xp: 25000,  icon: "👑", label: "Král historie",    desc: "Získej 25 000 XP" },
    { id: "xp-50000",  xp: 50000,  icon: "🐉", label: "Drak",             desc: "Získej 50 000 XP" },
    { id: "xp-100000", xp: 100000, icon: "⚜️", label: "Nesmrtelná legenda", desc: "Získej 100 000 XP" }
  ];

  /** Achievement badges awarded based on gameplay actions. */
  var ACHIEVEMENT_BADGES = [
    // --- Milestones: total test completions ---
    { id: "first-test",   icon: "🎯", label: "První test",    desc: "Dokonči svůj první test" },
    { id: "attempts-10",  icon: "📝", label: "Pilný žák",     desc: "Dokonči 10 testů celkem" },
    { id: "attempts-25",  icon: "📚", label: "Studijní typ",  desc: "Dokonči 25 testů celkem" },
    { id: "attempts-50",  icon: "🎓", label: "Veterán",       desc: "Dokonči 50 testů celkem" },
    { id: "attempts-100", icon: "🏛️", label: "Legenda",       desc: "Dokonči 100 testů celkem" },
    // --- Exploration ---
    { id: "all-tests",    icon: "🗺️", label: "Průzkumník",    desc: "Vyzkoušej všechny dostupné testy" },
    // --- Mastery ---
    { id: "high-scorer",  icon: "⭐", label: "Výborná",       desc: "Získej alespoň 90 % v libovolném testu" },
    { id: "improver",     icon: "📈", label: "Zlepšovatel",   desc: "Zlepši svůj výsledek v opakovaném testu" },
    // --- Persistence ---
    { id: "mistake-master", icon: "🧠", label: "Poučen z chyb", desc: "Zvládni procvičení chyb na 100 %" },
    { id: "never-give-up",  icon: "🔁", label: "Nevzdávám se",  desc: "Opakuj stejný test alespoň 3×" },
    // --- Fun ---
    { id: "night-owl",    icon: "🦉", label: "Noční sova",    desc: "Dokonči test po 22:00" }
  ];

  /** Perfect test badges — one per test in the registry. */
  function getPerfectBadges() {
    return TEST_REGISTRY.map(function (t) {
      return {
        id: "perfect-" + t.id,
        testId: t.id,
        icon: "💎",
        label: "Bezchybný: " + t.title,
        desc: "Dokonči test \u201E" + t.title + "\u201C bez jediné chyby"
      };
    });
  }

  /** Return all badge definitions. */
  function getAll() {
    return XP_BADGES.concat(ACHIEVEMENT_BADGES).concat(getPerfectBadges());
  }

  /** Get badge definition by id. */
  function getById(id) {
    var all = getAll();
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === id) return all[i];
    }
    return null;
  }

  /**
   * Check and award XP milestone badges.
   * Returns array of newly awarded badge ids.
   */
  function checkXpBadges(totalXp, existingBadges) {
    var newBadges = [];
    var set = {};
    for (var i = 0; i < existingBadges.length; i++) set[existingBadges[i]] = true;

    for (var i = 0; i < XP_BADGES.length; i++) {
      if (totalXp >= XP_BADGES[i].xp && !set[XP_BADGES[i].id]) {
        newBadges.push(XP_BADGES[i].id);
      }
    }
    return newBadges;
  }

  /**
   * Check if a perfect badge should be awarded for a test.
   * Returns badge id or null.
   */
  function checkPerfectBadge(testId, score, total, isMistakesMode) {
    if (isMistakesMode) return null;
    if (total === 0 || score < total) return null;
    return "perfect-" + testId;
  }

  /**
   * Check achievement badges earned at test completion.
   * ctx: { testId, score, total, isMistakesMode, bestStreak, prevBestPct, prevAttempts }
   * Returns array of newly earned badge ids.
   */
  function checkAchievementBadges(ctx) {
    var earned = [];

    // Gather aggregate stats
    var allTests = Stats.getAllTests();
    var totalAttempts = Stats.getTotalAttempts();
    var testsWithAttempts = 0;
    for (var key in allTests) {
      if (allTests.hasOwnProperty(key)) {
        if ((allTests[key].attempts || 0) > 0) testsWithAttempts++;
      }
    }

    var pct = ctx.total > 0 ? Math.round((ctx.score / ctx.total) * 100) : 0;

    // --- Milestones ---
    if (totalAttempts >= 1) earned.push("first-test");
    if (totalAttempts >= 10) earned.push("attempts-10");
    if (totalAttempts >= 25) earned.push("attempts-25");
    if (totalAttempts >= 50) earned.push("attempts-50");
    if (totalAttempts >= 100) earned.push("attempts-100");

    // --- Exploration ---
    if (testsWithAttempts >= TEST_REGISTRY.length && TEST_REGISTRY.length > 1) {
      earned.push("all-tests");
    }

    // --- Mastery ---
    if (!ctx.isMistakesMode && pct >= 90) earned.push("high-scorer");
    if (!ctx.isMistakesMode && ctx.prevAttempts > 0 && pct > ctx.prevBestPct) {
      earned.push("improver");
    }

    // --- Persistence ---
    if (ctx.isMistakesMode && ctx.total > 0 && ctx.score === ctx.total) {
      earned.push("mistake-master");
    }
    if (!ctx.isMistakesMode) {
      var testStats = allTests[ctx.testId];
      if (testStats && testStats.attempts >= 3) earned.push("never-give-up");
    }

    // --- Fun ---
    var hour = new Date().getHours();
    if (hour >= 22 || hour < 5) earned.push("night-owl");

    return earned;
  }

  /** Progressive badge groups — only the highest earned badge is shown per group. */
  var PROGRESSIVE_GROUPS = [
    ["xp-100", "xp-500", "xp-1000", "xp-2500", "xp-5000", "xp-10000", "xp-15000", "xp-25000", "xp-50000", "xp-100000"],
    ["first-test", "attempts-10", "attempts-25", "attempts-50", "attempts-100"]
  ];

  /**
   * Filter badge IDs for leaderboard display: keep only the highest
   * from each progressive group, keep all non-grouped badges as-is.
   */
  function getLeaderboardBadges(badgeIds) {
    var suppress = {};
    for (var g = 0; g < PROGRESSIVE_GROUPS.length; g++) {
      var group = PROGRESSIVE_GROUPS[g];
      var highestIdx = -1;
      for (var i = 0; i < group.length; i++) {
        if (badgeIds.indexOf(group[i]) !== -1) {
          highestIdx = i;
        }
      }
      // Suppress all but the highest in this group
      if (highestIdx >= 0) {
        for (var i = 0; i < group.length; i++) {
          if (i !== highestIdx) suppress[group[i]] = true;
        }
      }
    }
    return badgeIds.filter(function (id) { return !suppress[id]; });
  }

  return {
    XP_BADGES: XP_BADGES,
    ACHIEVEMENT_BADGES: ACHIEVEMENT_BADGES,
    getPerfectBadges: getPerfectBadges,
    getAll: getAll,
    getById: getById,
    checkXpBadges: checkXpBadges,
    checkPerfectBadge: checkPerfectBadge,
    checkAchievementBadges: checkAchievementBadges,
    getLeaderboardBadges: getLeaderboardBadges
  };
})();
