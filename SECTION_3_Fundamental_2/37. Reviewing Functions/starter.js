function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(4, 5));

const fruitOther = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  return juice;
};
const otherJuice = fruitOther(
  2,
  4
);
console.log(otherJuice);



((apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  console.log(juice);
})(3, 5);
