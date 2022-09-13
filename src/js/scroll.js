const links = document.querySelectorAll('.menu a[href^="#"]');

function pegaDistaciaDoTopo(e) {
    const id = e.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollNativo(distaciaDoTopo) {
    window.scroll({
        top: distaciaDoTopo,
        behavior: 'smooth',
    });
}

function scrollParaSessao(e) {
    e.preventDefault();
    const distanciaDoTopo = pegaDistaciaDoTopo(e.target) - 90;
    scrollNativo(distanciaDoTopo)
}

links.forEach((link) => {
    link.addEventListener('click', scrollParaSessao);
});

