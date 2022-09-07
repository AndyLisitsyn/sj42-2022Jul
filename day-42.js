// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  return [...str2].every((c) => str2.split(c).length <= str1.split(c).length);
}

// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const numIndexes = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const wanted = target - current;
    if (!numIndexes.has(wanted)) {
      numIndexes.set(current, i);
    } else {
      return [i, numIndexes.get(wanted)];
    }
  }
  return [-1, -1];
};
