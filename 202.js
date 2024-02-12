/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let pastNumbers = {};
  let number = n;

  while (true) {
    console.log(typeof number);

    console.log(
      number
        .toString()
        .split("")
        .reduce((sum, current) => {
          sum += Math.pow(current, 2);
        }, 0)
    );

    number = number
      .toString()
      .split("")
      .reduce((sum, current) => {
        sum += Math.pow(current, 2);
      }, 0);

    if (number in pastNumbers) return false;
    else if (number === 1) return true;
    else {
      pastNumbers[number] = true;
    }
  }
};
