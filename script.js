(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const label = toggle.querySelector(".theme-toggle__label");

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function updateToggleButton() {
    const dark = isDark();
    label.textContent = dark ? "Світла тема" : "Темна тема";
    toggle.setAttribute(
      "aria-label",
      dark ? "Увімкнути світлу тему" : "Увімкнути темну тему"
    );
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    if (isDark()) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }
    updateToggleButton();
  });

  updateToggleButton();
})();
