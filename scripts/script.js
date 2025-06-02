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
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },
  autoplay: {
    delay: 3000,
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

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Modal logic
const hireMeBtn = document.getElementById('hire-me-btn');
const modal = document.getElementById('contact-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function openModal() {
  modal.classList.add('open');
  modalOverlay.classList.add('open');
  document.body.classList.add('modal-open');
}
function closeModal() {
  modal.classList.remove('open');
  modalOverlay.classList.remove('open');
  document.body.classList.remove('modal-open');
}
if (hireMeBtn) {
  hireMeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
  });
}
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Contact feedback modal logic
const contactForm = document.querySelector('.contact-form form');
const feedbackModal = document.getElementById('contact-feedback-modal');
const feedbackOverlay = document.getElementById('contact-feedback-overlay');
const feedbackMessage = document.getElementById('feedback-message');

function showFeedbackModal(message = 'Message sent successfully!') {
  if (feedbackModal && feedbackOverlay && feedbackMessage) {
    feedbackMessage.textContent = message;
    feedbackModal.classList.add('open');
    feedbackOverlay.classList.add('open');
    setTimeout(() => {
      feedbackModal.classList.remove('open');
      feedbackOverlay.classList.remove('open');
    }, 1800);
  }
}
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showFeedbackModal();
    contactForm.reset();
  });
}

// Scrollspy logic for navbar active state
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

function onScrollSpy() {
  let scrollPos = window.scrollY + 120;
  let currentId = '';
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      currentId = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (currentId && link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScrollSpy);
document.addEventListener('DOMContentLoaded', onScrollSpy);