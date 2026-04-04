/**
 * Update checker — polls version.json and shows a toast when a new version is available.
 */
(function () {
  var CHECK_INTERVAL = 60 * 1000; // every 60 seconds
  var loadedVersion = null;

  function fetchVersion(cb) {
    var url = "version.json?_=" + Date.now();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          cb(data.version || null);
        } catch (e) {
          cb(null);
        }
      }
    };
    xhr.onerror = function () { /* ignore network errors */ };
    xhr.send();
  }

  function showUpdateToast() {
    if (document.getElementById("update-toast")) return;

    var toast = document.createElement("div");
    toast.id = "update-toast";
    toast.className = "update-toast";
    toast.innerHTML =
      '<span class="update-toast-text">K dispozici je nov\u00E1 verze!</span>' +
      '<button class="update-toast-btn" id="update-toast-refresh">Obnovit</button>' +
      '<button class="update-toast-dismiss" id="update-toast-dismiss">&times;</button>';
    document.body.appendChild(toast);

    // Trigger animation on next frame
    requestAnimationFrame(function () {
      toast.classList.add("visible");
    });

    document.getElementById("update-toast-refresh").addEventListener("click", function () {
      location.reload();
    });
    document.getElementById("update-toast-dismiss").addEventListener("click", function () {
      toast.classList.remove("visible");
      setTimeout(function () { toast.remove(); }, 300);
    });
  }

  function check() {
    fetchVersion(function (v) {
      if (!v) return;
      if (loadedVersion === null) {
        loadedVersion = v;
        return;
      }
      if (v !== loadedVersion) {
        showUpdateToast();
      }
    });
  }

  // Initial fetch to store current version, then poll
  check();
  setInterval(check, CHECK_INTERVAL);
})();
