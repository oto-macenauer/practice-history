/**
 * Badge definitions — perfect-test badges and XP milestone badges.
 */
var Badges = (function () {

  /** XP milestone badges (sorted ascending). */
  var XP_BADGES = [
    { id: "xp-100",   xp: 100,   icon: "🌱", label: "Začátečník",    desc: "Získej 100 XP" },
    { id: "xp-500",   xp: 500,   icon: "🌿", label: "Učedník",       desc: "Získej 500 XP" },
    { id: "xp-1000",  xp: 1000,  icon: "🌳", label: "Znalec",        desc: "Získej 1 000 XP" },
    { id: "xp-2500",  xp: 2500,  icon: "🏅", label: "Expert",        desc: "Získej 2 500 XP" },
    { id: "xp-5000",  xp: 5000,  icon: "🏆", label: "Mistr historie", desc: "Získej 5 000 XP" }
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
    return XP_BADGES.concat(getPerfectBadges());
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

  return {
    XP_BADGES: XP_BADGES,
    getPerfectBadges: getPerfectBadges,
    getAll: getAll,
    getById: getById,
    checkXpBadges: checkXpBadges,
    checkPerfectBadge: checkPerfectBadge
  };
})();
