'use strict';

/*/////////////////
EX128 Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 100)
**/

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemdtmann',
  passport: 24732699000,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24732699000) {
    alert('checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// flightNum
// is the same as doing
// const flightNum = flight;
// const passenger = jonas;
/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);
**/
/*
//////////////////////////////////
EX :131 : Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🏆');
};

// Js use callbacks all the time
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
**/

/*
///////////////////////////////////////////
EX: 135 : Functions retunr functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

**/
/*
/////////////////////////////////////
EX 136. Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();




(() => console.log('This wil ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
console.log(isPrivate);

**/
/*
////////////////////////
EX: 187
const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
**/
/*
////////////////////////////
EX :138
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

console.dir(f);
// Re-assinging f function
h();
f();

console.dir(f);

// Example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are noe boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds `);
};

const perGroup = 1000;
boardPassenger(180, 3);

**/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();