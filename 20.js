/**
 * @param {string} s
 * @return {boolean}
 */

function isClosingParenthesis(parenthesis) {
  return parenthesis === ")" || parenthesis === "}" || parenthesis === "]";
}

const getOpeningParenthesis = {
  ")": "(",
  "}": "{",
  "]": "[",
};

var isValid = function (s) {
  const check_array = [];
  let validityCheck = true;

  s.split("").forEach((element) => {
    if (isClosingParenthesis(element)) {
      if (check_array.length < 1) validityCheck = false;
      if (
        check_array[check_array.length - 1] === getOpeningParenthesis[element]
      )
        check_array.pop();
      else validityCheck=false;
    } else check_array.push(element);
  });

  return check_array.length === 0 && validityCheck;
};
