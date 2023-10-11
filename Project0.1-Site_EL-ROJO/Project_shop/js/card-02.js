const cartWrapper = document.querySelector('.cart__list');
const cartWrapperer = document.querySelector('.block__Elleven')
//Отслеживаем клик на странице

window.addEventListener('click', function(event){

    if(event.target.hasAttribute('data-cart')){
        //Находим карточку с товаром, внутри которой был совершен клик
       const card = event.target.closest('.block__EllevenETC');
        //Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imagSrc: card.querySelector('.product_img').getAttribute('src'),
            title: card.querySelector('.itemTitle').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            price: card.querySelector('.price_currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        //Проверяем есть ли такой товар в корзине
        const itemInCart = cartWrapperer.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart)

        if(itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]')
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        }
        //Если товар есть в корзине
  
            //Если товара нет в корзине

        //Собранные данные подставим в шаблон товара в корзине
        const cartItemHTML =`<div class="cart__lOne">
        <img src="${productInfo.imagSrc}" alt="">
        <div class="cart__lText">
            <div class="cart__ltTop">
                <a href="#">${productInfo.title}</a>
                <p>box of boorles</p>
            </div>
            <div class="items counter_wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter>${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
            <div class="cart__ltBottom">
                ${productInfo.price}
            </div>
        </div>
    </div>`;
    
    //Отобразим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        
    }
})