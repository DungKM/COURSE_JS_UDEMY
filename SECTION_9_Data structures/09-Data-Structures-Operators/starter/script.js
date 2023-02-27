'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object
  openingHour,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngrediens) {
    console.log(mainIngredient);
    console.log(otherIngrediens);
  },
};
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
///////////////////////////////////////
// Working With Strings - Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


/*
///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*
///////////////////////////////
EX121. Working With Strings - Part 1

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/
/*
/////////////////////////////////////
EX118
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// convert object to map

console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Anwer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);




/////////////////////////////////
/*
EX 117 : new Map()
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear()
console.log(rest);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
/*
////////////////////////////////////
EX: 116 : new SET
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear()
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(new Set( ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('hoanganhdung').size);
/* 
/////////////////////////////
EX114 : Looping Objects
const properties = Object.keys(openingHour); // Array(3) [ "thu", "fri", "sat" ]
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr +=`${day}, `;
}
console.log(openStr);
// Property Values

const values = Object.values(openingHour);
console.log(values);

const entries = Object.entries(openingHour);
console.log(entries);

for(const [key , {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
///////////////////////////////
// Optional Chaining

if (restaurant.openingHour && restaurant.openingHour.mon)
  // console.log(restaurant.openingHour.mon.open);

  // WITH optional chaining
  console.log(restaurant.openingHour.mon?.open);
console.log(restaurant.openingHour?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHour[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log('methods');
console.log(restaurant.order?.(0, 1) ?? 'Method does not exits');
console.log(restaurant.orderDelivery?.(0, 1) ?? 'Method does not exits');












// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];


/*
//////////////////////////
EX111: Loop For OF
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
**/
// console.log([...menu.entries()]);

// OR assingment operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////
// The Nullish Coalescing Operator
/* console.log('---- OR ----');
// use ANY data type, return ANY data type
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
restaurant.numGuets = 0;
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
const guests1 = restaurant.numGuets ? restaurant.numGuets : 10;
console.log(guests1);

const guests2 = restaurant.numGuets || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
/*
///////////////////////////////////
//Rest:Pattern and Parameters
//1 . Destructoring
//SPREAD , because on RIGHT side of
const arr = [1, 2, ...[3, 4]];

//REST ,  because on LEFT side of
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);
const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant. orderPizza('mushrooms');



/*
/////////////////////////////
//105. The Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, map, sets. Not objects
const str = 'jonas';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(...str);

// Read-world example
const ingredient = [
  prompt("Let's make pasta Ingreients 1?"),
  prompt('Ingreients 2?'),
  prompt('Ingreients 3?'),
];
console.log(ingredient);
restaurant.orderPasta(...ingredient);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisepe' };

console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristoran Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
/*

/////////////////////////////////////////
EX104
restaurant.orderDelivery({
  time: '22:30',
  address: 'Ha Noi , 29',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
**/
/*
////////////////////////////////////////////
EX103
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// temp = secondary;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
console.log(restaurant.order(2, 0));
// RECEIVE 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructoring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
**/

/* 
EX110 Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!

Giả sử chúng ta lấy dữ liệu từ một dịch vụ web về một trò chơi nào đó (bên dưới). Trong thử thách này, chúng ta sẽ làm việc với dữ liệu. Vì vậy, đây là nhiệm vụ của bạn:

1. Tạo một mảng người chơi cho mỗi đội (các biến 'players1' và 'players2')
2. Người chơi đầu tiên trong bất kỳ hàng người chơi nào là thủ môn và những người khác là người chơi trên sân. Đối với Bayern Munich (đội 1), hãy tạo một biến ('gk') với tên của thủ môn và một mảng ('fieldPlayers') với tất cả 10 cầu thủ còn lại
3. Tạo một mảng 'allPlayers' chứa tất cả người chơi của cả hai đội (22 người chơi)
4. Trong trận đấu, Bayern Munich (đội 1) sử dụng 3 cầu thủ dự bị. Vì vậy, hãy tạo một mảng mới ('players1Final') chứa tất cả các cầu thủ ban đầu của đội 1 cộng với 'Thiago', 'Coutinho' và 'Perisic'
5. Dựa trên đối tượng game.odds, tạo một biến cho mỗi lẻ (được gọi là 'team1', 'draw' và 'team2')
6. Viết một hàm ('printGoals') nhận một số tên cầu thủ tùy ý (KHÔNG phải là một mảng) và in từng tên đó ra bàn điều khiển, cùng với tổng số bàn thắng đã được ghi (số tên cầu thủ được chuyển vào ) )
7. Đội có tỷ lệ cược thấp hơn có nhiều khả năng giành chiến thắng. In ra bàn điều khiển đội nào có nhiều khả năng thắng hơn mà KHÔNG sử dụng câu lệnh if/else hoặc toán tử bậc ba.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
/*
// 1 .
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5.
// const { odds } = game;

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scrored`);
};

// printGoals('Davies', 'Kimmich', 'Goretzka', 'Coman');
// printGoals('Davies', 'Kimmich');

printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');

**/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Lặp lại mảng game.scored và in tên từng cầu thủ vào bảng điều khiển, cùng với số bàn thắng (Ví dụ: "Bàn thắng 1: Lewandowski")
2. Dùng vòng lặp để tính trung bình lẻ và log vào console (Chúng ta đã học cách tính trung bình cộng, bạn nào không nhớ có thể vào xem lại)
3. In 3 tỷ lệ cược ra bàn điều khiển, nhưng ở định dạng đẹp, chính xác như sau:
       Tỷ lệ trận thắng Bayern Munich: 1.33
       Tỷ lệ hòa: 3.25
       Tỷ lệ kèo trận thắng Borrussia Dortmund: 6.5
Lấy tên nhóm trực tiếp từ đối tượng trò chơi, không mã hóa chúng (ngoại trừ "vẽ"). GỢI Ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// console.log(odds);

// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.

// console.log(Object.entries(game.odds));
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Tạo một mảng 'sự kiện' của các sự kiện trò chơi khác nhau đã xảy ra (không trùng lặp)
2. Sau khi trận đấu kết thúc, người ta cho rằng thẻ vàng từ phút 64 là không công bằng. Vì vậy, hãy xóa sự kiện này khỏi nhật ký sự kiện trò chơi.
3. In chuỗi sau ra bảng điều khiển: "Trung bình cứ 9 phút lại có một sự kiện xảy ra" (hãy nhớ rằng một trò chơi có 90 phút)
4. Lặp lại các sự kiện và ghi chúng vào bảng điều khiển, đánh dấu xem đó là trong nửa đầu hay nửa sau (sau 45 phút) của trò chơi, như sau:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// 1.
const events = new Set(gameEvents.values());
console.log(events);

//2.
gameEvents.delete(64);
console.log(new Set(gameEvents.values()));
//3.
console.log(`An event happend, on average, every
${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend, on average, every ${time/ gameEvents.size} minutes`);

// 4.
for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

**/
