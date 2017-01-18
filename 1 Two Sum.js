/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = [];
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if (map[nums[i]] != null) {
            result[0] = map[nums[i]];
            result[1] = i;
            break;
        }
        map[target - nums[i]] = i;
    }
    
    return result;
};
