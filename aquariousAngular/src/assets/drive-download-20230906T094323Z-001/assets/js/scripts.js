jQuery(
  (function ($) {
    "use strict";

    // Mean Menu
    jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "991",
    });

    AOS.init();

    window.addEventListener("DOMContentLoaded", (event) => {
      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector("#mainNav");
      if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: "#mainNav",
          offset: 74,
        });
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });

      var isMobile = false;
      var stickyAt = 50;

      if ($(window).width() < 991) {
        isMobile = true;
        stickyAt = 50;
      }
      $(window).scroll(function () {
        if ($(window).scrollTop() >= stickyAt) {
          $(".navbar-area").addClass("sticky");
        } else {
          $(".navbar-area").removeClass("sticky");
        }
      });
    });

    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      smartSpeed: 2000,
      center: true,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $(".product-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".bag-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".testi-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".savour-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".trendy-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".curated-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".astician-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".community-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".nw-occ-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".op-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".fluid-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        '<span class="next"><i class="fa fa-angle-right"></i></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        424: {
          items: 1.5,
        },
        768: {
          items: 2.5,
        },
        992: {
          items: 3.5,
        },
        1200: {
          items: 4,
        },
        1650: {
          items: 5,
        },
      },
    });

    //tooltips

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  })(jQuery)
);
