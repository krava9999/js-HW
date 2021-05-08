'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let textDiv = document.querySelector(".text");
let linksCollection = document.querySelectorAll(".nav-link");

linksCollection.forEach(function(element){
    element.addEventListener("click", function(){
        clickHandler(event);
    })
})
/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    changeText(event.target);
    changeActiveClass(event.target);
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    /*Перебераем элементы у который класс active и удаляем его*/
    linksCollection.forEach(function(element){
        if (element.classList.contains("active")){
            element.classList.remove("active");
        }
    })

    event.classList.add("active");

}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    switch (event.textContent) {
        case "Link 1":
            textDiv.innerText = texts.text1;
            break;
        case "Link 2":
            textDiv.innerText = texts.text2;

            break;
        case "Link 3":
            textDiv.innerText = texts.text3;
        break;
        default:
            break;
    }
}