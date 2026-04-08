// Force manifest stable sans toucher au HTML
(function () {
  const link = document.querySelector("link[rel='manifest']");
  if (link) {
    link.setAttribute("href", "manifest.json");
  } else {
    const l = document.createElement("link");
    l.rel = "manifest";
    l.href = "manifest.json";
    document.head.appendChild(l);
  }
})();