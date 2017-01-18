/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var cur = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]) {
            cur++;
            max = (cur > max) ? cur : max;
        } else {
            max = (cur > max) ? cur : max;
            cur = 0;
        }
    }
    
    return max;
};
