/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.toString().length > 1) {
        var numArray = num.toString().split("");
        num = numArray.reduce(function(a, b) {
            return parseInt(a) + parseInt(b);
        },0);
    }
    
    return num;
};
