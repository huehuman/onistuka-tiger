$(document).ready(function () {
  
  $("a").click(function (e) { 
    e.preventDefault();
  });

  AOS.init();
  //AOS 불러오기 하려면 ready 안에 있어야한다.








  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보임 
        $(".top").fadeIn(200);
      } else {
        $(".top").fadeOut(200);
      }
    }); // 버튼 클릭시 
    $(".top").click(function() { 
      $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동 
      }, 400);  
      return false; 
    }); 
  });







  $(".header .m-menu-wrap > input").hide()
  
  $(".header .m-menu-wrap > a").click(function (e) { 
    e.preventDefault();
    $(".header .m-menu-wrap > input").show()
  });
  $(".header .m-menu-wrap .x-wrap").click(function (e) { 
    $(".header .m-menu-wrap > input").hide()
    
  });


  const $menu = $(".header .nav > ul > li")
  const $sub = $(".header .submenu .submenu-wrap > ul")

  $($sub).hide();
  
  $($menu).mouseover(function (e) { 
    e.preventDefault();

    let index = $(this).index()
    $($sub).hide().eq(index).slideDown(300)
    
  })
  $($sub).hover(
    function(){

  },
  function(){
    $(this).slideUp(300)
  }
  )

    





  // 메인비주얼 스와이퍼
  var swiper1 = new Swiper(".main-banner", {
    pagination: {
      el: ".main-pgb",
      type: "progressbar",
    },
    autoplay:{
      delay:3000
    },
    loop: true
    
  });







  $(".new-arrival .content-wrap .btn .btn-wrap li").eq(0).addClass("on")
  $(".new-arrival .content-wrap .btn .btn-wrap li a").eq(0).addClass("on")


  $(".new-arrival .content-wrap .btn .btn-wrap li").click(function (e) {
    e.preventDefault();
    let i = $(this).index()
    $(".new-arrival .content-wrap .btn .btn-wrap li a").removeClass("on").eq(i).addClass("on")
    $(".new-arrival .content-wrap .btn .btn-wrap li").removeClass("on").eq(i).addClass("on")
  });


  $(".best .content-wrap .btn .btn-wrap li").eq(0).addClass("on")
  $(".best .content-wrap .btn .btn-wrap li a").eq(0).addClass("on")


  $(".best .content-wrap .btn .btn-wrap li").click(function (e) {
    e.preventDefault();
    let i = $(this).index()
    $(".best .content-wrap .btn .btn-wrap li a").removeClass("on").eq(i).addClass("on")
    $(".best .content-wrap .btn .btn-wrap li").removeClass("on").eq(i).addClass("on")
  });



  // 뉴 어라이벌 /베스트 스와이퍼
  var swiper2 = new Swiper(".banner", {
    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints:{
      480: {slidesPerView: 2},
      1024: {slidesPerView: 3},
      1400: {slidesPerView: 4},
    },
    mousewheel: true,
    keyboard: true,
  });
  


  // $(".hot-keyword .keyword").mouseover(function () { 
  //   $(this).css("animation","stop")
  // });
  // $(".hot-keyword .keyword").mouseout(function () { 
  //   $(this).css("animation","")
  // });



  // 멕시코66 스와이퍼
  var swiper3 = new Swiper(".mexico66-banner", {
    cssMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    breakpoints:{
      480: {slidesPerView: 3},
      1024: {slidesPerView: 3},
      1400: {slidesPerView: 4},
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination ",
      clickable: true
    },
    
    mousewheel: true,
    keyboard: true,
  });









  $(window).resize(function(){
    let $width = $(window).width();
    if($width < 1200){
      $(".icon_input").attr("placeholder", "     검색");
    }else{
      $(".icon_input").attr("placeholder", "");
    }
  })

  if($(window).width() < 1200){
    $(".icon_input").attr("placeholder", "     검색");
  }else{
    $(".icon_input").attr("placeholder", "");
  }






  $(".header .m-menu").hide()

  $(".header .icon .m-btn").click(function (e) { 
    e.preventDefault();
    $(".header .m-menu").slideDown(function(){
      $("body,html").css("overflow","hidden")
    })
  });
  $(".header .m-menu-wrap .x-wrap img").click(function (e) { 
    e.preventDefault();
    $(".header .m-menu").slideUp()
    $("body,html").css("overflow","")
  });
  
  $(".header .m-menu .m-menu-wrap2 > ul > li").click(function (e) { 
    e.preventDefault();
    $(this).next().slideToggle().siblings("ul").slideUp()

  });
  


  var swiper4 = new Swiper(".insta-banner", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".instar-next",
      prevEl: ".instar-prev",
    },
    breakpoints:{
      480: {slidesPerView: 2},
      641: {slidesPerView: 3},
      1024: {slidesPerView: 4},
      1400: {slidesPerView: 5},
    }
  });
});/* ready */