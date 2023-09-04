import {totalQuantity} from "./utils/total-quantity.js"
import {addToFav, favItems} from '../data/fav.js';
import {totalFavItemCount} from './utils/total-fav-item.js';
import {blogCards} from '../data/blog-cards.js';

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
    linkEle.rel="noopener noreferrer"
    linkEle.innerHTML = name; 

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

const blogCardsContainTag = document.querySelector('.blog-cards-contain')
blogCards.forEach(card=>{
    const {image,title,date} = card
    let createCard = `
    <div class="col-lg-4 col-md-6 col-sm-6 col-8 d-flex flex-column m-auto blog-card hidden-up">
        <div class="blog-image-container">
            <img src="..${image}" alt="">
        </div>
        <div class="blog-text-container">
            <small><i class="bi bi-calendar4-range"></i>  <small>${date}</small></small>
            <h5>${title}</h5>
            <h6>Read More</h6>
        </div>
    </div>
    `
    blogCardsContainTag.innerHTML+=createCard
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
    }
}

hiddenUp()
function hiddenUp(params) {
    const observer3 = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add('show-up')
            } else {
            }
        })
    })
    
    const hiddenUpElements = document.querySelectorAll('.hidden-up')
    hiddenUpElements.forEach((el)=>observer3.observe(el))
}