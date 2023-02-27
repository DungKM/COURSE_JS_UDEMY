'use strict';

const modal = document.querySelector('.modal');

const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');

const showContent = function() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const hideContent = function() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

[...showModal].forEach((item) => { 
    item.addEventListener('click',showContent);
 })
