// Owl Carousel Scripts
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
});

// MixItUp Scripts
var containerEl = document.querySelector('.portfolio');
var mixer = mixitup(containerEl);
