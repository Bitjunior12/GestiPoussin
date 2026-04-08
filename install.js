let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.createElement("button");
  btn.innerText = "📲 Installer l'application";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px";
  btn.style.zIndex = "9999";

  btn.onclick = async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome);
  };

  document.body.appendChild(btn);
});