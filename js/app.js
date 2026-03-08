/**
 * Dashboard — renders test cards from the registry.
 */
(function () {
  var grid = document.getElementById("card-grid");
  if (!grid) return;

  TEST_REGISTRY.forEach(function (test) {
    var card = document.createElement("a");
    card.className = "card";
    card.href = "test.html?test=" + encodeURIComponent(test.id);
    card.style.setProperty("--card-accent", test.accent || "#74b9ff");

    card.innerHTML =
      '<div class="card-icon">' + test.icon + "</div>" +
      "<h2>" + test.title + "</h2>" +
      "<p>" + test.description + "</p>";

    grid.appendChild(card);
  });
})();
