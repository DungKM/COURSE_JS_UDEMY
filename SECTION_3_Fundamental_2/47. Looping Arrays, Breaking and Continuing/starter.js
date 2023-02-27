console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");
console.log("I love you so much ♥");

console.log("====================== 🎆🎇🧨🎄");
const jonas = [
  "Jonas",
  "Macheak",
  45,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] = typeof jonas[i];

  // Filling types array

  types.push( jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2023];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

console.log("--- ONLY STRINGS ---");

for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}

