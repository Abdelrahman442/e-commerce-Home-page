$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
      767: {
        items: 4,
      },
      1100: {
        items: 5,
      },
    },
  });
});
