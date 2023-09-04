import { products } from '../data/product.js';
import {createCards} from './utils/creating-shop-cards.js'
import {creatingAddtoCart} from './utils/creating-shop-cards.js';
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
// end of creating tabs


const cardsContianerTag = document.querySelector('.cards-inner-container')
const nextPageTag = document.querySelector('#next-page')
const prePageTag = document.querySelector('#pre-page')
export const pageItemTag = document.querySelectorAll('.page-item')
export const pageNum = document.querySelectorAll('.page-num')
export const tab1 = document.querySelector('[data-value="1"]')
export const tab2 = document.querySelector('[data-value="2"]')
export const tab3 = document.querySelector('[data-value="3"]')
export const tab4 = document.querySelector('[data-value="4"]')

let indexToChooseArray = 0

tab1.addEventListener('click',()=>{
    indexToChooseArray = 0
    prePageTag.classList.add('disabled')
    nextPageTag.classList.remove('disabled')
    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)
    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})

tab2.addEventListener('click',()=>{
    indexToChooseArray = 1
    prePageTag.classList.remove('disabled')
    nextPageTag.classList.remove('disabled')

    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)
    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})

tab3.addEventListener('click',()=>{
    indexToChooseArray = 2
    prePageTag.classList.remove('disabled')
    nextPageTag.classList.remove('disabled')

    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)
    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
tab4.addEventListener('click',()=>{
    indexToChooseArray = 3
    prePageTag.classList.remove('disabled')
    nextPageTag.classList.add('disabled')
    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)
    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})

prePageTag.addEventListener('click',()=>{
    if (indexToChooseArray===0) {
        prePageTag.classList.add('disabled')
        createCards(products,cardsContianerTag,indexToChooseArray)
        const cardContainers = document.querySelectorAll('.shop-container')
        creatingAddtoCart(cardContainers)
        hiddenUp()
        return
    }
    nextPageTag.classList.remove('disabled')
    indexToChooseArray--
    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
nextPageTag.addEventListener('click',()=>{
    if (indexToChooseArray===3) {
        nextPageTag.classList.add('disabled')
        createCards(products,cardsContianerTag,indexToChooseArray)
        const cardContainers = document.querySelectorAll('.shop-container')
        creatingAddtoCart(cardContainers)
        hiddenUp()
        return
    }
    prePageTag.classList.remove('disabled')
    indexToChooseArray++
    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})

createCards(products,cardsContianerTag,indexToChooseArray)
const cardContainers = document.querySelectorAll('.shop-container')
creatingAddtoCart(cardContainers)

const categoreTabs = document.querySelectorAll('.categorie')
const clothingTag = document.querySelector('.clothing')
const accessoriesTag = document.querySelector('.accessories')
const shoesTag = document.querySelector('.shoes')
const bagsTag = document.querySelector('.bags')
const allItemsTag = document.querySelector('.all-items')

let clothingItems = [[]]
products.forEach(cardArray=>{
    for (let i = 0; i < cardArray.length; i++) {
        const  {keyword} = cardArray[i];
        if (keyword.includes('clothing')) {
            clothingItems[0].push(cardArray[i])
        }
    }
})

let accessoriesItems = [[]]
products.forEach(cardArray=>{
    for (let i = 0; i < cardArray.length; i++) {
        const  {keyword} = cardArray[i];
        if (keyword.includes('accessories')) {
            accessoriesItems[0].push(cardArray[i])
        }
    }
})

let shoesItems = [[]]
products.forEach(cardArray=>{
    for (let i = 0; i < cardArray.length; i++) {
        const  {keyword} = cardArray[i];
        if (keyword.includes('shoes')) {
            shoesItems[0].push(cardArray[i])
        }
    }
})

let bagsItems = [[]]
products.forEach(cardArray=>{
    for (let i = 0; i < cardArray.length; i++) {
        const  {keyword} = cardArray[i];
        if (keyword.includes('bags')) {
            bagsItems[0].push(cardArray[i])
        }
    }
})

clothingTag.addEventListener('click',(event)=>{
    categoreTabs.forEach(tab=>{
        tab.classList.remove('active')
    })
    clothingTag.classList.add('active')
    createCards(clothingItems,cardsContianerTag,0,'catego')
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
accessoriesTag.addEventListener('click',()=>{
    categoreTabs.forEach(tab=>{
        tab.classList.remove('active')
    })
    accessoriesTag.classList.add('active')
    createCards(accessoriesItems,cardsContianerTag,0,'catego')
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
shoesTag.addEventListener('click',()=>{
    categoreTabs.forEach(tab=>{
        tab.classList.remove('active')
    })
    shoesTag.classList.add('active')
    createCards(shoesItems,cardsContianerTag,0,'catego')
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
bagsTag.addEventListener('click',()=>{
    categoreTabs.forEach(tab=>{
        tab.classList.remove('active')
    })
    bagsTag.classList.add('active')
    createCards(bagsItems,cardsContianerTag,0,'catego')
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
                addToCart(addToCartTag.id,1)
                        updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
})
allItemsTag.addEventListener('click',()=>{
    categoreTabs.forEach(tab=>{
        tab.classList.remove('active')
    })
    allItemsTag.classList.add('active')
    createCards(products,cardsContianerTag,indexToChooseArray)
    const cardContainers = document.querySelectorAll('.shop-container')
    creatingAddtoCart(cardContainers)

    const addToCartTags = document.querySelectorAll('.add-to-cart-button')
addToCartTags.forEach(addToCartTag=>{
    addToCartTag.addEventListener('click',()=>{
        addToCart(addToCartTag.id,1)
                updateCartQuantity()

        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
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
        addToCart(addToCartTag.id,1)
        updateCartQuantity()
        const id ="animate-" +  addToCartTag.id
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
addToFavProcess()
function addToFavProcess(params) {
    const addToFavTags = document.querySelectorAll('.add-to-fav-button')
addToFavTags.forEach(addToFavTag=>{
    addToFavTag.addEventListener('click',()=>{
        const id = "fav-icon-container-" + addToFavTag.id
        const favIconContainer = document.querySelector(`.${id}`)
        favIconContainer.classList.add('clicked-fav')
        setTimeout(() => {
            favIconContainer.classList.remove('clicked-fav')
        }, 3000);
        addToFav(addToFavTag.id,1)
        updateFavItemCount()
    })
    hiddenUp()
})
}
const addToFavTags = document.querySelectorAll('.add-to-fav-button')
addToFavTags.forEach(addToFavTag=>{
    addToFavTag.addEventListener('click',()=>{
        const id = "fav-icon-container-" + addToFavTag.id
        const favIconContainer = document.querySelector(`.${id}`)
        favIconContainer.classList.add('clicked-fav')
        setTimeout(() => {
            favIconContainer.classList.remove('clicked-fav')
        }, 3000);
        addToFav(addToFavTag.id,1)
        updateFavItemCount()
    })
})
const favItemCountTags = document.querySelectorAll('.fav-item-count')

 function updateFavItemCount() {
  
  let totalFavItem = totalFavItemCount()

  favItemCountTags.forEach(tag=>{
    tag.innerHTML = totalFavItem;
})
  hiddenUp()
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

const shoppingKeywords = ["glasses","shop", "product", "products", "item", "items", "clothes", "cloth", "shoes", "shoe", "bags", "bag", "pants", "pant", "shirt", "shirts","shirtes","glasses","throuser","sneaker","shoes spring","accessories","accessorie","accessori","rings","ring","store","clothing","clothings","suit","tote","watches","belts","belt","hats","hat","tshirt","t shirt","t-shirt"];
const shoppingKeywordss = ["shop","store","boutique","retailer","outlet","emporium","market","bazaar","shoppe","establishment","mart","supermarket","shopfront","vendor","stall","department store","corner store","mini-mart","shopping center","online store","e-commerce site","retail shop","trading post","purveyor","business","buy","purchase","acquire","procure","obtain","get","product","products","item","items","merchandise","goods","commodity","clothes","clothing","apparel","attire","wear","garments","outfit","ensemble","costume","cloth","fabrics","textiles","shoes","shoe","footwear","sneakers","boots","sandals","bags","bag","handbag","backpack","purse","tote","pants","pant","trousers","jeans","slacks","shirt","shirts","blouse","top","t-shirt","polo shirt","sweater","hoodie","dress","skirt","suit","jacket","coat","accessories","jewelry","watches","scarves","hats","belts","gloves"
];
const contactKeywords = ["contact","contacts","report","address","location"]
const favKeywords =["fav","favorite","favorites","heart"]
const addToCartKeywords = ["total","add to cart","added","add","cart","add item","added item","added up item","add up item","add up items","added up items"]

headerSearchBtn.addEventListener('click',()=>{
    searching()
    hiddenUp()
})
headerSearchInputTag.addEventListener('keyup',(event)=>{
    if (event.key==="Enter") {
        searching()
    }
    hiddenUp()
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
    hiddenUp()
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

const allItemTab = document.querySelector('#all-items')
const clothingTab = document.querySelector('#clothing')
const accessoriesTab = document.querySelector('#accessories')
const shoesTab = document.querySelector('#shoes')
const bagsTab = document.querySelector('#bags')


const itemsInputTag = document.querySelector('#items-search-input')
const itemsBtnTag = document.querySelector('#items-search-btn')

itemsBtnTag.addEventListener('click',()=>{
    searchItem()
    hiddenUp()
})
itemsInputTag.addEventListener('keyup',(event)=>{
    if (event.key==="Enter") {
        searchItem()
    }
    hiddenUp()
})

function searchItem() {
    let searchText = itemsInputTag.value.toLowerCase()
    if (searchText==="normal" || searchText==="all" || searchText==="items" ||searchText==="all items" ||searchText==="all item" ||searchText==="allitems" ||searchText==="allitem") {
        allItemTab.click()
    }else if (searchText==="clothing" || searchText==="clothes" || searchText==="pants" || searchText==="throuser" || searchText==="pant" || searchText==="shirt" || searchText==="cargo" || searchText==="jean" || searchText==="suit") {
        clothingTab.click()
    }else if (searchText==="accessories" || searchText==="accessorie" || searchText==="hats" || searchText==="hat" ||  searchText==="watches" || searchText==="watch" || searchText==="glasses" || searchText==="belts" || searchText==="belt" || searchText==="rings" || searchText==="earing" || searchText==="ear ring" || searchText==="earring" ||searchText==="chain" || searchText==="ring") {
        accessoriesTab.click()
    }else if (searchText==="shoes" || searchText==="shoe" || searchText==="spring"|| searchText==="spring shoe" || searchText==="spring shoes" || searchText==="sneaker" || searchText==="slice" || searchText==="flip") {
        shoesTab.click()
    }else if (searchText==="bags" || searchText==="bag" || searchText==="tote" || searchText==="totes" || searchText==="totebags" || searchText==="tote bags"|| searchText==="totebag"|| searchText==="totebags"|| searchText==="back pack"|| searchText==="back packs" || searchText==="backpack"|| searchText==="backpacks" ){
        bagsTab.click()
    }
    hiddenUp()
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

