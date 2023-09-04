
tab1.addEventListener('click',()=>{
    prePageTag.classList.add('diabled')
})

pageNum.forEach(ele=>{
    ele.addEventListener('click',()=>{
       const actives = document.querySelectorAll('.active') 
       actives.forEach(ele=>{
        ele.classList.remove('active')
       })
       let num = Number(ele.dataset.value) -1
       indexToChooseArray = num
       createCards(products,cardsContianerTag,indexToChooseArray)
       ele.classList.add('active')

       const cardContainers = document.querySelectorAll('.shop-container')
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
    })
})

createCards(products,cardsContianerTag,indexToChooseArray)

const cardContainers = document.querySelectorAll('.shop-container')
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
const prePageTag = document.querySelector('#pre-page')
prePageTag.addEventListener('click',()=>{
    if (indexToChooseArray===0) {
        prePageTag.classList.add('disabled')
        createCards(products,cardsContianerTag,indexToChooseArray)
        nextPageTag.classList.remove('disabled')
        const cardContainers = document.querySelectorAll('.shop-container')
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
        return
    }
    indexToChooseArray--
    nextPageTag.classList.remove('disabled')
    prePageTag.classList.remove('disabled')
    createCards(products,cardsContianerTag,indexToChooseArray)

    const cardContainers = document.querySelectorAll('.shop-container')
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
})