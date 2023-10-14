$(document).ready(function () {
  var box = $(".home-solution-card .home-solution-card-info ");
  var boxHeight = [];
  $.each(box, function (key, value) {
    boxHeight.push($(this).height());
  });

  $(".home-solution-card .home-solution-card-info ").height(
    Math.max(...boxHeight)
  );
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const follower = $(".follower");

$(document).mousemove(function (e) {
  const x = e.pageX;
  const y = e.pageY;

  follower.css({
    transform: `translate(${x - 10}px, ${y - 10}px)`, // Apply translate for smooth animation
  });
});
