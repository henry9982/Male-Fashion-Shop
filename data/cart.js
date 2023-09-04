import {products} from '../data/product.js';

export let cart = JSON.parse(localStorage.getItem('carts'))
if(!cart){
    cart = [];
  }

function saveToStorage() {
    localStorage.setItem('carts',JSON.stringify(cart))
  }
export function addToCart(productId,chosenValue) {
  
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += chosenValue;
    } else {
      cart.push({
        productId: productId,
        quantity: chosenValue
      });
    }
    saveToStorage()
}

export function removeFromCart(productId) {
  const newCart = []

  cart.forEach(cartItem=>{
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })
  cart = newCart

  saveToStorage()
}

export function totalCount() {
    let totalPrice = 0
    cart.forEach((cartItem)=>{
      const {productId}=cartItem  
      products.forEach(productsArray=>{
          productsArray.forEach(product=>{
              if (product.id===productId) {
                totalPrice+=product.price * cartItem.quantity
              }
          })
      })
  })
  return totalPrice
}

export function minusQuantity(productId) {
  let newQuantity = 0
  cart.forEach(cartItem=>{
    if (productId===cartItem.productId) {
      if (cartItem.quantity===0) {
        newQuantity = cartItem.quantity
      }else{
        cartItem.quantity--
        newQuantity = cartItem.quantity      }
    }
  })
  saveToStorage()
  return newQuantity
}
export function plusQuantity(productId) {
  let newQuantity = 0
  cart.forEach(cartItem=>{
    if (productId===cartItem.productId) {
      if (cartItem.quantity===99) {
        newQuantity = cartItem.quantity
      }else{
        cartItem.quantity++
        newQuantity = cartItem.quantity
      }
    }
  })
  saveToStorage()
  return newQuantity
}