const home = document.querySelectorAll('li');

function scrollTo(e) {
    e.preventDefault();
    console.log(e)
}

home.forEach((link) => {
    link.addEventListener('click', scrollTo);
});



// const p = document.querySelector('.bn-p-sobre')
// const posicao = p.getBoundingClientRect();
// console.log(posicao)

// home.addEvenetListener('click', () => window.scrollTo({
//     top: 161,
//     behavior: 'smooth'
// }) )

// home.addEvenetListener('click', e => {
//     const el = e.target;

//     if(el === home) {
//         window.scroll
//     }
// })