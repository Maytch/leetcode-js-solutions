/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    
    for (var i = 0; i < nums.length; i++) {
        var value = Math.abs(nums[i]) - 1;
        if (nums[value] > 0) {
            nums[value] = -nums[value];
        }
    }
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};
