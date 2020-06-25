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
let open = false;

burgerContainer.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (open == false) {
        open = true;
        timer = setInterval(setVisible, 50);
    } else {
        open = false;
        timer = setInterval(setInvisible, 50)
    }
});

const animation = document.querySelector('.animation span');

function startAnimation() {
    animation.classList.add('start');
};

function stopAnimation() {
    animation.classList.remove('start');
};

setInterval(startAnimation, 2000);
setInterval(stopAnimation, 4000);

const links = document.querySelectorAll('.nav-links li');
let index = 0;
let timer = null;

function setVisible() {
    navLinks.classList.add('active');
    links[index].classList.add('visible');
    index++;
    if (index == links.length) {
        clearInterval(timer);
        index = links.length - 1;
        timer = null;
    };
};

function setInvisible() {
    links[index].classList.remove('visible');
    index--;
    if (index == -1) {
        clearInterval(timer);
        index = 0;
        timer = null;
        navLinks.classList.remove('active');
    };
};

let controller = new ScrollMagic.Controller();

function appearX(tl, element, value, timing = '-=0') {
    tl.fromTo(
        element,
        0.7,
        {
            transform: `translateX(${value}px)`,
            opacity: 0,
        },
        {
            transform: 'translateX(0)',
            opacity: 1,
            ease: Power2.easeInOut
        },
        timing
    )
}

function appearY(tl, element, start, timing = '-=0') {
    tl.fromTo(
        element,
        0.7,
        {
            transform: `translateY(${start}px)`,
            opacity: 0,
        },
        {
            transform: 'translateY(0)',
            opacity: 1,
            ease: Power2.easeInOut
        },
        timing
    )
}

let tlHome = new TimelineMax();
appearX(tlHome, '.logo', -200);
if (window.innerWidth > 1024) {
    appearX(tlHome, '.nav-links li', 200, '-=0.7');
};
if (window.innerWidth <= 1024) {
    appearX(tlHome, '.burger-container', 200, '-=0.7');
};
appearX(tlHome, '.home .svg', 200, '-=0.2');
appearX(tlHome, '.home .column .title', -200, '-=0.2');
appearX(tlHome, '.home .column .subtitle', -200, '-=0.6');
appearX(tlHome, '.home .column .button', -200, '-=0.6');

let tlDownload = new TimelineMax();
appearX(tlDownload, '.download .svg', -200);
appearX(tlDownload, '.download .column .title', 200, '-=0.2');
appearX(tlDownload, '.download .column .subtitle', 200, '-=0.6');
appearX(tlDownload, '.download .column .subtitle2', 200, '-=0.6');
appearX(tlDownload, '.download .column .input', 200, '-=0.6');
appearX(tlDownload, '.download .column .button', 200, '-=0.6');

let tlFeatures = new TimelineMax();
appearX(tlFeatures, '.features .svg', 200);
appearX(tlFeatures, '.features .column .title', -200, '-=0.2');
appearX(tlFeatures, '.features .column .subtitle', -200, '-=0.6');
appearY(tlFeatures, '.features .box-feature', -50, '-=0.2');
appearX(tlFeatures, '.features .box-feature .title2', -50, '-=0.2');
appearX(tlFeatures, '.features .box-feature .subtitle2', 50, '-=0.2');

let tlReviews = new TimelineMax();
appearX(tlReviews, '.reviews .column .title', 200);
appearX(tlReviews, '.reviews .column .button', -100, '-=0.2');
appearX(tlReviews, '.reviews .box-review', -200, '-=0.2');
appearX(tlReviews, '.reviews .box-review .stars', -30, '-=0.4');
appearX(tlReviews, '.reviews .box-review .subtitle2', 30, '-=0.6');
appearX(tlReviews, '.download .column .button', 200, '-=0.6');

let tlEarn = new TimelineMax();
appearX(tlEarn, '.earn .animation', 200);
appearX(tlEarn, '.earn .button', -200, '-=0.2');

function scene(trigger, tween, hook = 0.5 , reverse = false) {
    new ScrollMagic.Scene({
        triggerElement: trigger
        })
        .setTween(tween)
        .triggerHook(hook)
        .addTo(controller)
        .reverse(reverse);
}

scene('.home', tlHome);
scene('.download', tlDownload);
scene('.features', tlFeatures);
scene('.reviews', tlReviews);
scene('.earn', tlEarn);
