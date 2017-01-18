/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(prev, curr) {
        return prev ^ curr;
    }, 0);
};
