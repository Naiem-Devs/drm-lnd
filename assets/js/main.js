(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(document).on("scroll", function(){

    if ($(document).scrollTop() > 50){
      $(".header-area").addClass("shrink");
    } else {
      $(".header-area").removeClass("shrink");
    }
    
    });
    
    
    $(".Wishlist-btn").click(function(e){
        e.preventDefault()
        $(".Wishlist__side").toggleClass("show");
        $("body").toggleClass("overflow-overly");
    });
    
    $(".mina-btn").click(function(e){
        e.preventDefault()
        $(".mina__dropdown").toggleClass("show");
    });
    
    $(".cart-btn").click(function(e){
        e.preventDefault()
        $(".Varukorg__side").toggleClass("show");
        $("body").toggleClass("overflow-overly");
    });
    
    
    
        // var swiper = new Swiper(".brandSwiper", {
        //   slidesPerView: 6,
        //   spaceBetween: 30,
        //   centeredSlides: true,
        //   freeMode: true,
        //   loop: true,
        //   autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false
        //   }
        // });
    
    new Swiper (".brandSwiper", {
      autoplay: {
        enabled: true,
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
      },
      centeredSlides: true,
      loop: true,
      navigation: false,
      noSwipingClass: 'swiper-slide',
      slidesPerView: '6',
      spaceBetween: 15,
      speed: 4000,
        breakpoints: {
            320: {
              slidesPerView: 3,
            },
            420: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
          },
    });
    
        var swiper = new Swiper(".productSwiper", {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            340: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1220: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 6,
            },
            1650: {
              slidesPerView: 7,
            },
            1850: {
              slidesPerView: 8,
            },
          },
        });
    
        var swiper = new Swiper(".WishlistSwiper", {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
    
        var swiper = new Swiper(".shopSwiper", {
          
          spaceBetween: 40,
          slidesPerGroupSkip: 4,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          },
        });
    
        var swiper = new Swiper(".videoSwiper", {
          
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            340: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1220: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
            1850: {
              slidesPerView: 5,
            },
          },
        });
    
    
        var swiper = new Swiper(".videoModalSwiper", {
          slidesPerView: 3,
          spaceBetween: 100,
          freeMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
    
    
        // video PLayer
    const playbutton = document.querySelector('.playbutton')
    let video = document.querySelector('.video-wrapper video')
    let started = false
    
    
    
    playbutton.addEventListener('click', () => {
    
      if(video.paused) {
        video.play()
        playbutton.classList.add('playing')
      } else {
        video.pause()
        playbutton.classList.remove('playing')
      }
    })
    
    //only used if the controls attribute is taken off the video element
    // video.addEventListener('click', () => {
      // if(video.paused) {
      // video.play() 
      // } else {
      // video.pause()
      // }
    // })
    
    
    video.addEventListener('ended', () => {
      playbutton.classList.remove('playing')  
    })
    
    
    video.addEventListener('play', () => {
      playbutton.classList.add('playing')  
    })
    
    
    video.addEventListener('pause', () => {
      playbutton.classList.remove('playing')  
    })
 
})(jQuery);
