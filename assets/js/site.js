(function () {
  var key = "siteFontMode";
  var modes = ["font-mono", "font-sans", "font-serif"];
  var body = document.body;
  var button = document.getElementById("fontToggle");

  function applyMode(mode) {
    body.classList.remove("font-sans", "font-serif");
    if (mode === "font-sans") body.classList.add("font-sans");
    if (mode === "font-serif") body.classList.add("font-serif");
  }

  function getSavedMode() {
    var saved = localStorage.getItem(key);
    return modes.indexOf(saved) > -1 ? saved : "font-mono";
  }

  var current = getSavedMode();
  applyMode(current);

  if (button) {
    button.addEventListener("click", function () {
      var idx = modes.indexOf(current);
      current = modes[(idx + 1) % modes.length];
      applyMode(current);
      localStorage.setItem(key, current);
    });
  }
})();
