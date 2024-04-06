$(document).ready(function(){
const links = document.querySelectorAll('.promo_link');

links[0].classList.add('-active');

links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    links.forEach(l => l.classList.remove('-active'));
    this.classList.add('-active');
  });
});

const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'), 
  closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});  

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


const fixedElement = document.querySelector('.sidepanel');
const textInsideElement = document.querySelector('.sidepanel .text');

// Определяем границу, после которой хотим изменить цвет
const scrollThreshold = 400;

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
    // Получаем текущую позицию скролла
    const scrollPosition = window.scrollY || window.scrollY;

    // Проверяем, достиг ли скролл заданной границы
    if (scrollPosition > scrollThreshold) {
        // Если да, применяем новый цвет текста
        textInsideElement.style.color = '#000';
    } else {
        // Если нет, возвращаем исходный цвет текста
        textInsideElement.style.color = '#ffa501';
    }
});

window.addEventListener('scroll', function() {
  const divider = document.querySelector('.sidepanel_divider');
  const scrollPosition = window.scrollY || window.scrollY;

  if (scrollPosition > 490) { // Пример: изменение цвета линии после прокрутки страницы на 100px
    divider.classList.add('dark-mode');
  } else {
    divider.classList.remove('dark-mode');
  }
});


// window.addEventListener('scroll', function() {
//   var icon = document.querySelector('.icon'); // Получаем элемент SVG
//   var scrollPosition = window.scrollY || window.scrollY; // Получаем текущую позицию прокрутки

//   if (scrollPosition > 490) { // Пример: изменение цвета иконки после прокрутки страницы на 450px
//     icon.style.fill = '#000'; // Устанавливаем желаемый цвет (например, красный)
//   } else {
//     icon.style.fill = '#ffa501'; // Возвращаем исходный цвет (например, черный)
//   }
// });

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.scrollY;

  var icons = document.querySelectorAll('.sidepanel_link .icon');

  icons.forEach(function(icon) {
    if (scrollPosition > 570) {
      icon.classList.add('dark-mode');
    } else {
      icon.classList.remove('dark-mode');
    }
  });
});



$('form').submit(function(e) {
  e.preventDefault();

  const form = $(this);

  $.ajax({
      type: "POST",
      url: "js/mailer/smart.php",
      data: form.serialize()
  }).done(function() {

      form.find("input, textarea").val("");


      alert("Thank you! I'll be in contact with you as soon as possible!");

     
     
  });
  
  return false; 
});

});