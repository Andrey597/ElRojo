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

        console.log(productInfo);
    }
})