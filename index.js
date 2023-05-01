gsap.registerPlugin(ScrollTrigger);

const women = document.querySelector('.women');

gsap.fromTo(women.children, {y: '+=100', opacity: 0}, {y: 0, opacity:1, stagger:0.2,  duration: 3, ease:'easeInOut', scrollTrigger: {
    trigger:  '.a',
    start: '-15% 50%',
   


}})
