$(document).ready(function ($) {



  var shrinkHeader = 1;
  $(window).scroll(function shrinked() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".header").addClass("shrink");
    } else {
      $(".header").removeClass("shrink");
    }
  });
  $(window).ready(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".header").addClass("shrink");
    } else {
      $(".header").removeClass("shrink");
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }


  "use strict";

  function setSwitchValue(elem) {
    var value = parseInt(elem.getAttribute("value"));
    if (value === 0) {
      elem.setAttribute("value", 1);
    } else {
      elem.setAttribute("value", 0);
    }
  }

  var TiSwitchProto = Object.create(HTMLElement.prototype);
  // var TiSwitch = document.registerElement("ti-switch", {
  //   prototype: TiSwitchProto,
  //   extends: "input"
  // });
  var tiSwitch = document.querySelectorAll("ti-switch");

  Array.prototype.forEach.call(tiSwitch, function (tSw, i) {
    tSw.addEventListener("click", function (event) {
      setSwitchValue(this);
    });

    tSw.addEventListener("keydown", function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        setSwitchValue(this);
      }
    });
  });

  $('a[href^="#"]').click(function () {
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top - 70
    });
    return false;
    e.preventDefault();
  });



  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".click-capture").toggleClass("click-capture-is-active");
    $("nav")
      .toggleClass("nav-is-active")
      .css("transition", "all .3s ease-in-out");
  });

  $(".click-capture").click(function () {
    // $(".click-capture").toggleClass("click-capture-is-active");
    $(".hamburger").click();
  });
  $(window).on("resize", function () {
    $("nav").css("transition", "none");
  });

 

  function calcVH() {
    // $(".section-index").css("min-height", $(this).innerHeight());
  }
  (function ($) {
    calcVH();
    $(window).on('orientationchange', function () {
      calcVH();
    });
    $(window).on('resize', function () {
      calcVH();
        var winwidth = $(window).outerWidth();
        if (winwidth < 768 - scrollbarWidth()) {
          $('nav ul li a').click(function () {
            $(".hamburger").click();
          });
        }
    });
  })(jQuery);



  // $(document).keydown(function (event) {
  //   if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
  //     event.preventDefault();
  //   }
  // });

  // $(window).bind('mousewheel DOMMouseScroll', function (event) {
  //   if (event.ctrlKey == true) {
  //     event.preventDefault();
  //   }
  // });

  $(".js-modal-btn").modalVideo();
  $('.interests--top').click(function(){
$('.interests--top').toggleClass('arrow-rotate');
$('.interests--bottom').toggleClass('bottom-slide');

  });

function scrollbarWidth() {
  var block = $('<div>').css({
      'height': '50px',
      'width': '50px'
    }),
    indicator = $('<div>').css({
      'height': '200px'
    });

  $('body').append(block.append(indicator));
  var w1 = $('div', block).innerWidth();
  block.css('overflow-y', 'scroll');
  var w2 = $('div', block).innerWidth();
  $(block).remove();
  return (w1 - w2);
}


  var winwidth = $(window).outerWidth();
  if (winwidth < 768 - scrollbarWidth()) {
     $('nav ul li a').click(function () {
       $(".hamburger").click();
     });
  } 
  
  
  $('#i1').click(function () {
    $('.modal1').toggleClass('df');
  });



});