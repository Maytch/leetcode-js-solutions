/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length;
    for (var i = 0; i < length; i++) {
        if (!nums[i]) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            length--;
        }
    }
};
