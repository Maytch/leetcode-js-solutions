/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    if (!nums1.length || !nums2.length) return result;
    
    nums1.sort(sort);
    nums2.sort(sort);
    
    var i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (!result.length || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
                i++;
                j++;
                continue;
            }
        }
        if (nums1[i] < nums2[j]) {
            i++;
            continue;
        } else {
            j++;
            continue;
        }
        
        i++;
    }
    return result;
};

var sort = function(a, b) {
    return a - b;
}
