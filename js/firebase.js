/**
 * Firebase integration — real-time XP leaderboard sync.
 *
 * Data structure in Realtime Database:
 * /leaderboard/{nickname}: { xp: Number, badges: [String], mistakes: { [testId]: [String] }, lastUpdate: Number }
 *
 * Seeding: On the first XP claim for a given nickname, localStorage totalXp is
 * used as the starting value. Subsequent sessions (same or different device)
 * read from Firebase without overwriting.
 */
var Fire = (function () {
  var firebaseConfig = {
    apiKey: "AIzaSyCgyCPJGzrEphNxWTs3HWRFwUEJulh4Afw",
    authDomain: "github-static-pages.firebaseapp.com",
    databaseURL: "https://github-static-pages-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "github-static-pages",
    storageBucket: "github-static-pages.firebasestorage.app",
    messagingSenderId: "2071922239",
    appId: "1:2071922239:web:69c6e21ad25c8533c01a8a"
  };

  var db = null;
  var leaderboardRef = null;
  var _nickname = null;
  var _seeded = false; // tracks whether we already seeded this session
  var _listeners = [];

  function init() {
    if (db) return;
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    leaderboardRef = db.ref("leaderboard");
  }

  /** Set the active nickname. Seeds XP on first claim for this nickname. */
  function setNickname(nick) {
    if (!nick) return;
    _nickname = nick.trim();
    localStorage.setItem("history-practice-nickname", _nickname);
    _seeded = false;
  }

  function getNickname() {
    if (_nickname) return _nickname;
    _nickname = localStorage.getItem("history-practice-nickname") || null;
    return _nickname;
  }

  /**
   * Add XP for the current nickname.
   * On first call for a nickname that doesn't exist in Firebase yet, seeds
   * with localStorage totalXp. Otherwise increments Firebase value.
   */
  function addXp(amount) {
    init();
    var nick = getNickname();
    if (!nick) return;

    var userRef = db.ref("leaderboard/" + encodeNick(nick));

    userRef.transaction(function (current) {
      if (current === null) {
        // First claim for this nickname — seed from localStorage
        var localXp = Stats.getTotalXp();
        return {
          xp: localXp,
          badges: [],
          lastUpdate: firebase.database.ServerValue.TIMESTAMP
        };
      }
      // Subsequent claims — just increment
      current.xp = (current.xp || 0) + amount;
      current.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
      return current;
    });
  }

  /** Sync total XP bidirectionally — use the higher of local and Firebase. */
  function syncTotalXp() {
    init();
    var nick = getNickname();
    if (!nick) return;

    var userRef = db.ref("leaderboard/" + encodeNick(nick));
    var localXp = Stats.getTotalXp();

    userRef.transaction(function (current) {
      if (current === null) {
        return {
          xp: localXp,
          badges: [],
          lastUpdate: firebase.database.ServerValue.TIMESTAMP
        };
      }
      var firebaseXp = current.xp || 0;
      var maxXp = Math.max(localXp, firebaseXp);
      current.xp = maxXp;
      current.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
      return current;
    }, function (error, committed, snapshot) {
      if (!error && snapshot) {
        var serverXp = (snapshot.val() && snapshot.val().xp) || 0;
        if (serverXp > Stats.getTotalXp()) {
          Stats.setTotalXp(serverXp);
        }
      }
    });
  }

  /** Sync mistakes for a test to Firebase. */
  function syncMistakes(testId, mistakeTexts) {
    init();
    var nick = getNickname();
    if (!nick) return;

    var mistakesRef = db.ref("leaderboard/" + encodeNick(nick) + "/mistakes/" + testId);
    if (mistakeTexts && mistakeTexts.length > 0) {
      mistakesRef.set(mistakeTexts);
    } else {
      mistakesRef.remove();
    }
  }

  /** Award a badge to the current nickname. */
  function awardBadge(badgeId) {
    init();
    var nick = getNickname();
    if (!nick) return;

    var userRef = db.ref("leaderboard/" + encodeNick(nick));
    userRef.transaction(function (current) {
      if (current === null) {
        var localXp = Stats.getTotalXp();
        return {
          xp: localXp,
          badges: [badgeId],
          lastUpdate: firebase.database.ServerValue.TIMESTAMP
        };
      }
      var badges = current.badges || [];
      if (badges.indexOf(badgeId) === -1) {
        badges.push(badgeId);
      }
      current.badges = badges;
      current.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
      return current;
    });
  }

  /**
   * Listen to the full leaderboard in real-time.
   * callback receives an array of { nickname, xp, badges } sorted by XP desc.
   */
  function onLeaderboard(callback, errorCallback) {
    init();
    leaderboardRef.orderByChild("xp").on("value", function (snap) {
      var entries = [];
      snap.forEach(function (child) {
        var val = child.val();
        entries.push({
          nickname: decodeNick(child.key),
          xp: val.xp || 0,
          badges: val.badges || []
        });
      });
      // Sort descending by XP
      entries.sort(function (a, b) { return b.xp - a.xp; });
      callback(entries);
    }, function (err) {
      console.error("Leaderboard error:", err);
      if (errorCallback) errorCallback(err);
    });
  }

  var _myDataRef = null;

  /** Listen to the current user's data in real-time. */
  function onMyData(callback) {
    init();
    var nick = getNickname();
    if (!nick) return;
    // Detach previous listener if any
    if (_myDataRef) _myDataRef.off();
    _myDataRef = db.ref("leaderboard/" + encodeNick(nick));
    _myDataRef.on("value", function (snap) {
      var val = snap.val();
      callback(val || { xp: 0, badges: [] });
    });
  }

  /** Detach the current user's data listener. */
  function offMyData() {
    if (_myDataRef) {
      _myDataRef.off();
      _myDataRef = null;
    }
  }

  /** Stop all listeners. */
  function off() {
    offMyData();
    if (leaderboardRef) leaderboardRef.off();
  }

  /**
   * Check if a nickname already exists in Firebase.
   * callback(exists: boolean)
   */
  function nicknameExists(nick, callback) {
    init();
    var ref = db.ref("leaderboard/" + encodeNick(nick));
    ref.once("value", function (snap) {
      callback(snap.exists());
    }, function () {
      callback(false);
    });
  }

  /**
   * Rename nickname: move all data from oldNick to newNick in Firebase.
   * Fails if newNick already exists.
   * callback(error: string|null)
   */
  function renameNickname(oldNick, newNick, callback) {
    init();
    var oldRef = db.ref("leaderboard/" + encodeNick(oldNick));
    var newRef = db.ref("leaderboard/" + encodeNick(newNick));

    // First check that the new nickname doesn't already exist
    newRef.once("value", function (newSnap) {
      if (newSnap.exists()) {
        callback("P\u0159ezd\u00edvka \u201E" + newNick + "\u201C u\u017E je zabran\u00e1.");
        return;
      }
      // Read old data
      oldRef.once("value", function (oldSnap) {
        var oldData = oldSnap.val();
        if (!oldData) {
          // No old data to transfer — just set the new nickname
          setNickname(newNick);
          callback(null);
          return;
        }
        // Detach listener on old ref before modifying data
        offMyData();
        // Write old data to new key, then delete old key
        oldData.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
        newRef.set(oldData, function (err) {
          if (err) {
            callback("Nepodařilo se přenést data: " + err.message);
            return;
          }
          // Set nickname BEFORE removing old data so any triggered
          // listeners/transactions use the new nickname
          setNickname(newNick);
          oldRef.remove();
          callback(null);
        });
      });
    });
  }

  // Firebase keys can't contain . $ # [ ] /
  function encodeNick(nick) {
    return nick.replace(/[.$#\[\]\/]/g, "_");
  }

  function decodeNick(key) {
    return key; // one-way encoding is fine, nickname is stored as key
  }

  return {
    init: init,
    setNickname: setNickname,
    getNickname: getNickname,
    addXp: addXp,
    syncTotalXp: syncTotalXp,
    syncMistakes: syncMistakes,
    awardBadge: awardBadge,
    nicknameExists: nicknameExists,
    renameNickname: renameNickname,
    onLeaderboard: onLeaderboard,
    onMyData: onMyData,
    offMyData: offMyData,
    off: off
  };
})();
