﻿/* ==================== ASIDE ==================== */
document.addEventListener('DOMContentLoaded', function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
      });
    }
  };

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

  // Link active
  const linkColor = document.querySelectorAll('.nav_link');

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
  }
  linkColor.forEach((l) => l.addEventListener('click', colorLink));

  // Your code to run since DOM is loaded and ready
});

/* ==================== AOS ==================== */
document.addEventListener('DOMContentLoaded', (e) => {
  AOS.init();
});

/* ==================== SCROLL TOP ==================== */
const $btnScrollTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', (e) => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let viewportHeight = window.innerHeight;

  scrollTop > viewportHeight
    ? $btnScrollTop.classList.remove('hidden')
    : $btnScrollTop.classList.add('hidden');
});
$btnScrollTop.addEventListener('click', (e) => {
  if (e.target.matches('.scrollTop') || e.target.matches(`.scrollTop *`)) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});
