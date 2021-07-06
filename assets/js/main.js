/*=================Show menu =======================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/*===============Menushow=========*/
/* validation if constant exist */
if(navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===============MenuHidden=========*/
/* validation if constant exist */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*===============Remove menu mobile=========*/
const navLink  = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //remove when click link 
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*==================Change Background Header===========*/
function scrollHeader(){
    const header = document.getElementById('header')
    //when scroll is greater > 100 viewport hight, add class
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*=========Swipper==========*/
 var swiper = new Swiper(".discover__container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop : true,
        spaceBetween : 32,
        coverflowEffect: {
          rotate: 0,
          
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
/*=========VIDEO==========*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playVideo(){
    if(videoFile.paused){
        //play video 
        videoFile.play();

        //change icon to
        videoIcon.classList.add('ri-pause-fill')
        videoIcon.classList.remove('ri-play-fill')
    }else{
         //play video 
         videoFile.pause();

         //change icon to
         videoIcon.classList.add('ri-play-fill')
         videoIcon.classList.remove('ri-pause-fill')
    }
}
videoButton.addEventListener('click', playVideo);

function finalVideo(){
        videoIcon.classList.remove('ri-pause-fill')
         videoIcon.classList.add('ri-play-fill')
        
}
videoFile.addEventListener('ended', finalVideo)


















