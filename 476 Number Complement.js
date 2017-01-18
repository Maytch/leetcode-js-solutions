/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var xB = (num).toString(2);
    var yB = [];
    for (var i = 0; i < xB.length; i++) {
        yB[i] = (xB[i] === "1") ? "0" : "1";
    }
    
    return parseInt(yB.join(""), 2);
};
