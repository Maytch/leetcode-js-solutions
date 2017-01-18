/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["", "M", "MM", "MMM", "MV"];
    
    var result = ""
    var str = num.toString();
    for (var i = 0; i < str.length; i++) {
        var x = str[i];
        
        switch (i) {
            case str.length - 1: // ones
                result += ones[x];
                break;
            case str.length - 2: // tens
                result += tens[x];
                break;
            case str.length - 3: // hundreds
                result += hundreds[x];
                break;
            case str.length - 4: // thousands
                result += thousands[x];
                break;
        }
    }
    
    return result;
};
