'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //. textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// const user = 'Steven Thomas Williams';

const calcDisplayPrinBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
const updateUI = function (acc) {
  // Display movements
  displayMovements(currentAccount.movements);

  // Display balance
  calcDisplayPrinBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
};

// Event handle
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form form submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.vlaue = '';

  if (
    amount > 0 &&
    // receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI

    updateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement

    currentAccount.movements.push(amount);

    //Update UI

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// EX :142. Simple Array Methods

/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE : gọi vị trí phần tử trong mảng
console.log(arr);
console.log(arr.slice(2)); //Array(3) [ "c", "d", "e" ]
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE : xóa phần tử gọi
console.log(arr.splice(2)); // Array(3) [ "c", "d", "e" ]
console.log(arr.splice(1, 2));
arr.splice(-1);
console.log(arr);

// REVERSE : đảo ngược mảng ban đầu
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT : nối mảng
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));

*/
/////////////////////////////////

// LECTURES
/*
EX 143. The new at Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('jonas'.at(-2));

*/

/*
///////////////////////
EX : 144. Looping Arrays: forEach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i+1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1} : You withdrew ${Math.abs(movement)}`);
  }
}
console.log('=== FOREACH ===');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i+1} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1} : You deposited ${Math.abs(mov)}`);
  }
  console.log(arr);
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
//...
**/

////////////////////////////
/*
// EX : 145 : forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set

const currenciesUnique = new Set(['USD','GBP','USD','USD','EUR','EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
  // console.log(map); 
});

*/
// EX 146. PROJECT: "Bankist" App

//148:  Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó (vì đó là một cách làm không tốt để thay đổi các tham số hàm)
2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate
3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó trưởng thành ("Chó số 1 là người lớn và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó con 🐶")
4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  // console.log(dogsJuliaCorrected);
  dogsJuliaCorrected.splice(-2);
const dogs = dogsJuliaCorrected.concat(dogsKate);
console.log(dogs);
  dogs.forEach(function(dog, i){
    if(dog >= 3){
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    }else{
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  })
};
checkDogs([3, 4, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/////////////////////////////////
// EX : 150 : Map Methor
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => {
  mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1} : You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);
*/
/*

EX 152.The filter methor
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
////////////////////////////////////
/*
153. The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value 
const max = movements.reduce((acc, mov) => {
  if(acc > mov)
  return acc;
  else
  return mov;
}, movements[0]);

console.log(max);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Hãy quay lại nghiên cứu của Julia và Kate về chó. Lần này, họ muốn chuyển đổi tuổi của chó sang tuổi của con người và tính tuổi trung bình của những con chó trong nghiên cứu của họ.

Tạo một hàm 'calcAverageHumanAge', chấp nhận một mảng tuổi của chó ('ages') và thực hiện các việc sau theo thứ tự:

1. Tính tuổi của chó theo năm của con người bằng công thức sau: nếu chó <= 2 tuổi, humanAge = 2 * dogAge. Nếu chó > 2 tuổi, HumanAge = 16 + dogAge * 4.
2. Loại trừ tất cả những con chó dưới 18 tuổi của con người (giống như giữ những con chó ít nhất 18 tuổi)
3. Tính tuổi trung bình của con người cho tất cả chó trưởng thành (bạn hẳn đã biết từ các thử thách khác về cách chúng tôi tính tuổi trung bình 😉)
4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Viết lại hàm 'calcAverageHumanAge' từ thử thách trước, nhưng lần này là hàm mũi tên và sử dụng chuỗi!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

// const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   return average;
// };
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

*/

/////////////////////////
// EX 157 find methor
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0)

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

*/
////////////////////////////////
/*

161 : every and some
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME :CONDITION : set phần tử (boolean)
console.log(movements.some(mov => mov === -400));

const anyDeposits = movements.some(mov => mov > 1000);
console.log(anyDeposits);

// EVERY : set cả mảng(boolean)

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/*
///////////////////////
EX : 162. flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overaBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overaBalance);

// flat 
const overalBanlance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overaBalance);
// flatMap
const overalBanlance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overaBalance);

*/
/////////////////////////////
/*
// 163 : Sorting Array 
// Strings
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

console.log(movements);

// return < 0 , A, B
// return > 0 , B, A
movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

*/
//////////////////////////////////////
// Coding Challenge #4
/*
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5))

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

// Array from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€',''))
  );
  console.log(movementsUI);
 
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];


});
*/

///////////////////////////////////////
// Array Methods Practice
/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);
2;

const numDeposits10001 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits10001);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;

      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);
console.log('////////////////////////////////////');
//4.
// this is a nice title -> this is a Nice Title
const convertTitleCase = function (title) {
  const captizalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', ' in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : captizalize(word)))
    .join(' '); // tách chuỗi thành 1 mảng
  return captizalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

//////////////////////////////////////
// Thử thách lập trình #4

/*
Julia và Kate vẫn đang nghiên cứu về chó, và lần này họ đang nghiên cứu xem chó ăn quá nhiều hay quá ít.
Ăn quá nhiều có nghĩa là khẩu phần thức ăn hiện tại của chó lớn hơn khẩu phần khuyến nghị, còn ăn quá ít thì ngược lại.
Ăn một lượng vừa phải có nghĩa là khẩu phần thức ăn hiện tại của chó nằm trong phạm vi trên 10% và dưới 10% so với khẩu phần khuyến nghị (xem gợi ý).

1. Lặp lại mảng chứa các đối tượng con chó và đối với mỗi con chó, hãy tính toán phần thức ăn được khuyến nghị và thêm nó vào đối tượng dưới dạng một thuộc tính mới. KHÔNG tạo một mảng mới, chỉ cần lặp qua mảng. Diễn đàn: khuyến nghịThực phẩm = trọng lượng ** 0,75 * 28. (Kết quả tính bằng gam thực phẩm và trọng lượng cần tính bằng kg)
2. Tìm con chó của Sarah và đăng nhập vào bảng điều khiển xem nó ăn quá nhiều hay quá ít. GỢI Ý: Một số con chó có nhiều chủ, vì vậy trước tiên bạn cần tìm Sarah trong mảng chủ sở hữu, vì vậy phần này hơi phức tạp (có mục đích) 🤓
3. Tạo một mảng chứa tất cả chủ sở hữu của những con chó ăn quá nhiều ('ownersEatTooMuch') và một mảng gồm tất cả chủ sở hữu của những con chó ăn quá ít ('ownersEatTooLittle').
4. Ghi một chuỗi vào bảng điều khiển cho mỗi mảng được tạo trong 3., như sau: "Matilda and Alice and Bob's dogs eat too much!" và "Chó của Sarah, John và Michael ăn quá ít!"
5. Đăng nhập vào bảng điều khiển xem có con chó nào ăn CHÍNH XÁC lượng thức ăn được khuyến nghị hay không (đúng hoặc sai)
6. Đăng nhập vào bảng điều khiển xem có con chó nào ăn một lượng thức ăn OK không (chỉ đúng hoặc sai)
7. Tạo một mảng chứa những con chó đang ăn một lượng thức ăn OK (cố gắng sử dụng lại điều kiện được sử dụng trong 6.)
8. Tạo một bản sao nông của mảng dogs và sắp xếp nó theo phần thức ăn được khuyến nghị theo thứ tự tăng dần (hãy nhớ rằng các phần nằm bên trong các đối tượng của mảng)

GỢI Ý 1: Sử dụng nhiều công cụ khác nhau để giải quyết những thách thức này, bạn có thể sử dụng bài giảng tóm tắt để lựa chọn giữa chúng 😉
GỢI Ý 2: Nằm trong phạm vi 10% trên và dưới phần được khuyến nghị có nghĩa là: hiện tại > (được khuyến nghị * 0,90) && hiện tại < (được khuyến nghị * 1,10). Về cơ bản, phần hiện tại phải nằm trong khoảng từ 90% đến 110% so với phần khuyến nghị.

DỮ LIỆU THỬ NGHIỆM:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

CHÚC MAY MẮN 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(dog => (dog.reFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.reFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.reFood)
  .flatMap(dog => dog.owners);
// .flat()
console.log(ownersEatTooMuch);

const ownersEatTooLitte = dogs
  .filter(dog => dog.curFood < dog.reFood)
  .flatMap(dog => dog.owners);
// .flat()
console.log(ownersEatTooLitte);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.reFood));

// 6.
//hiện tại > (được khuyến nghị * 0,90) && hiện tại < (được khuyến nghị * 1,10). Về cơ bản, phần hiện tại phải nằm trong khoảng từ 90% đến 110% so với phần khuyến nghị.

const checkEatingOkay = dog =>
  dog.curFood > dog.reFood * 0.9 && dog.curFood < dog.reFood * 1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.some(checkEatingOkay));
// 7.
console.log(dogs.filter(checkEatingOkay));
//8.

const dogsCopy = dogs.slice().sort((a, b) => a.reFood - b.reFood);

console.log(dogsCopy);
