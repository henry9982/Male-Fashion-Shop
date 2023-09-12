import { swiperInfo } from "../data/swiper-info.js";
import {createIntroCard} from './utils/creating-cards.js';
import { indexLocalStorage , trgetDate } from "./utils/data-store.js";
import {products} from "../data/product.js"
import {cart,addToCart} from '../data/cart.js';
import {totalQuantity} from "./utils/total-quantity.js"
import {addToFav, favItems} from '../data/fav.js';
import {totalFavItemCount} from './utils/total-fav-item.js';

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
    linkEle.classList.add('animated-icon')
    linkEle.id = i;
    linkEle.classList.add(`tab-${i}`)
    linkEle.href =link; 
    linkEle.innerHTML = name; 
    linkEle.rel="noopener noreferrer"

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
        <img class="img-lg-fluid image" src="..${image}" alt="">
    </div>
    `
    swiperWrapperTag.innerHTML+=slide
}


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
    }, 300);
})
// end of swiper

const itemContainers = document.querySelectorAll('.item-contain');

itemContainers.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const id = item.id;
        const link = document.querySelector(`.${id}`);
        link.classList.add('shop-now-hover');
    });
});

itemContainers.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        const id = item.id;
        const link = document.querySelector(`.${id}`);
        link.classList.remove('shop-now-hover');
    });
});

const bestSellersCardContainer = document.querySelector('.best-sellers-container');
const newArrivalsCardContainer = document.querySelector('.new-arrivals-container');
const hotSalesCardContainer = document.querySelector('.hot-sales-container');


let bestSellerCards;
for (let i = 0; i < products.length; i++) {
    const innerArray = products[0];
    bestSellerCards = innerArray.filter(product=>{
        return product.keyword.includes('best sellers')
    })
}
let newArrivalsCards;
for (let i = 0; i < products.length; i++) {
    const innerArray = products[0];
    newArrivalsCards = innerArray.filter(product=>{
        return product.keyword.includes('new arrivals')
    })
}
let hotSalesCards;
for (let i = 0; i < products.length; i++) {
    const innerArray = products[0];
    hotSalesCards = innerArray.filter(product=>{
        return product.keyword.includes('hot sales')
    })
}




const weeklySaleImageTag = document.querySelector('.weekly-sale-image')
const weeklyTitleTag = document.querySelector('.weekly-sale-title')

const normalPriceTag = document.querySelector('.normal-price')
const promoPriceTag = document.querySelector('.promo-price')

const daysTag = document.querySelector('.days')
const hoursTag = document.querySelector('.hours')
const minutesTag = document.querySelector('.minutes')
const secondsTag = document.querySelector('.seconds')


let indexToChooseProduct = JSON.parse(localStorage.getItem('indexNum'))
if (!indexToChooseProduct) {
    indexToChooseProduct = 0
}
indexLocalStorage(indexToChooseProduct)


let storedTargetDateString = JSON.parse(localStorage.getItem('targetdate'))
if (!storedTargetDateString) {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate()+7)
    storedTargetDateString=targetDate
    localStorage.setItem('targetdate',JSON.stringify(storedTargetDateString))
    
}
let storedTargetDate = new Date(storedTargetDateString)

promotionTimeCountDown()

export function promotionTimeCountDown() {
    console.log(storedTargetDate);

    const {title,price,image,id} = products[0][indexToChooseProduct]
    weeklySaleImageTag.src=`..${image}`
    weeklyTitleTag.innerHTML=title
    normalPriceTag.innerHTML=`$${(price/100).toFixed(2)}`
    const percentOfPrice =(price/100).toFixed(2) - (((price/100).toFixed(2))*0.2).toFixed(2) 
    promoPriceTag.innerHTML=`$${(percentOfPrice).toFixed(2)}`

    for (let i = 0; i < products.length; i++) {
        const innerArray = products[i];
        for (let j = 0; j < innerArray.length; j++) {
            const element = innerArray[j];
            if (element.id === id) {
                element.discount = 0.20
            }
        }
    }
    


    const intervalId = setInterval(() => {
        const currentDate = new Date()
        const timeRemaining = storedTargetDate-currentDate
        
        

        if (timeRemaining <= 0) {
            clearInterval(intervalId)
            const reloadTime = new Date ()
            reloadTime.setDate(reloadTime.getDate()+7)
            storedTargetDate = reloadTime
            localStorage.setItem('targetdate',JSON.stringify(reloadTime))
            indexToChooseProduct++
            indexLocalStorage(indexToChooseProduct)
            if (indexToChooseProduct===10) {
                indexToChooseProduct=0
                indexLocalStorage(indexToChooseProduct)
            }
            promotionTimeCountDown()
        }


        const days = Math.floor(timeRemaining / (1000*60*60*24)) 
        const hours = Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60)) 
        const minutes = Math.floor((timeRemaining % (1000*60*60))/(1000*60)) 
        const seconds = Math.floor((timeRemaining % (1000*60))/1000)

        const datText = days < 10 ? `0${days}` : `${days}`
        const hoursText = hours < 10 ? `0${hours}` : `${hours}`
        const minutesText = minutes < 10 ? `0${minutes}` : `${minutes}`
        const secondsText = seconds < 10 ? `0${seconds}` : `${seconds}`

        daysTag.innerHTML=datText
        hoursTag.innerHTML=hoursText
        minutesTag.innerHTML=minutesText
        secondsTag.innerHTML=secondsText
    }, 900);
}



createIntroCard(bestSellerCards,bestSellersCardContainer,)
createIntroCard(newArrivalsCards,newArrivalsCardContainer,)
createIntroCard(hotSalesCards,hotSalesCardContainer,)
const cardContainers = document.querySelectorAll('.card-container')
cardContainers.forEach((card) => {
    card.addEventListener('mouseenter', (event) => {
        const id = event.target
        id.classList.add('hovered');
    });
});

cardContainers.forEach((card) => {
    card.addEventListener('mouseleave', (event) => {
        const id = event.target
        id.classList.remove('hovered');
    });
});

const addToFavTags = document.querySelectorAll('.add-to-fav-button')
addToFavTags.forEach(addToFavTag=>{
    addToFavTag.addEventListener('click',()=>{
        const id = "fav-icon-container-" + addToFavTag.id
        const favIconContainers = document.querySelectorAll(`.${id}`)
        console.log(favIconContainers);
        favIconContainers.forEach(favIconContainer => {
            favIconContainer.classList.add('clicked-fav')
            setTimeout(() => {
                favIconContainer.classList.remove('clicked-fav')
            }, 3000);
        });
        addToFav(addToFavTag.id,1)
        updateFavItemCount()
    })
})




const cartQuantityTags = document.querySelectorAll('.quantity-number')

 function updateCartQuantity() {
  
  let cartQuantity = totalQuantity()

  cartQuantityTags.forEach(tag=>{
    tag.innerHTML = cartQuantity;
  })
}
document.addEventListener('DOMContentLoaded',()=>{
    updateCartQuantity()
  })
// add to cart interactive
const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
        const id ="animate-" +  addToCartTag.id
        addToCart(addToCartTag.id,1)
        updateCartQuantity()
        const animationContainers =document.querySelectorAll(`#${id}`)
        animationContainers.forEach(animationContainer=>{
            animationContainer.innerHTML=`          
            <video width="36" height="36" preload="none" style="background: transparent  url('https://cdn-icons-png.flaticon.com/512/6416/6416374.png') 50% 50% / fit no-repeat;" autoplay="autoplay" loop="true" muted="muted" playsinline="">
            <source src="https://cdn-icons-mp4.flaticon.com/512/6416/6416374.mp4" type="video/mp4">
            </video>`
            setTimeout(() => {
                animationContainer.innerHTML=""
            }, 1800);
        })
    })
})

const favItemCountTags = document.querySelectorAll('.fav-item-count')

 function updateFavItemCount() {
  
  let totalFavItem = totalFavItemCount()

    favItemCountTags.forEach(tag=>{
        tag.innerHTML = totalFavItem;
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    updateFavItemCount()
  })

const headerSearchInputTag = document.querySelector('.header-search-input')
const headerSearchBtn = document.querySelector('.header-search-btn')

const homeTabTag = document.querySelector('.tab-0')
const shopTabTag = document.querySelector('.tab-1')
const blogTabTag = document.querySelector('.tab-2')
const contactTabTag = document.querySelector('.tab-3')
const favTabTag = document.querySelector('.fav-tab')
const addToCartTabTag = document.querySelector('.add-to-cart-tab')

const footerBtn = document.querySelector('.footer-btn')
const bestSellerTab = document.querySelector('.bestSeller')
const newArrivalsTab = document.querySelector('.newArrivals')
const hotSalesTab = document.querySelector('.hotSales')
const bestSellerBtn = document.querySelector('#BestSellers-tab')
const newArrivalsBtn = document.querySelector('#NewArrivals-tab')
const hotSalesBtn = document.querySelector('#HotSales-tab')



const shoppingKeywords = ["glasses","shop", "product", "products", "item", "items", "clothes", "cloth", "shoes", "shoe", "bags", "bag", "pants", "pant", "shirt", "shirts","shirtes","glasses","throuser","sneaker","shoes spring","accessories","accessorie","accessori","rings","ring","store","clothing","clothings","suit","tote","watches","belts","belt","hats","hat","tshirt","t shirt","t-shirt"];
const shoppingKeywordss = ["shop","store","boutique","retailer","outlet","emporium","market","bazaar","shoppe","establishment","mart","supermarket","shopfront","vendor","stall","department store","corner store","mini-mart","shopping center","online store","e-commerce site","retail shop","trading post","purveyor","business","buy","purchase","acquire","procure","obtain","get","product","products","item","items","merchandise","goods","commodity","clothes","clothing","apparel","attire","wear","garments","outfit","ensemble","costume","cloth","fabrics","textiles","shoes","shoe","footwear","sneakers","boots","sandals","bags","bag","handbag","backpack","purse","tote","pants","pant","trousers","jeans","slacks","shirt","shirts","blouse","top","t-shirt","polo shirt","sweater","hoodie","dress","skirt","suit","jacket","coat","accessories","jewelry","watches","scarves","hats","belts","gloves"
];
const contactKeywords = ["contact","contacts","report","address","location"]
const favKeywords =["fav","favorite","favorites","heart"]
const addToCartKeywords = ["total","add to cart","added","add","cart","add item","added item","added up item","add up item","add up items","added up items"]

headerSearchBtn.addEventListener('click',()=>{
    searching()
})
headerSearchInputTag.addEventListener('keyup',(event)=>{
    if (event.key==="Enter") {
        searching()
    }
})

function searching() {
    let searchText = headerSearchInputTag.value.toLowerCase()
    if (searchText==="home" || searchText==="main") {
        homeTabTag.click()
    }else if(shoppingKeywords.includes(searchText) || shoppingKeywordss.includes(searchText)){
        shopTabTag.click()
    }else if(searchText==="blog" || searchText==="news"){
        blogTabTag.click()
    }else if(contactKeywords.includes(searchText)){
        contactTabTag.click()
    }else if (favKeywords.includes(searchText)) {
        favTabTag.click()
    }else if (addToCartKeywords.includes(searchText)) {
        addToCartTabTag.click()
    }else if (searchText==="register" || searchText==="registration") {
        footerBtn.click()
    }else if (searchText==="best seller" || searchText==="best sellers" || searchText==="bestseller" ||searchText==="bestsellers"){
        bestSellerTab.click()
        bestSellerBtn.click()
    }else if (searchText==="new arrivals" || searchText==="new arrival" || searchText==="newarrival" || searchText==="newarrivals"){
        newArrivalsTab.click()
        newArrivalsBtn.click()
    }else if(searchText==="hot sales"||searchText=="hot sale"||searchText==="hotsale"||searchText==="hotsales"){
        hotSalesTab.click()
        hotSalesBtn.click()
    }
}



const offcanInput = document.querySelector('.offcan-input')
const offcanBtn = document.querySelector('.offcan-btn')

offcanBtn.addEventListener('click',()=>{
    searching2()
})
offcanInput.addEventListener('keyup',(event)=>{
    if (event.key==="Enter") {
        searching2()
    }
})


function searching2() {
    let searchText = offcanInput.value.toLowerCase()
    if (searchText==="home" || searchText==="main") {
        homeTabTag.click()
    }else if(shoppingKeywords.includes(searchText) || shoppingKeywordss.includes(searchText)){
        shopTabTag.click()
    }else if(searchText==="blog" || searchText==="news"){
        blogTabTag.click()
    }else if(contactKeywords.includes(searchText)){
        contactTabTag.click()
    }else if (favKeywords.includes(searchText)) {
        favTabTag.click()
    }else if (addToCartKeywords.includes(searchText)) {
        addToCartTabTag.click()
    }else if (searchText==="register" || searchText==="registration") {
        footerBtn.click()
    }else if (searchText==="best seller" || searchText==="best sellers" || searchText==="bestseller" ||searchText==="bestsellers"){
        bestSellerTab.click()
        bestSellerBtn.click()
    }else if (searchText==="new arrivals" || searchText==="new arrival" || searchText==="newarrival" || searchText==="newarrivals"){
        newArrivalsTab.click()
        newArrivalsBtn.click()
    }else if(searchText==="hot sales"||searchText=="hot sale"||searchText==="hotsale"||searchText==="hotsales"){
        hotSalesTab.click()
        hotSalesBtn.click()
    }
}



const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right')
        } else {
            entry.target.classList.remove('show-right')
        }
    })
})

const hiddenRightElements = document.querySelectorAll('.hidden-right')
hiddenRightElements.forEach((el)=>observer.observe(el))

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left')
        } else {
            entry.target.classList.remove('show-left')
        }
    })
})

const hiddenLeftElements = document.querySelectorAll('.hidden-left')
hiddenLeftElements.forEach((el)=>observer2.observe(el))


const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show-up')
        } else {
            entry.target.classList.remove('show-up')
        }
    })
})

const hiddenUpElements = document.querySelectorAll('.hidden-up')
hiddenUpElements.forEach((el)=>observer3.observe(el))


const shopnowBtn = document.querySelector('.shop-now-btn')
const shopTab = document.querySelector('.tab-1')
shopnowBtn.addEventListener('click',()=>{
    shopTab.click()
})