/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s += "0";
    for (var i = 0; i < t.length; i++) {
        if (s.indexOf(t[i]) < 0) return t[i];
        if (t.split(t[i]).length > s.split(t[i]).length) return t[i];
    }
};
