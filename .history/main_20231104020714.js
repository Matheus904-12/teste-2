document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

gsap.from('.section', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

gsap.from('.footer', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});