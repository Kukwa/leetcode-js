/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;

  let currentIndex = 0;
  let currentCount = 1;
  let length = 1;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > nums[currentIndex]) {
      currentIndex++;
      const helper = nums[currentIndex];
      nums[currentIndex] = nums[index];
      nums[index] = helper;
      currentCount = 1;
      length++;
    }
    else if (nums[index] === nums[currentIndex] && currentCount < 2) {
      currentCount++;
      currentIndex++;
      const helper = nums[currentIndex];
      nums[currentIndex] = nums[index];
      nums[index] = helper;
      length++;
    }
  }
  return length;
};
