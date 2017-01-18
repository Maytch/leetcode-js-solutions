/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var chars = {};
    for (var i = 0; i < s.length; i++) {
        if (chars.hasOwnProperty(s[i])) {
            chars[s[i]]++;
        } else {
            chars[s[i]] = 1;
        }
    }
    
    for (i = 0; i < s.length; i++) {
        if (chars[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};
