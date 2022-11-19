function initAccordion() {
    const faq = document.querySelector('.js-accordion');
    const h2 = faq.querySelectorAll('h2');
    const paragrafo = faq.querySelectorAll('p');

    h2[0].classList.add('ativo');
    paragrafo[0].classList.add('ativo');

    function callbackAccordion(event) {
        let itemClicado = event.target;

        itemClicado.classList.toggle('ativo');
        itemClicado.nextElementSibling.classList.toggle('ativo');
    };

    h2.forEach((h2) => {
        h2.addEventListener('click', callbackAccordion);
    });
};

initAccordion();



function animaScroll () {
    const sections = document.querySelectorAll('.js-scroll');
    const agents = document.querySelectorAll('.agent');
    console.log();

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - 750;
        if(sectionTop < 0) {
            section.classList.add('ativo');
        }
    });

    agents.forEach((agent) => {
        const agentTop = agent.getBoundingClientRect().top - 850;
        agent.classList.add('js-scroll');

        if(agentTop < 0) {
            agent.classList.add('ativo');
        }
    });
};

animaScroll(); 

window.addEventListener('scroll', animaScroll);