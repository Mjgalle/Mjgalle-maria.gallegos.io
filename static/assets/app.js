(function () {
  const STORAGE_KEY = "theme"; // "light" | "dark" | "system"
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const audioSound = document.getElementById("play-sound");
  const currentTheme = document.querySelector(".current-theme");

  if (!toggle) return;

  // Apply saved theme ASAP
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", "system");
  }

  function getNextTheme(current) {
    // Cycle: system -> light -> dark -> system
    if (current === "system") return "light";
    if (current === "light") return "dark";
    return "system";
  }

  function updateToggleUI(theme) {
    const icon = toggle.querySelector("span[aria-hidden='true']");
    const text = toggle.querySelector(".theme-toggle__text");
    audioSound.play();

    if (theme === "light") {
      currentTheme.innerHTML = "Light";
      icon.textContent = "🌙";
      text.textContent = "Dark";
      toggle.setAttribute("aria-label", "Switch to dark mode");
    } else if (theme === "dark") {
      currentTheme.innerHTML = "Dark";
      icon.textContent = "🖥️";
      text.textContent = "System";
      toggle.setAttribute("aria-label", "Use system theme");
    } else {
      currentTheme.innerHTML = "System";
      icon.textContent = "☀️";
      text.textContent = "Light";
      toggle.setAttribute("aria-label", "Switch to light mode");
    }
  }

  // Initialize UI
  updateToggleUI(root.getAttribute("data-theme"));

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "system";
    const next = getNextTheme(current);
    root.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
    updateToggleUI(next);
  });
})();
