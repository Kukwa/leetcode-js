/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

function calculateCenter(p1, p2, p3, p4) {
  return [
    (p1[0] + p2[0] + p3[0] + p4[0]) / 4,
    (p1[1] + p2[1] + p3[1] + p4[1]) / 4,
  ];
}

function calculateDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

var validSquare = function (p1, p2, p3, p4) {
  const remainingPoints = [p2, p3, p4];
  const points = [p1];
  remainingPoints.sort((a, b) => {
    return (
      calculateDistance(points[points.length - 1], b) -
      calculateDistance(points[points.length - 1], a)
    );
  });
  const p1Edge = remainingPoints.pop();
  const edge = calculateDistance(p1, p1Edge);
  points.push(p1Edge);

  if (edge === 0) return false;

  while (remainingPoints.length > 0) {
    remainingPoints.sort((a, b) => {
      return (
        calculateDistance(points[points.length - 1], b) -
        calculateDistance(points[points.length - 1], a)
      );
    });
    const p = remainingPoints.pop();
    if (calculateDistance(points[points.length - 1], p) !== edge) return false;
    points.push(p);
  }

  const center = calculateCenter(p1, p2, p3, p4);
  const d1 = calculateDistance(center, p1);
  const d2 = calculateDistance(center, p2);
  const d3 = calculateDistance(center, p3);
  const d4 = calculateDistance(center, p4);

  return d1 === d2 && d3 === d4 && d1 === d4;
};
