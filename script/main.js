// header   burger

let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}


// SEARCH


let search = document.querySelector('.header__search')
let searchA = document.querySelector('.search_a')
search.onmouseover  = function (e) {
    search.classList.add('active');
    searchA.classList.add('active');
}
search.onmouseout = function (e) {
        search.classList.remove('active');
        searchA.classList.remove('active');  
}
search.onclick  = function (e) {
    search.classList.add('active');
    searchA.classList.add('active');
}
search.ondblclick = function (e) {
        search.classList.remove('active');
        searchA.classList.remove('active');  
}



// slider

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,  //Стрелким включены
        dots: false,   // точки включены
        adaptiveHeight: true,  //подстраивание точек и стрелок под каждый слайдер
        slidesToShow: 3,  //сколько слайдеров показано за раз 
        slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
        speed: 600, //Скорость пролистывания слайдов
        easing: 'easy',  //Тип анимации при смене слайдов
        infinite: true, //Будет ли слайдер бесконечный
        initialSlide: 0, //Стартовыый слайдер
        autoplay: true,  //Будет ли он автоматически листаться
        autoplaySpeed: 3000, //Скорость автоматического листания
        pauseOnFocus: false, //пауза автопроигрывания при нажатии 
        pauseOnHover: false, //пауза автопроигрывания при наведении 
        pauseOnDotsHover: false, //пауза автопроигрывания при наведении на точки 
        draggable: true, //Можно свайпать на компе
        swipe: true, //Можно свайпать на телефоне
        touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
        touchMove: true, //Нельзя тягать с места на место при false
        waitForAnimate: false, //Включает быстрое перелистывание при быстром нажатии на стрелки и точки
        centerMode: false, //Включает центрирование слайда, можно использовать вместе с opacity
        variableWidth: false, //размеры слайдов не регулируются, авто-адаптивность, можно использовать с centerMode
        fade: false, //Слайды не листаются а заменяются, слайд-шоу
        responsive: [  //Изменение настроек слайдера при таких то брейкпоинтов
            {
                breakpoint: 766,  //брейкпоинт max-width
                settings: {    //Настройки
                    slidesToShow: 2, //Настройка которую поменяли
                }  
            },
            {
                breakpoint: 400,  //брейкпоинт max-width
                settings: {    //Настройки
                    slidesToShow: 1, //Настройка которую поменяли
                }  
            }
        ],
        mobileFirst: false, //Меняет в предудыщем пункте max-width на min-width
        // appendArrows: $('.dotsandarrows'),  //Перемещение стрелок в другой div с классом dotsandarrows
        // appendDots: $('.dotsandarrows'),   //Перемещение точек в другой div с классом dotsandarrows
})})






$(document).ready(function(event) {
    $('.footer__title').click(function(event) {
  
  // БЛОК С ТЕКСТОМ ЗАКРЫВАЕТСЯ ПРИ ОТКРЫТИИ ДРУГОГО БЛОКА
  
      if($('.footer__container').hasClass('openone')) {
        $('.footer__title').not($(this)).removeClass('active');
        $('.footer__link').not($(this).next()).slideUp(300);
      };
  
  // ПРИ НАЖАТИИ НА ЗАГОЛОВОК ОТКРЫВАЕТСЯ ТЕКСТ ПОД НИМ
  
      $(this).toggleClass('active').next().slideToggle(300);
    })
  })