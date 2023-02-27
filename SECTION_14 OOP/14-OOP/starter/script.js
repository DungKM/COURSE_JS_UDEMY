'use strict';
//////////////////////////////////
//208. Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    // this.calcAge = function (){
    //     console.log(2037 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1 .New {} is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matila = new Person('Matilda', 2017);
const jack = new Person('Jack',1975);
console.log(matila,jack);
const jay = "jay";
console.log(jonas instanceof Person);
console.log(jack instanceof Person);
console.log(jay instanceof Person);

// Prototypes

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}
jonas.calcAge();
jack.calcAge();

console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matila)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypOfLinkedObjects

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matila.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false


console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constuctor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Arr === []
console.log(arr.__proto__); 
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); 
Array.prototype.unique = function (){
  return   [...new Set(this)];
}

console.log(arr.unique()); 


const h1 = document.querySelector('h1');
console.dir(x => x+1);

**/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Sử dụng hàm tạo để triển khai Xe hơi. Một chiếc ô tô có nhãn hiệu và thuộc tính tốc độ. Thuộc tính tốc độ là tốc độ hiện tại của ô tô tính bằng km/h;
2. Thực hiện phương pháp 'tăng tốc' để tăng tốc độ của ô tô lên 10 lần và ghi tốc độ mới vào bảng điều khiển;
3. Thực hiện phương pháp 'phanh' sẽ giảm 5 tốc độ của ô tô và ghi tốc độ mới vào bảng điều khiển;
4. Tạo 2 đối tượng ô tô và thử nghiệm gọi 'tăng tốc' và 'phanh' nhiều lần trên mỗi đối tượng.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} hm/h`);
}

Car.prototype.brake = function () {
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} hm/h`);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

**/

// class expression
// const PersonCl = class {};

// class declaration
/*
class Personcl {
  constructor(fullName, birthYear) {
    // this.firstName = firstName;
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name !`);
    }
  }
// 
  get fullName(){
    return this._fullName;
  }
// static method
  static hey = function (){
    console.log('Hey there 🍖');
    console.log(this);
  }
}

// Personcl.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

const jessica = new Personcl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === Personcl.prototype);

// Personcl.prototype.greet = function () {
//     console.log(2037 - this.birthYear);
// }
jessica.greet();
const walter = new Personcl('Waltr While', 1965);

Personcl.hey();


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements);


**/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Tạo lại thử thách 1, nhưng lần này sử dụng lớp ES6;
2. Thêm một bộ thu có tên là 'speedUS' để trả về tốc độ hiện tại tính bằng mi/h (chia cho 1,6);
3. Thêm một trình cài đặt có tên 'speedUS' để đặt tốc độ hiện tại tính bằng mi/h (nhưng chuyển đổi nó thành km/h trước khi lưu trữ giá trị, bằng cách nhân đầu vào với 1,6);
4. Tạo một chiếc ô tô mới và thử nghiệm các phương pháp tăng tốc và phanh cũng như với bộ khởi động và thiết lập.
DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} hm/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} hm/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

**/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Sử dụng hàm tạo để triển khai Ô tô điện (được gọi là EV) dưới dạng "lớp" CON của Ô tô. Ngoài nhãn hiệu và tốc độ hiện tại, EV còn có mức sạc pin hiện tại tính bằng % (thuộc tính 'sạc');
2. Triển khai phương thức 'chargeBattery' lấy đối số 'chargeTo' và đặt mức sạc pin thành 'chargeTo';
3. Thực hiện phương pháp 'tăng tốc' để tăng 20 tốc độ của ô tô và giảm 1% điện tích. Sau đó ghi lại một thông báo như sau: 'Tesla đi với tốc độ 140 km/h, với mức sạc 22%';
4. Tạo một đối tượng ô tô điện và thử nghiệm gọi 'tăng tốc', 'phanh' và 'sạc Pin' (sạc đến 90%). Chú ý điều gì sẽ xảy ra khi bạn 'tăng tốc'! GỢI Ý: Xem lại định nghĩa về đa hình 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*

*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} hm/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} hm/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);


