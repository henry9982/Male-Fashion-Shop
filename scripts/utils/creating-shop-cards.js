import {pageItemTag,pageNum,tab1,tab2,tab3,tab4} from '../shop.js';

export function createCards(array,parentContainer,indexToChooseArray,check) {

      if (check==="catego") {
        pageItemTag.forEach(tabs=>{
          tabs.classList.add('disabled')
        })
      }else{
        pageItemTag.forEach(tabs=>{
          tabs.classList.remove('disabled')
        })
      }

      pageNum.forEach(tab=>{
        tab.classList.remove('active')
      })
      pageNum[indexToChooseArray].classList.add('active')
      let cards = ''
      for (let i = 0; i < array[indexToChooseArray].length; i++) {
        const {title,image,price,id,rating,discount} = array[indexToChooseArray][i]
        console.log(discount);
        let priceText
        if (discount === 1) {
          priceText = (price / 100).toFixed(2)
        }else{
          const percentOfPrice =(price/100).toFixed(2) - (((price/100).toFixed(2))*0.20).toFixed(2) 
          priceText=percentOfPrice.toFixed(2)
        }
        const createdCard = `
        <div class="col container-fluid shop-container hidden-up" id="${id}">
        <div class="card h-100 border-0 inner-shop" >
          <div class="shop-image position-relative">
              <img src="..${image}" class="card-img-top img-fluid" alt="...">
              <div class="inner-icon position-absolute d-flex flex-column justify-content-center align-items-center fav-icon-container-${id}">
                  <i style="cursor:pointer;" class="bi bi-heart px-1 m-1 add-to-fav-button" id="${id}" title="Favorite"></i>
                  <video class="fav-animation" width="32" height="32" preload="none" style="background: transparent  url('https://cdn-icons-png.flaticon.com/512/9937/9937590.png') 50% 50% / fit no-repeat;" autoplay="autoplay" loop="true" muted="muted" playsinline="">
                  <source src="https://cdn-icons-mp4.flaticon.com/512/9937/9937590.mp4" type="video/mp4">
              </video>
              </div>
          </div>
          <div class="card-body position-relative">
          <span class="add-to-cart-animation position-absolute" id="animate-${id}">

          </span>
          <div class="position-absolute add-to-cart-button" id="${id}">+Add To Cart</div>
            <h5 class="card-title">${title}</h5>
            <img src="../pics/rating/rating-${rating}.png" class="img-fluid w-25" alt="">
            <p class="card-text">$${priceText}</p>
          </div>
        </div>
      </div>
        `
        cards+=createdCard
    }
    parentContainer.innerHTML = cards
}

export function creatingAddtoCart(cardContainers) {
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
}