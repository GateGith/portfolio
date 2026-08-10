(() => {
  "use strict";

  const progress = document.getElementById("scroll-progress");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${value}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const phone = "213771021391";
  const messages = {
    general: "Bonjour, j’ai vu votre portfolio et je souhaite discuter d’un site web pour mon activité.\n\nMon activité :\nVille :\nInstagram/Facebook :\nObjectif du site :",
    project: "Bonjour, j’ai vu votre portfolio et je souhaite discuter de mon projet de site web.\n\nMon activité :\nVille :\nInstagram/Facebook :\nObjectif du site :\nFormule envisagée :",
    essential: "Bonjour Saber, j’ai vu l’offre Essentiel à 25 000 DA.\n\nMon activité :\nVille :\nInstagram/Facebook :\nObjectif du site :",
    premium: "Bonjour Saber, j’ai vu l’offre Premium Local à 55 000 DA.\n\nMon activité :\nVille :\nInstagram/Facebook :\nObjectif du site :",
    qualification: "Bonjour Saber, j’ai vu votre portfolio et je souhaite discuter d’un site web pour mon activité.\n\nMon activité :\nVille :\nInstagram/Facebook :\nObjectif du site :\nFormule envisagée :"
  };

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const type = link.dataset.whatsapp || "general";
    const message = encodeURIComponent(messages[type] || messages.general);
    link.href = `https://wa.me/${phone}?text=${message}`;
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const selector = anchor.getAttribute("href");
      if (!selector || selector === "#") return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();

