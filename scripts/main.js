import { swiperInfo } from "../data/swiper-info.js";

const searchContainerTag = document.querySelector('.search-container');
const inputTag = document.querySelector('.search-input-cus');
const cancleTag = document.querySelector('.cancle')

searchContainerTag.addEventListener('mouseenter', () => {
    inputTag.style.width = "320px";
    cancleTag.style.display="block"
    sliderTag.style.width="0px"
    sliderTag.style.transform="translate(0px)"
});
inputTag.addEventListener('keydown', (event) => {
    if (event.key==="Backspace") {
        return
    }
    inputTag.style.width = "320px";
    cancleTag.style.display="block"
    sliderTag.style.width="0px"
    sliderTag.style.transform="translate(0px)"
});

cancleTag.addEventListener('click', () => {
    inputTag.style.width = "75px";
    cancleTag.style.display="none"
    sliderTag.style.width="0px"
    sliderTag.style.transform="translate(0px)"
});
// the upper codes are for creating interactive search input

const linkContainerTag = document.querySelector('.link-container');
const sliderTag = document.querySelector('.sliderbar');
import {tabs} from '../data/tabs.js'

for (let i = 0; i < tabs.length; i++) {
    const { name,link } = tabs[i];

    const ele = document.createElement('li');
    ele.classList.add('nav-link');

    const linkEle = document.createElement('a');
    linkEle.classList.add('nav-link');
    linkEle.id = i;
    linkEle.href =link; 
    linkEle.textContent = name; 

    ele.appendChild(linkEle);

linkContainerTag.addEventListener('mousemove', (event) => {
    const hoveredLink = event.target.closest('.nav-link');
    
    if (hoveredLink) {
        const id = hoveredLink.id;
        const tag = document.getElementById(id);

        if (tag) {
            sliderTag.style.width = `${tag.offsetWidth}px`;
            sliderTag.style.transform = `translateX(${tag.offsetLeft}px)`;
        }
    }
});
    linkContainerTag.appendChild(ele);
}


// swiper 
const swiper = new Swiper('.swiper', {

    autoplay:{
        delay:2000,
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


//   creating swiper items by using Data swiper info
const swiperWrapperTag = document.querySelector('.swiper-wrapper')

let slides =''
for (let i = 0; i < swiperInfo.length; i++) {
    const {title,description,image} = swiperInfo[i];
    const slide = `
    <div class="swiper-slide container-fluid d-flex justify-content-between justify-content-lg-around px-5 overflow-hidden position-relative">
        <div class="align-self-center description-container">
            <div style="width: 300px;">
                <h3 class="slide-title">${title}</h3>
                <p class="slide-des description">${description}</p>
            </div>
        </div>
        <img class="img-lg-fluid image" src="${image}" alt="">
    </div>
    `
    slides+=slide
}
swiperWrapperTag.innerHTML=slides


// this code is for making swiper animation
swiper.on('slideChange',function () {
    let activeSlide = swiper.slides[swiper.activeIndex]
    let animatedTitle = activeSlide.querySelector('.slide-title')
    let animatedDescription = activeSlide.querySelector('.slide-des')
    let slideImage = activeSlide.querySelector('.image')

    animatedTitle.classList.add('slide-title-animation')
    animatedDescription.classList.add('slide-description-animation')
    slideImage.classList.add('slide-image-animation')
})

const previousBtnTag = document.querySelector('.swiper-button-next')
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        previousBtnTag.click()
    }, 100);
})
// end of swiper






