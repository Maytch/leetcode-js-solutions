/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var compare = function(a, b) {return b - a};
    g.sort(compare);
    s.sort(compare);
    var j = 0;
    for (var i = 0; i < g.length; i++) {
        if (g[i] <= s[j]) j++;
    }
    return j;
};
