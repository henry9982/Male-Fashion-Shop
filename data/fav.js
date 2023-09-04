import {products} from '../data/product.js';

export let favItems = JSON.parse(localStorage.getItem('favItemsInfos'))
if(!favItems){
    favItems = [];
  }
  saveToStorage()


  function saveToStorage() {
    localStorage.setItem('favItemsInfos',JSON.stringify(favItems))
  }
  
  export function addToFav(productId,chosenValue) {
  
    let matchingItem;
  
    favItems.forEach((favItem) => {
      if (productId === favItem.productId) {
        matchingItem = favItem;
      }
    });
    saveToStorage()
  
    if (matchingItem) {
      matchingItem.chosen = chosenValue;
    } else {
      favItems.push({
        productId: productId,
        chosen: chosenValue
      });
    }
    saveToStorage()
}

export function removeFromFav(productId) {
  const newCart = []

  favItems.forEach(favItem=>{
    if (favItem.productId !== productId) {
      newCart.push(favItem)
    }
  })
  favItems = newCart

  saveToStorage()
}