import { cart } from "../data/cart.js";
import { products } from "../data/product.js";
import {removeFromCart,totalCount,minusQuantity,plusQuantity} from '../data/cart.js';
import {totalQuantity} from './utils/total-quantity.js';


const buttons = document.querySelectorAll('.place-order-button')
buttons.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        
        let ripples = document.createElement('span')
        ripples.classList.add('ripple')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        btn.appendChild(ripples)
        setTimeout(()=>{
            ripples.remove()
        },1000)
    })
})

const orderContainerTag = document.querySelector('.order-summary')

let cartSummaryHtml = ''
cart.forEach((cartItem)=>{
    const {productId,quantity}=cartItem
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
    cartSummaryHtml+=`
    <div class="col  item-container d-flex justify-content-between align-items-center container-${id}">
    <div class="image-contain">
      <img class="img-fluid" src="..${image}" alt="">
    </div>
    <div class="text-contianer text-black">
      <div>
        ${title} 
      </div>
      <div>
        <img class="img-fluid w-25" src="../pics/rating/rating-${rating}.png" alt="">
      </div>
      <div>
        $${cost}
      </div>
    </div>
    <div class="d-flex flex-column text-contianer text-black">
      <div>
        Quantity
      </div>
      <div>
        <span class="">
          <span class=""><i class="bi bi-dash minus" data-value="${productId}" style="cursor:pointer"></i></span>
          <span class="quantity quan-${productId}" style="color: #7C9D96;">${quantity}</span>
          <span class=""><i class="bi bi-plus-lg plus" data-value="${productId}" style="cursor:pointer"></i></span>
        </span>
      </div>
      <div class="align-self-end">
        <i class="fa-regular fa-trash-can remove-btn" id='${productId}' style="cursor:pointer;"></i>                      </div>
    </div>
  </div>
    `
})
orderContainerTag.innerHTML=cartSummaryHtml

const quantityShowTag = document.querySelector('.quantity-show')
showTotalQuantity()
function showTotalQuantity() {
    const icon = document.querySelector('.img-small') 
    let imgLink
    let cartQuantity = totalQuantity()
    let cartQuantityText
    if (cartQuantity===0) {
        cartQuantityText="No item"
        imgLink = "https://cdn-icons-png.flaticon.com/512/5058/5058276.png"
      }else if(cartQuantity===1){
        cartQuantityText= "1 item"
        imgLink = "https://cdn-icons-png.flaticon.com/512/743/743131.png"
      }else{
        cartQuantityText = `${cartQuantity} items`
        imgLink = "https://cdn-icons-png.flaticon.com/512/743/743131.png"
      }
      icon.src=imgLink
    quantityShowTag.innerHTML = cartQuantityText
}

const removeBtnTags =document.querySelectorAll('.remove-btn')
removeBtnTags.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const product = document.querySelector(`.container-${btn.id}`)
        product.remove()
        removeFromCart(btn.id)
        showTotalQuantity()
        costCheck()
    })
})
costCheck()
function costCheck() {
  const totalCost = document.querySelector('.total-price')
  const itemCount = document.querySelector('.item-count')
  const shipAndHandling = document.querySelector('.shipping-handling')
  const totalBeTax = document.querySelector('.total-before-tax')
  const perCentTag = document.querySelector('.ten-percent-tax')
  const orderTotalTag = document.querySelector('.order-total')

  let totalItem = totalQuantity()
  let totalItemPrice = totalCount()
  let shipAndHand = totalItemPrice*0.01
  let totalBeforeTax = totalItemPrice + shipAndHand
  let tenPercent = totalBeforeTax * 0.10
  let orderTotal = totalBeforeTax + tenPercent

  if (cart.length===0) {
  itemCount.innerHTML= 0
  totalCost.innerHTML= `$ 0.00`
  shipAndHandling.innerHTML =`$ 0.00`
  totalBeTax.innerHTML= `$ 0.00`
  perCentTag.innerHTML= `$ 0.00`
  orderTotalTag.innerHTML= `$ 0.00`
  return
  }

  itemCount.innerHTML=totalItem
  totalCost.innerHTML= `$ ${(totalItemPrice/100).toFixed(2)}`
  shipAndHandling.innerHTML =`$ ${(shipAndHand/100).toFixed(2)}`
  totalBeTax.innerHTML= `$ ${(totalBeforeTax/100).toFixed(2)}`
  perCentTag.innerHTML= `$ ${(tenPercent/100).toFixed(2)}`
  orderTotalTag.innerHTML= `$ ${(orderTotal/100).toFixed(2)}`

}

const minusTags = document.querySelectorAll('.minus')
const plusTags = document.querySelectorAll('.plus')

minusTags.forEach(tag=>{
  tag.addEventListener('click',()=>{
    const quantity = document.querySelector(`.quan-${tag.dataset.value}`)
    quantity.innerHTML=minusQuantity(tag.dataset.value)
    costCheck()
    showTotalQuantity()
  })
})

plusTags.forEach(tag=>{
  tag.addEventListener('click',()=>{
    const quantity = document.querySelector(`.quan-${tag.dataset.value}`)
    quantity.innerHTML=plusQuantity(tag.dataset.value)
    costCheck()
    showTotalQuantity()
  })
})