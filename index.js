"use strict";
const currentYear = document.querySelector(".year");
currentYear.textContent = new Date().getFullYear();

const header = document.querySelector(".header");
const openNavigation = document.querySelector(".click-to-open");
const closeNagivation = document.querySelector(".click-to-close");
 

openNavigation.addEventListener("click", function () {
  header.classList.add("nav-open");
});

closeNagivation.addEventListener("click", function () {
  if (header.classList.contains("header")) {
    header.classList.remove("nav-open");
  }
});

// sticky navigation
const heroSection = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    // null means the viewport
    root: null,
    // we want an event as soon as the hero-section gets out of the view port
    threshold: 0,
    rootMargin: "-180px",
  }
);
obs.observe(heroSection);

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

if (header.classList.contains("sticky")) {
  heroSection.style.marginTop = "9.6rem";
}
