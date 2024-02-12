/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sortedArray = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });
  return sortedArray.length % 2 === 0
    ? (sortedArray[sortedArray.length / 2 - 1] +
        sortedArray[sortedArray.length / 2]) /
        2
    : sortedArray[Math.floor(sortedArray.length / 2)];
};
