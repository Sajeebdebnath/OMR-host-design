$(document).ready(function () {
  $(".hero-slider-wrapper").owlCarousel({
    loop: true,
    nav: true,
    autoPlay: true,
    items: 1,
    dots: false,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  })

  //Testimonial Slider
  $(".testonial-items-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoPlay: true,
    items: 3,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })
})
