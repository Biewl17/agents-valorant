export default function animaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const agents = document.querySelectorAll(".agent");
  window.addEventListener("scroll", animaScroll);

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - 750;

    if (sectionTop < 0) {
      section.classList.add("ativo");
    }
  });

  agents.forEach((agent) => {
    const agentTop = agent.getBoundingClientRect().top - 850;
    agent.classList.add("js-scroll-right");
    if (agentTop < 0) {
      agent.classList.add("ativo");
    }
  });
}
