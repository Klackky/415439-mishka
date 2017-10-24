var toggle = document.querySelector(".main-nav__button");
var dropdown = document.querySelector(".main-nav__dropdown");
var menu = document.querySelector(".main-nav__user-menu");

dropdown.classList.add("main-nav--hidden");
menu.classList.add("main-nav--hidden");

toggle.addEventListener("click", function() {
  if (dropdown.classList.contains("main-nav--hidden")) {
    dropdown.classList.remove("main-nav--hidden");
    dropdown.classList.add("main-nav__show");
  } else {
    dropdown.classList.add("main-nav--hidden");
    dropdown.classList.remove("main-nav__show");
  }
  if (menu.classList.contains("main-nav--hidden")) {
    menu.classList.remove("main-nav--hidden");
    menu.classList.add("main-nav__show");
  } else {
    menu.classList.add("main-nav--hidden");
    menu.classList.remove("main-nav__show");
  }
  if (toggle.classList.contains("main-nav__button")) {
    toggle.classList.remove("main-nav__button");
    toggle.classList.add("main-nav__button--close");
  } else {
    toggle.classList.add("main-nav__button");
    toggle.classList.remove("main-nav__button--close");
  }
});

function initMap() {
  var uluru = {
    lat: 59.938794,
    lng: 30.323083
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'img/icon-map-pin.svg',
  });
}

var link = document.querySelector(".button--order-promo");
var popup = document.querySelector(".popup__wrapper");
var overlay = document.querySelector(".overlay");

if(link){
  link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay--show");
  popup.classList.add("popup__wrapper--show");

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup__wrapper--show")) {
        popup.classList.remove("popup__wrapper--show");
        overlay.classList.remove("overlay--show");
        }
      }
    });
  });
}

var order_list = document.querySelectorAll(".item__icon-cart");
var modal = document.querySelector(".popup__wrapper");
var cover = document.querySelector(".overlay");

for (i = 0; i < order_list.length; i++) {
  order_list[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("popup__wrapper--show");
    cover.classList.add("overlay--show");

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (modal.classList.contains("popup__wrapper--show")) {
          modal.classList.remove("popup__wrapper--show");
          cover.classList.remove("overlay--show");
        }
      }
    });
  });
}
