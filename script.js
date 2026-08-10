(() => {
  "use strict";

  // Lightweight interactions only: no preloader, no typewriter, no iframe loop,
  // no canvas particles and no mouse parallax. The page should communicate instantly.

  const progress = document.getElementById("scroll-progress");

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${value}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Keep WhatsApp messages consistent and easy to edit in one place.
  const phone = "213771021391";
  const messages = {
    general: "Bonjour, j’ai vu votre portfolio et je souhaite discuter d’un site web pour mon activité.",
    project: "Bonjour, j’ai vu votre portfolio et je souhaite discuter de mon projet de site web."
  };

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const type = link.dataset.whatsapp || "general";
    const message = encodeURIComponent(messages[type] || messages.general);
    link.href = `https://wa.me/${phone}?text=${message}`;
  });

  // Smooth anchors with a small offset for the sticky header.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const selector = anchor.getAttribute("href");
      if (!selector || selector === "#") return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 82;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // The I Smile build is being finalized; avoid sending visitors to a broken link.
  document.querySelectorAll('[data-note]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.hash = "work";
    });
  });
})();
