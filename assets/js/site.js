(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.dataset.open = "false";
    };

    toggle.addEventListener("click", () => {
      const willOpen = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(willOpen));
      nav.dataset.open = String(willOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeNav();
    });
  }

  const normalizedPath = window.location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/index\.html$/, "");
    const isHome = linkPath === "/" && normalizedPath === "/";
    const isSection =
      linkPath !== "/" &&
      (normalizedPath === linkPath || normalizedPath.startsWith(linkPath));

    if (isHome || isSection) link.setAttribute("aria-current", "page");
  });
})();
