import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';


var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }
  });

  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }
  });

  var swiper = new Swiper(".catalogSwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    initialSlide: 0, 
    breakpoints: {
      320: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
        slidesPerGroup: 2,
      },
      900: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      }
    }
  });

  // Smooth Scroll
  const links = document.querySelectorAll(".link");

  for (const link of links) {
      link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      document.querySelector(href).scrollIntoView({
      behavior: "smooth"
      });
      }