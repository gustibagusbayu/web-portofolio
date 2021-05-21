// for active link click
$(document).ready(function(){
    $('.navbar-nav').on('click', 'a', function(){
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    }) 
}) 

// for menu y hidden
const toggleMenu = document.querySelector('.navbar-toggler')

// show mobile menu
const mobileMenu = () => {
    toggleMenu.classList.toggle('is-active')
}

toggleMenu.addEventListener('click', mobileMenu)


// scroll trigger
gsap.registerPlugin(ScrollTrigger)
// gsap animation
// navbar
gsap.from('.navbar-brand, .navbar-toggler', {opacity: 0, duration: 0.6, delay: 0.3, y: 10}) 
gsap.from('.nav-item', {opacity: 0, duration: 0.6, delay: 0.2, y: 30, stagger: 0.2}) 

// home page
gsap.from('.home_photo', {opacity: 0, duration: 0.6, delay: 0.3, x: -100}) 
gsap.from('.home_intro h1', {opacity: 0, duration: 0.6, delay: 0.5, x: 100}) 
gsap.from('.home_intro h2', {opacity: 0, duration: 0.6, delay: 0.3, x: 100}) 
gsap.from('.home_intro p', {opacity: 0, duration: 0.6, delay: 0.7, x: 100})
gsap.from('.home_social a', {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})  

// project
gsap.from('.project h1', {scrollTrigger:'.project h1', opacity: 0, duration: 1, delay: 1, x: -30}) 
gsap.from('.project .line', {scrollTrigger:'.project .line', opacity: 0, duration: 1, delay: 1, y: -30}) 
gsap.from('.foodApp img', {scrollTrigger:'.foodApp img', opacity: 0, duration: 1, delay: 1.1, x: 100}) 
gsap.from('.furniture img', {scrollTrigger:'.furniture img', opacity: 0, duration: 1, delay: 1.1, x: -100}) 
gsap.from('.furniture p', {scrollTrigger:'.furniture p', opacity: 0, duration: 0.7, delay: 1, x: 30}) 
gsap.from('.expertSystem img', {scrollTrigger:'.expertSystem img', opacity: 0, duration: 1, delay: 1.2, x: 100})
gsap.from('.description1', {scrollTrigger:'.description1', opacity: 0, duration: 1, delay: 1.2, x: -60})
gsap.from('.expertSystem p', {scrollTrigger:'.expertSystem p', opacity: 0, duration: 1, delay: 1.3, x: -60})
gsap.from('.machineLearning img', {scrollTrigger:'.machineLearning img', opacity: 0, duration: 1, delay: 1.1, x: -100}) 
gsap.from('.description2', {scrollTrigger:'.description2', opacity: 0, duration: 1, delay: 1.2, x: 60}) 
gsap.from('.machineLearning p', {scrollTrigger:'.machineLearning p', opacity: 0, duration: 1, delay: 1.3, x: 60}) 

// skills
gsap.from('.skills h1', {scrollTrigger:'.skills h1', opacity: 0, duration: 1, delay: 0.7, y: -30}) 
gsap.from('.skills .line', {scrollTrigger:'.skills .line', opacity: 0, duration: 1, delay: 0.9, y: -30})
gsap.from('.programming img', {scrollTrigger:'.programming img',opacity: 0, duration: 1, delay: 0.9, y: -30, stagger: 0.1})
gsap.from('.design img', {scrollTrigger:'.design img',opacity: 0, duration: 1, delay: 1.1, y: -30, stagger: 0.3})

// contact
gsap.from('.contact h1', {scrollTrigger:'.contact h1', opacity: 0, duration: 1, delay: 1.1, x: -30}) 
gsap.from('.contact .line', {scrollTrigger:'.contact .line', opacity: 0, duration: 1, delay: 1.1, y: -30})
gsap.from('.contact_social img', {scrollTrigger:'.contact_social img', opacity: 0, duration: 1.1, delay: 0.4, x: 30})
gsap.from('.contact .desc', {scrollTrigger:'.contact .desc', opacity: 0, duration: 1, delay: 1.2, x: -30})
gsap.from('.contact_social a', {scrollTrigger:'.contact a',opacity: 0, duration: 1.1, delay: 1.2, y: -30, stagger: 0.2})
gsap.from('.copyright p', {scrollTrigger:'.copyright p', opacity: 0, duration: 1.1, delay: 1.2, x: -30})

// parallax
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});