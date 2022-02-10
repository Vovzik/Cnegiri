$(function () {

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };


  let body = document.querySelector("body");

  if(isMobile.any()){
    body.classList.add("touch");
    var menu_link = document.querySelector(".menu_link"),
    menu_list_sub = document.querySelector(".menu_list-sub");


    menu_link.addEventListener("click", function () {
      menu_list_sub.classList.toggle("open")
    });

  }

  else {
    body.classList.add("mouse");
  };



  var headerBurger = document.querySelector(".menu_header-burger"),
  options_burger = document.querySelector(".options_burger"),
  colorButton = document.querySelector(".menu_header-burger"),
  colorOptionse = document.querySelector(".menuButton"),
  colorOptionse_1 = document.querySelector(".menuButton-1"),
  colorOptionse_2 = document.querySelector(".menuButton-2");


  colorButton.addEventListener("click", function(){
    colorOptionse_2.classList.toggle("Buttonactive-2")
  });


  colorButton.addEventListener("click", function(){
    colorOptionse_1.classList.toggle("Buttonactive-1")
  });


  colorButton.addEventListener("click", function(){
    colorOptionse.classList.toggle("Buttonactive")
  });

  
  headerBurger.addEventListener("click", function(){
    options_burger.classList.toggle("active_burder")
  });


  var menuCatalog = document.querySelector(".menu_catalog"),
  menu_catalog_optionse =document.querySelector(".menu_catalog-optionse");

  menuCatalog.addEventListener("click", function (){
    menu_catalog_optionse.classList.toggle("menu_catalog-active")
  });



  var headerShearh = document.querySelector(".header_shearh-selected"),
  headeroptioneShearh = document.querySelector(".header_chearh-1");

  headerShearh.addEventListener("click", function(){
    headeroptioneShearh.classList.toggle("header_chearh-1-active")
  });



  var contentPhone = document.querySelector(".content_phone"),
  contentOptionsePhone = document.querySelector(".content_phone_1");

  contentPhone.addEventListener("click", function(){
    contentOptionsePhone.classList.toggle("content_phone_1-active")
  });


  const checkbox__label = document.querySelectorAll('.checkbox__label');

  for (let i = 0; i < checkbox__label.length; i++) {
    checkbox__label[i].addEventListener('click', label);

    function label() {
      checkbox__label[i].classList.toggle('color');
    };
  };



  var podarokTitle = document.querySelector(".podarok_title"),
  content_podarok1 = document.querySelector(".content_podarok-1"),
  podarok_svg = document.querySelector(".podarok_svg");

  podarokTitle.addEventListener("click", function(){
    podarok_svg.classList.toggle("podarok_svg-active")
  });

  podarokTitle.addEventListener("click", function(){
    content_podarok1.classList.toggle("content_podarok-1-active")
  });


  const titleChek = document.querySelectorAll(".title_check");
  const checkBoxflex = document.querySelectorAll(".checkbox_flex");
  const iconAngledown = document.querySelectorAll(".icon-angle-down");

  for (let i = 0; i < titleChek.length; i++) {
    titleChek[i].addEventListener('click', filter);

    function filter() {
      checkBoxflex[i].classList.toggle('checkbox_flex-active');
      iconAngledown[i].classList.toggle('icon-angle-down-active');
    };
  };


  $('.slider').slick({
    arrows:true,
    dots:true,
    slidesToShow:3,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    speed:1000,
    autoplaySpeed:800,
    responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow:1
      }
    }
    ]
  });

});


function readMore() {
  var dots = document.getElementById("about_dots");  
  var more = document.getElementById("about_more");
  var btn = document.getElementById("about_btn");


  if(dots.style.display === "none") {
    dots.style.display="inline";
    btn.innerHTML="Показать все";
    more.style.display="none";
  }

  else {
    dots.style.display="none";
    btn.innerHTML="Скрыть";
    more.style.display="inline";
  }
};



$(function () {
  $(".produkt_slider-inner").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: true,
   infinite: false,
   nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
   prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
 });

});


$(function () {
  var popup_2_checkbox1 = document.querySelector(".popup_2checkbox__labelactive");
  var popup_2_recvizity = document.querySelector(".popup_2-recvizity");


  popup_2_checkbox1.addEventListener("click", function () {
    popup_2_recvizity.classList.toggle("open");
  });

}); 



function readProdukt() {
  var dots1 = document.getElementById("about_dots");  
  var more1 = document.getElementById("about_more");
  var btn1 = document.getElementById("about_btn-produkt");


  if(dots1.style.display === "none") {
    dots1.style.display="inline";
    btn1.innerHTML="Показать все";
    more1.style.display="none";
  }

  else {
    dots1.style.display="none";
    btn1.innerHTML="Скрыть";
    more1.style.display="inline";
  }
};



$(function () {
  var about_btn = document.querySelector(".about_click"),
  about_span = document.querySelector(".about_span-2");

  about_btn.addEventListener("click", function(){
    about_span.classList.toggle("about_active");
  });
});



const acardion_selected = document.querySelectorAll(".selected_acardion");
const acardion_optionse = document.querySelectorAll(".optionse_acardion");
const acardion_img = document.querySelectorAll(".acardion_img");

for (let i = 0; i < acardion_selected.length; i++) {
  const click = acardion_selected[i];
  click.addEventListener('click',  acardionClick);

  function acardionClick() {
    acardion_optionse[i].classList.toggle('acardion_active');

    acardion_img[i].classList.toggle('acardion_active-1');

    click.classList.toggle('colored');
  };
};





$(function () {

  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active1").eq($(this).index()).addClass("active1");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active1");

  var catolog_2_2select = document.querySelector(".catolog_2_2-select"),
  catolog_2_2optionse = document.querySelector(".catolog_2_2-optionse"),
  option = document.querySelectorAll(".option");

  catolog_2_2select.addEventListener("click", function(){
    catolog_2_2optionse.classList.toggle("catolog_2_2-optionse-active");
  });

  option.forEach((o) => {
    o.addEventListener("click", function(){
      catolog_2_2select.innerHTML = o.querySelector("label").innerHTML;
      catolog_2_2optionse.classList.toggle("active4");
    });
  });
});



$(function () {

  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

});



const footerTitle = document.querySelectorAll(".footer_title");
const footerTitlemedia =  document.querySelectorAll(".footer_title-media");
const footer_downactive = document.querySelectorAll(".icon-angle-down3");



for (let i = 0; i < footerTitle.length; i++) {
  footerTitle[i].addEventListener('click',  footer);

  function footer() {
    footerTitlemedia[i].classList.toggle('footer_media-active');
    footer_downactive[i].classList.toggle('footer_down-active');
  };
};





