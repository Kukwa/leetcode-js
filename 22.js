/**
 * @param {number} n
 * @return {string[]}
 */
// (
// ()    ((

var generateNextMove = function (n, currentN, currentAnswer) {
  let resultsArray = [];

  if (n > currentN) {
    resultsArray = resultsArray.concat(
      generateNextMove(n, currentN + 1, currentAnswer + "(")
    );
    if (currentAnswer.length < currentN * 2)
      resultsArray = resultsArray.concat(
        generateNextMove(n, currentN, currentAnswer + ")")
      );
  } else {
    while (currentAnswer.length < n * 2) {
      currentAnswer = currentAnswer + ")";
    }
    resultsArray.push(currentAnswer);
  }

  return resultsArray;
};

var generateParenthesis = function (n) {
  return generateNextMove(n, 1, "(");
};
