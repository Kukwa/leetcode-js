/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const array = s.split("");

  let sum = 0;
  let subSum = 0;

  for (let index = 0; index < array.length; index++) {
    if (
      index < array.length - 1 &&
      romanValues[array[index]] < romanValues[array[index + 1]]
    ) {
      subSum += romanValues[array[index]];
      subSum = -subSum;
    } else if (
      index < array.length - 1 &&
      romanValues[array[index]] === romanValues[array[index + 1]]
    ) {
      subSum += romanValues[array[index]];
    } else {
      sum += romanValues[array[index]] + subSum;
      subSum = 0;
    }
  }

  return sum;
};
