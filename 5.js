function checkIsInRange(string, pivotIndex, iterations, offset) {
  return (
    pivotIndex - iterations >= 0 &&
    pivotIndex + offset + iterations < string.length
  );
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = s[0];

  // Check for every character if is in the middle of palindrome
  // - When palindrome has uneven number of characters, then there characters pivot and pivot+2 will be the same
  // - When palindrome has even number of characters, then there characters pivot and pivot+1 will be the same
  // After calculating palindromes for each character in the string, check if one of them is the new longest
  for (let index = 0; index < s.length; index++) {
    let longestUneven = "";
    let longestEven = "";

    if (s[index] === s[index + 2]) {
      let iterations = 0;

      while (
        checkIsInRange(s, index, iterations, 2) &&
        s[index - iterations] === s[index + 2 + iterations]
      ) {
        iterations += 1;
      }

      longestUneven = s.slice(index - iterations + 1, index + 2 + iterations);
    }

    if (s[index] === s[index + 1]) {
      let iterations = 0;

      while (
        checkIsInRange(s, index, iterations, 1) &&
        s[index - iterations] === s[index + 1 + iterations]
      ) {
        iterations += 1;
      }

      longestEven = s.slice(index - iterations + 1, index + 1 + iterations);
    }

    if (longestUneven.length > longest.length) {
      longest = longestUneven;
    }

    if (longestEven.length > longest.length) {
      longest = longestEven;
    }
  }
  return longest;
};
