const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealSelectors = [
  ".intro-section .section-shell",
  ".menu-section .section-heading",
  ".menu-card",
  ".catalog-section .section-heading",
  ".catalog-item",
  ".how-section .section-heading",
  ".step-card",
  ".event-card",
  ".event-note",
  ".press-section .section-shell",
  ".site-footer",
];

const revealItems = [...document.querySelectorAll(revealSelectors.join(","))];

revealItems.forEach((item) => {
  item.classList.add("reveal-on-scroll");

  if (item.matches(".catalog-item, .step-card")) {
    const siblings = [...item.parentElement.children];
    const delay = Math.min(siblings.indexOf(item), 3) * 70;
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  }
});

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible", "reveal-complete"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        const delay = Number.parseInt(
          entry.target.style.getPropertyValue("--reveal-delay") || "0",
          10
        );
        window.setTimeout(() => {
          entry.target.classList.add("reveal-complete");
        }, delay + 620);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.14,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
