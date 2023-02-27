const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ['Bob','Alice'];  => Không thể thay hoàn toàn mảng
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const year = [1991, 1984, 2008, 2020];
// console.log(calcAge(year)); // => NaN
// add element
friends.push("Join");
console.log(friends); // => Thêm cuối

friends.unshift("Tom");
console.log(friends); // => Thêm đầu

// remove

friends.pop();
console.log(friends); // => xóa cuối

const Boo = friends.includes("Tom"); // => boolean
console.log(Boo);

const age = [1990, 1994, 1997, 1996];

const ageArr = age.map(item => {
  console.log(item*2)
  console.log(typeof item)
})