const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

friends[2] = "Jay";
console.log(friends);

// friends = ['Bob','Alice'];  => Không thể thay hoàn toàn mảng
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);



const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const year = [1991, 1984, 2008, 2020];
console.log(calcAge(year)); // => NaN
