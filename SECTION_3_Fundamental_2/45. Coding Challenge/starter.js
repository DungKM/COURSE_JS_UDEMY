const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const join = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
join.calcBMI();

console.log(mark.bmi, join.bmi);

if (mark.bmi > join.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${join.fullName}'s BMI (${join.bmi})`
  );
} else if (mark.bmi < join.bmi) {
  console.log(
    `${join.fullName}'s BMI (${join.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
