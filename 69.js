/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let number = 0;
  while (true) {
    if ((number + 1) * (number + 1) > x) return number;
    number++;
  }
};
