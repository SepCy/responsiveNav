const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.navlinks li');
const lineBurgers = document.querySelectorAll('.hamburger .line');


hamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
    links.forEach((link) => {
        link.classList.toggle('fade')
    })

    lineBurgers.forEach((line) => {
        line.classList.toggle('toggle')
    })
})