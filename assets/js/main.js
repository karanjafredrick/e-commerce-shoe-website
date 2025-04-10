const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

const ShadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', ShadowHeader)

navLink.forEach(n => n.addEventListener('click', linkAction))

const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBewteen: 32,
    slidePerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBewteen: 80,
        }
    }
})

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll os higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

    const scrollActive = () =>{
        const scrollDown = window.scrollY

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                  if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                  }else {
                    sectionsClass.classList.remove('active-link')
                  }
        })
    }

    window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal('.popular__swiper, .footer__container, .footer__copy')
sr.reveal('.home__shape-bg', {origin: 'bottom'})
sr.reveal('.home__img', {delay: 1000, distace: '200px', duration: 1500})
sr.reveal('.home__title', {delay: 3500})
sr.reveal('.home__data', {delay: 4000})
sr.reveal('.about__images', {origin: 'right'})
sr.reveal('.products__card, .contact__info', {interval: 100})
sr.reveal('.contact__shape', {delay: 600, scale: 0})
sr.reveal('.contact__delivery', {delay: 1200})