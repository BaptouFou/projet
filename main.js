const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const burgerContainer = document.querySelector('.burger-container');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burgerContainer.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const text = document.querySelector('.animation span');
    
function startAnimation() {
    text.classList.add('start');
}; 

function stopAnimation() {
    text.classList.remove('start');
};

setInterval(startAnimation, 2000);
setInterval(stopAnimation, 4000)