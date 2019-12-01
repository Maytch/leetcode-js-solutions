/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let strings = 0;
    let l = 0;
    let r = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'L') {
            l++;
        } else {
            r++;
        }
        
        if (l === r) strings++;
    }
    
    return strings;
};
