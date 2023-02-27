//  test

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scroreDolphins = calcAverage(44, 23, 71);
let scroreKoalas = calcAverage(64, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scroreDolphins, scroreKoalas);
scroreDolphins = calcAverage(85, 54, 41);
scroreKoalas = calcAverage(23, 34, 27);
checkWinner(scroreDolphins, scroreKoalas);
