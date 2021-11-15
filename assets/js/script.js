       /*======CLASS ADD-REMOOVE JS======*/





$(document).ready(function(){

  $(document).on("click", ".header__manu-item", function(){
    $(".header__manu-item").removeClass("active");
    $(this).addClass("active");
  });

 

            /*=======ANIMATE JS======*/




  $('#header li a').click(function(e) {

    let tt = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(tt).offset().top
    }, 1000);

    e.preventDefault();
  });










  });


   /*=========TYPED JS==========*/




var typed = new Typed(".auto_input", {
    strings: ["Content creator.", "Web Devloper.", "UI/UX designer"],
    typeSpeed: 200,
    backSpeed: 50,
    loop: true

});





  /*=========FILTER JS==========*/




var lightboxDescription = GLightbox({
  selector: 'glightbox'
});

 
function call(id) {

  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    console.log(item);
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn','glightbox');
      setTimeout(clean,500);
    } else {
      const check = items[index].classList.contains(id);
      console.log(check);

      if (check) {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
      } else {
        item.classList.add('d-none');
        item.classList.remove('fadeIn','glightbox');
      }
    }
  })
}

function clean() {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    item.classList.remove('fadeIn');
  })
}

$(document).ready(function(){

  $(document).on("click", ".portfolio__btn button", function(){
    $(".portfolio__btn button").removeClass("active");
    $(this).addClass("active");
  });


  });






    /*=========CLIENT CAROUSEL JS==========*/



$('.client__content').owlCarousel({
    loop:true,
    center: false,
    nav:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
transitionStyle : "fade", 
   smartSpeed: 1000,
    dots:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})




    /*=========TESTIMONIAL CAROUSEL JS==========*/




$('.testimonial__slider').owlCarousel({
    loop:true,
    center: false,
    nav:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
transitionStyle : "fade", 
   smartSpeed: 1000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



    /*=======ANIMATE=======*/



new WOW().init();



/*=============Nav bar code==========*/


$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".header").addClass("fixed-menu");
      } else {
        $('.header').removeClass("fixed-menu");
      }
    });
  }
});



$('#header li a').click(function(e) {

  let tt = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(tt).offset().top
  }, 1000);

  e.preventDefault();
});


$(".toggle-bar").click(function(){

   $(".header__manu-area").slideToggle(1500);


});

/*==================TOP BTN=================*/

$(".top").click(function(){
  $("html, body").animate({
    scrollTop:0
  }, 1000);
});
