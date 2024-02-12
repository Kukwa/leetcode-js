/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;

  currentIndex = 0;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > nums[currentIndex]) {
      currentIndex++;
      nums[currentIndex] = nums[index];
    }
  }
  return currentIndex + 1;
};
