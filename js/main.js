//########## BURGER ############ 
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const mobileBody = document.querySelector('body');





menuIconWrapper.addEventListener('click', function() {
    menuIcon.classList.toggle('menu-icon-active');

    mobileNav.classList.toggle('open');
    mobileBody.classList.toggle('no-scrole');

})



// ############### VIDEO #################
const buttonPlay = document.querySelector('.button-play');
const buttonPlayImg = document.querySelector('.button-play-img');
const videoPlay = document.querySelector('.story-video');

console.log(buttonPlayImg)
videoPlay.addEventListener('click', function() {

    if (videoPlay.paused) {
        videoPlay.play();
        buttonPlayImg.src = './img/pause.svg';
    } else {
        videoPlay.pause();
        buttonPlayImg.src = './img/play-white.svg';
    }

})
