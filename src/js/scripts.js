'use strict';
import './submission-handler';

const body = document.querySelector('body'),
  loader = document.querySelector('.loader'),
  header = document.querySelector('.header'),
  footer = document.querySelector('.footer__inner'),
  content = document.querySelectorAll('.content'),
  projects = document.querySelector('.projects'),
  navBtn = document.querySelector('.nav-btn'),
  nav = document.querySelector('.nav'),
  video = document.querySelector('.project-video');

let loadTimeout = null;

window.onload = () => {
  loader.classList.remove('loader--loading');

  loadTimeout = setInterval(() => {}, 1000);

  if (loadTimeout) {
    clearInterval(loadTimeout);
    loadTimeout = null;
    contentLoaded();
  }
};

window.addEventListener('DOMContentLoaded', (event) => {
  navBtn.addEventListener('click', openMobileNav);
});

function contentLoaded() {
  loader.classList.add('loader--loaded');
  setTimeout(() => {
    body.classList.remove('locked');
    header.classList.add('header--loaded');
    footer.classList.add('footer__inner--loaded');
    content.forEach((item) => {
      item.classList.add('content--loading');
    });
    if (projects !== null) {
      projects.classList.add('projects--loaded');
    }
  }, 1000);
  setTimeout(() => {
    content.forEach((item) => {
      item.classList.remove('content--loading');
      item.classList.add('content--loaded');
    });
    if (video !== null) {
      video.play();
    }
  }, 1500);
}

function openMobileNav() {
  if (navBtn.classList.contains('nav-btn--active')) {
    navBtn.classList.remove('nav-btn--active');
    nav.classList.remove('nav--active');
    body.classList.remove('locked');
  } else {
    navBtn.classList.add('nav-btn--active');
    nav.classList.add('nav--active');
    body.classList.add('locked');
  }
}
