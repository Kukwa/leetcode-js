/**
 * @param {number[][]} points
 * @return {boolean}
 */

function comparePoints(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}

var isBoomerang = function (points) {
  const fixedDecimal = 8;
  let p1 = points[0];
  let p2 = points[1];
  let p3 = points[2];

  if (comparePoints(p1, p2) || comparePoints(p1, p3) || comparePoints(p2, p3))
    return false;

  let a1 = (p1[1] - p2[1]) / (p1[0] - p2[0]).toFixed(fixedDecimal);
  let a2 = (p2[1] - p3[1]) / (p2[0] - p3[0]).toFixed(fixedDecimal);
  let b1 = (p1[1] - ((p1[1] - p2[1]) / (p1[0] - p2[0])) * p1[0]).toFixed(
    fixedDecimal
  );
  let b2 = (p2[1] - ((p2[1] - p3[1]) / (p2[0] - p3[0])) * p2[0]).toFixed(
    fixedDecimal
  );

  console.log((p1[1] - p2[1]) / (p1[0] - p2[0]));
  console.log((p2[1] - p3[1]) / (p2[0] - p3[0]));
  console.log(p1[1] - ((p1[1] - p2[1]) / (p1[0] - p2[0])) * p1[0]);
  console.log(p2[1] - ((p2[1] - p3[1]) / (p2[0] - p3[0])) * p2[0]);

  return (
    Math.abs(a1) !== Infinity &&
    Math.abs(b2) !== Infinity &&
    !(a1 === a2 && b1 === b2)
  );
};
