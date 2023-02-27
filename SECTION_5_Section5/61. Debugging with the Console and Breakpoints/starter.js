console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');
console.log('I love you so much ♥');

('use strict');
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius : ')),
  };
  console.table(measurement);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
