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

for (let rep = 1; rep < 4; rep++) {
  console.log(`For: Lifting weight rep ${rep} 🎊`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weight rep ${rep} 🎊`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Stop");
  }
}
