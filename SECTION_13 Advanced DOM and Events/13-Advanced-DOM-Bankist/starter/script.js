'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  Scrolling;
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //Guard clause
  if (!clicked) return;
  // Remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Active content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Meu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sliblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sliblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
   else nav.classList.remove('sticky')
});

//////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//    e.preventDefault();
//    const id = this.getAttribute('href');
//    console.log(id);
//    document.querySelector(id).scrollIntoView({behavior: "smooth"});
//   })
// });

// 1. And event listener to  common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////
// Node -> Element, Text, Comment, Document

//////////////////////////////////////////
/*
EX :186 Selecting , Creating, and Deleting Elements
console.log(document.documentElement); // Lấy toàn bộ trang
console.log(document.head); // Lấy toàn bộ head
console.log(document.body); // Lấy toàn bộ body

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it! </button>';

// header.prepend(message); // đầu phần tử header
header.append(message);
// header.append(message).cloneNode(true);// cuối

// header.before(message)  // trước phần tử header
// header.after(message)  // sau phần tử header

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
///////////////////////////////////////
EX 187 : Styles, Attributes and Classes
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height + 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
message.style.setProperty('background-color', '#37383d');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attribute
console.log(logo.dataset.versionNumber);

// Classes 
logo.classList.add('c','j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// don't use
log0.className = 'jonas'

*/

///////////////////////////////////////

// // Button scrolling
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   Scrolling
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );

//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth'
//   })

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// ////////////////////////////

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert('omouseenter : Great! You are reading the heading :D');
// };

////////////////////////////////////
/*
EX 191. Event Propagation in Practice
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 225));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('CONTAINER', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  console.log(e.currentTarget === this);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
*/
/*
const h1 = document.querySelector('h1');
// 193. DOM travesing
// Going downards : child

console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways : siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

**/
