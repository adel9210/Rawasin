jQuery(document).ready(function ($) {
  const swiper = new Swiper('.header__hero__swiper', {
    loop: true, // Enable loop for continuous sliding
    slidesPerView: 1, // Keep 1 slide visible by default
    spaceBetween: 10, // Slight gap between slides to avoid overlap

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px (tablets)
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 991px (desktops)
      991: {
        slidesPerView: 1, // Show 2 slides on larger screens
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 6000, // Delay between slides (in ms)
      disableOnInteraction: false, // Keep autoplay after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable pagination clicking
    },
    navigation: {
      nextEl: '.swiper-controls--next',
      prevEl: '.swiper-controls--prev',
    },
    effect: 'fade', // Use fade effect
    speed: 700, // Transition speed (in ms), adjust to make it smoother
  });

  // REMOVE SPINNER
  // setTimeout(() => {
  $('.loader').fadeOut('slow');
  // wow.init();

  // }, 1000)

  const topButton = document.getElementById('gotToTopButton');
  const headerNav = document.querySelector('.header__mobile-nav');
  topButton?.addEventListener('click', topFunction);

  // window.onscroll = function () { scrollFunction(topButton, headerNav) };

  mobileNavMenuRender();

  if (window.innerWidth > 991) {
    stickyMenu();
  }
});

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    // topButton.style.display = "none";
    // headerNav.style.top = '60px';
  }
}

function stickyMenu() {
  // Get the menu element
  const menu = document.getElementById('menu');

  if (!menu) {
    return;
  }

  // Get the offset position of the menu
  const sticky = menu.offsetTop + 200;

  // Add the sticky class to the menu when you reach its scroll position. Remove "sticky" when you leave the scroll position
  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      menu.classList.add('header__navbar--sticky');
    } else {
      menu.classList.remove('header__navbar--sticky');
    }
  };
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`;

  navExpand.forEach((item) => {
    item
      .querySelector('.nav-expand-content')
      .insertAdjacentHTML('afterbegin', backLink);
    item
      .querySelector('.nav-link')
      .addEventListener('click', () => item.classList.add('active'));
    item
      .querySelector('.nav-back-link')
      .addEventListener('click', () => item.classList.remove('active'));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');

  openMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    $('.header__mobile').fadeIn('slow');
    $('body').addClass('utl-opened');
  });

  closeMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    $('.header__mobile').fadeOut('slow');
    $('body').removeClass('utl-opened');
  });

  $('.header__mobile .nav-link').on('click', function () {
    // $('.header__mobile').fadeOut('slow');
    $('body').removeClass('utl-opened');
  });
}
