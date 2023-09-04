import { favItems ,removeFromFav} from "../data/fav.js";
import {products} from "../data/product.js";
import {totalFavItemCount} from './utils/total-fav-item.js';

const favContianerTag = document.querySelector('.fav-cart-contianer')

let favItemsHtml = ''
favItems.forEach((item)=>{
    const {productId,chosen}=item
    let matchingProduct;

    products.forEach(productsArray=>{
        productsArray.forEach(product=>{
            if (product.id===productId) {
                matchingProduct=product
            }
        })
    })
    const {title,rating,price,image,id} = matchingProduct
    const cost = (price / 100).toFixed(2)
    favItemsHtml+=`
    <div class="col d-flex justify-content-center whole-fav-card-container-${id}">
    <div class="card  fav-container">
        <div class="fav-image">
            <img src="..${image}" class="card-img-top img-fluid" alt="">
        </div>
        <div class="card-body d-flex flex-column align-content-between justify-content-between position-relative">
            <h5 class="card-title">${title}</h5>
            <img src="../pics/rating/rating-${rating}.png" class="" width="55px" alt="">
            <p class="card-text">$ ${cost}</p>
            <button class="fav-btn">Shop Now</button>
            <div class="position-absolute d-flex flex-column justify-content-center align-items-center remove-fav-icon-container remove-container-${id}">
                <img src="   https://cdn-icons-png.flaticon.com/512/10934/10934746.png " width="27" height="27" alt="" title="" class="img-small remove-fav" style="cursor:pointer" id="${id}">
                <video class="remove-fav-animation" width="32" height="32" preload="none" style="background: transparent  url('https://cdn-icons-png.flaticon.com/512/9937/9937597.png') 50% 50% / fit no-repeat;" autoplay="autoplay" loop="true" muted="muted" playsinline="">
                    <source src="https://cdn-icons-mp4.flaticon.com/512/9937/9937597.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
    `
})
favContianerTag.innerHTML=favItemsHtml


const totalItemShowTag = document.querySelector('.fav-item-total-show')

const quantityShowTag = document.querySelector('.quantity-show')
showTotalFavItem()
function showTotalFavItem() {
    let favTotal = totalFavItemCount()
    let favTotalText
    if (favTotal===0) {
        favTotalText="No item"
      }else if(favTotal===1){
        favTotalText= "1 item"
      }else{
        favTotalText = `${favTotal} items`
      }
      totalItemShowTag.innerHTML = favTotalText
}

const removeFavTags = document.querySelectorAll('.remove-fav')
removeFavTags.forEach(removeFav=>{
        removeFav.addEventListener('click',()=>{
        const id = "remove-container-" + removeFav.id
        const wholeContainerId = 'whole-fav-card-container-'+removeFav.id
        const wholeContainerTag = document.querySelector(`.${wholeContainerId}`)
        const favIconContainer = document.querySelector(`.${id}`)
        favIconContainer.classList.add('click-delete')
        setTimeout(() => {
            favIconContainer.classList.remove('click-delete')
            wholeContainerTag.remove()
            removeFromFav(removeFav.id)
            showTotalFavItem()   
        }, 3000);    
    })
})

const shopNowBtns = document.querySelectorAll('.fav-btn')
shopNowBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        totalItemShowTag.click()
    })
})