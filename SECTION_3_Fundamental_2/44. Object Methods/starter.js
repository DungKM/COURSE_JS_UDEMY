const jonas = {
  firstName: "Jonas",
  lastName: "Macheak",
  birthYeah: 1991,
  age: 2023 - 2004,
  job: "teacher",
  friend: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },
  // calcAge: function () {
  //   console.log(this) // this = jonas
  //   return 2037 - this.birthYeah;
  // },
  calcAge: function () {
    console.log(this); // this = jonas
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Challenge

// ""
console.log(jonas.getSummary())