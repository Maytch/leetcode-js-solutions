/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let split = s.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    return join;
};
