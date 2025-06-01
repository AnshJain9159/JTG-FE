const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Swiper slider for recommendations
const swiper = new Swiper('.recommendations-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.recommendations-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    }
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});