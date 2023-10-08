
//Изменение количества товара на сайте

//Находи элементы на странице
window.addEventListener('click', function(event){
    //Объявляем переменную для счетчика
    let counter

    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
           //Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter_wrapper');
    // Находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');        
    }


    //Проверяем является ли элемент по которому совершен клик кнопой Плюс
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }

    //Проверяем является ли элемент по которому совершен клик кнопой Минус
    if(event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
    }
}
});
