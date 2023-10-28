// Header Burger
// Получаем элемент с классом "header__burger"
document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.header__burger');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');
  if (burger) {
    burger.addEventListener('click', function () {
      // Простое добавление или удаление класса 'active' с использованием метода toggle
      burger.classList.toggle('active');
      navigation.classList.toggle('active');
      main.classList.toggle('lock');
    });
  }
});
//


// Scroll to About on Home
document.addEventListener("DOMContentLoaded", function () {
  // Найти элемент с id "about"
  const aboutSection = document.getElementById("about");

  // Проверить, существует ли элемент с id "about"
  if (aboutSection) {
    // Обработка клика по ссылке
    const link = document.querySelector(".screen__scrols");
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Отменить стандартное действие ссылки

      // Прокрутить страницу к элементу "about" с использованием smooth scrolling
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
//


// Open Lang Switch
document.addEventListener("DOMContentLoaded", function () {
  const headerLangSwitch = document.querySelector('.header__lang--switch');
  const headerLangList = document.querySelector('.header__lang--list');

  headerLangSwitch.addEventListener('click', openLang);

  function openLang(event) {
    event.stopPropagation(); // Остановка события, чтобы оно не дойдло до document
    const clickedElement = event.currentTarget;

    // Переключение класса "active" для headerLangSwitch
    clickedElement.classList.toggle("active");

    // Переключение класса "active" для headerLangList
    headerLangList.classList.toggle("active");
  }

  // Добавление обработчика события click на документ
  document.addEventListener('click', function (event) {
    // Проверка, был ли клик сделан вне headerLangSwitch и headerLangList
    if (!headerLangSwitch.contains(event.target) && !headerLangList.contains(event.target)) {
      // Удаление класса "active" у обоих элементов
      headerLangSwitch.classList.remove("active");
      headerLangList.classList.remove("active");
    }
  });
});
//

// Open filter
document.addEventListener("DOMContentLoaded", function () {
  const headerLangSwitch = document.querySelector('.filter span');
  const headerLangList = document.querySelector('.filter__list');

  headerLangSwitch.addEventListener('click', openLang);

  function openLang(event) {
    event.stopPropagation(); // Остановка события, чтобы оно не дойдло до document
    const clickedElement = event.currentTarget;

    // Переключение класса "active" для headerLangSwitch
    clickedElement.classList.toggle("active");

    // Переключение класса "active" для headerLangList
    headerLangList.classList.toggle("active");
  }

  // Добавление обработчика события click на документ
  document.addEventListener('click', function (event) {
    // Проверка, был ли клик сделан вне headerLangSwitch и headerLangList
    if (!headerLangSwitch.contains(event.target) && !headerLangList.contains(event.target)) {
      // Удаление класса "active" у обоих элементов
      headerLangSwitch.classList.remove("active");
      headerLangList.classList.remove("active");
    }
  });
});
//


// animation partners
document.addEventListener("DOMContentLoaded", function () {
  // Находим список с классом '.partners__list'
  const partnersList = document.querySelector('.partners__list');

  // Находим элемент с классом '.partners__wrap'
  const originalWrap = document.querySelector('.partners__wrap');

  // Если оба элемента существуют
  if (partnersList && originalWrap) {
    // Создаем глубокую копию списка
    const clonedList = partnersList.cloneNode(true);

    // Вставляем копию списка в элемент с классом '.partners__wrap'
    originalWrap.appendChild(clonedList);
  }
});
// Ожидаем загрузку DOM


// Slider
$(document).ready(function () {
  if ($('.galery__list').length) {
    $('#galery__list').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="none"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="none"/></svg></button>',
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,

      responsive: [
        {
          breakpoint: 560,
          settings: {
            arrows: false,
            variableWidth: false,
            centerMode: false,
          }
        }
      ]
    });
  }
});
// slider


// lottie animation icon
$(function () {
  var services_block = document.getElementById("services_list");
  var services_icons_init = 0;
  function initServicesIcons() {
    if (services_icons_init == 0) {

      var scissors_bx = document.getElementById("scissors_bx");
      if (scissors_bx != null) {
        var animation_scissors = bodymovin.loadAnimation({
          container: scissors_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/scissors.json"
        });
        scissors_bx.addEventListener("mouseenter", function () {
          animation_scissors.play();
        });
        scissors_bx.addEventListener("mouseleave", function () {
          animation_scissors.stop();
        });
      }

      var hairclipper_bx = document.getElementById("hairclipper_bx");
      if (hairclipper_bx != null) {
        var animation_hairclipper = bodymovin.loadAnimation({
          container: hairclipper_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/hairclipper.json"
        });
        hairclipper_bx.addEventListener("mouseenter", function () {
          animation_hairclipper.play();
        });
        hairclipper_bx.addEventListener("mouseleave", function () {
          animation_hairclipper.stop();
        });
      }

      var beard_bx = document.getElementById("beard_bx");
      if (beard_bx != null) {
        var animation_beard = bodymovin.loadAnimation({
          container: beard_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/beard.json"
        });
        beard_bx.addEventListener("mouseenter", function () {
          animation_beard.play();
        });
        beard_bx.addEventListener("mouseleave", function () {
          animation_beard.stop();
        });
      }

      var camouflage_bx = document.getElementById("camouflage_bx");
      if (camouflage_bx != null) {
        var animation_camouflage = bodymovin.loadAnimation({
          container: camouflage_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/camouflage.json"
        });
        camouflage_bx.addEventListener("mouseenter", function () {
          animation_camouflage.play();
        });
        camouflage_bx.addEventListener("mouseleave", function () {
          animation_camouflage.stop();
        });
      }

      var camouflagehair_bx = document.getElementById("camouflagehair_bx");
      if (camouflagehair_bx != null) {
        var animation_camouflagehair = bodymovin.loadAnimation({
          container: camouflagehair_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/camouflagehair.json"
        });
        camouflagehair_bx.addEventListener("mouseenter", function () {
          animation_camouflagehair.play();
        });
        camouflagehair_bx.addEventListener("mouseleave", function () {
          animation_camouflagehair.stop();
        });
      }

      var combo_bx = document.getElementById("combo_bx");
      if (combo_bx != null) {
        var animation_combo = bodymovin.loadAnimation({
          container: combo_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/combo.json"
        });
        combo_bx.addEventListener("mouseenter", function () {
          animation_combo.play();
        });
        combo_bx.addEventListener("mouseleave", function () {
          animation_combo.stop();
        });
      }

      var fatherson_bx = document.getElementById("fatherson_bx");
      if (fatherson_bx != null) {
        var animation_fatherson = bodymovin.loadAnimation({
          container: fatherson_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/fatherson.json"
        });
        fatherson_bx.addEventListener("mouseenter", function () {
          animation_fatherson.play();
        });
        fatherson_bx.addEventListener("mouseleave", function () {
          animation_fatherson.stop();
        });
      }

      var longhair_bx = document.getElementById("longhair_bx");
      if (longhair_bx != null) {
        var animation_longhair = bodymovin.loadAnimation({
          container: longhair_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/longhair.json"
        });
        longhair_bx.addEventListener("mouseenter", function () {
          animation_longhair.play();
        });
        longhair_bx.addEventListener("mouseleave", function () {
          animation_longhair.stop();
        });
      }

      var mustachehaircut_bx = document.getElementById("mustachehaircut_bx");
      if (mustachehaircut_bx != null) {
        var animation_mustachehaircut = bodymovin.loadAnimation({
          container: mustachehaircut_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/mustachehaircut.json"
        });
        mustachehaircut_bx.addEventListener("mouseenter", function () {
          animation_mustachehaircut.play();
        });
        mustachehaircut_bx.addEventListener("mouseleave", function () {
          animation_mustachehaircut.stop();
        });
      }

      var razor_bx = document.getElementById("razor_bx");
      if (razor_bx != null) {
        var animation_razor = bodymovin.loadAnimation({
          container: razor_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/razor.json"
        });
        razor_bx.addEventListener("mouseenter", function () {
          animation_razor.play();
        });
        razor_bx.addEventListener("mouseleave", function () {
          animation_razor.stop();
        });
      }

      var schildren_bx = document.getElementById("schildren_bx");
      if (schildren_bx != null) {
        var animation_schildren = bodymovin.loadAnimation({
          container: schildren_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/schildren.json"
        });
        schildren_bx.addEventListener("mouseenter", function () {
          animation_schildren.play();
        });
        schildren_bx.addEventListener("mouseleave", function () {
          animation_schildren.stop();
        });
      }

      var wax_hair_removal_bx = document.getElementById("wax_hair_removal_bx");
      if (wax_hair_removal_bx != null) {
        var animation_wax_hair_removal = bodymovin.loadAnimation({
          container: wax_hair_removal_bx.getElementsByClassName("json__icon")[0],
          renderer: "svg",
          loop: true,
          autoplay: false,
          prerender: true,
          path: "assets/json/wax_hair_removal.json"
        });
        wax_hair_removal_bx.addEventListener("mouseenter", function () {
          animation_wax_hair_removal.play();
        });
        wax_hair_removal_bx.addEventListener("mouseleave", function () {
          animation_wax_hair_removal.stop();
        });
      }

      services_icons_init = 1;
    }
  }
  if (services_block != null) {
    services_observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0)
        initServicesIcons();
    }
      , {
        threshold: [0, 1]
      });
    services_observer.observe(services_block);
  }

});
//