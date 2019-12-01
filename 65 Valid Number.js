/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    if (!s.length) return false;
    
    let isDigit = false;
    
    let hasDecimal = false;
    let hasE = false;
    
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        
        if (c === '+' || c === '-') {
            if (i !== 0 && s.charAt(i - 1) !== "e") return false;
        } else if (c === '.') {
            if (hasDecimal || hasE) return false;
            hasDecimal = true;
        } else if (c === 'e') {
            if (hasE || !isDigit) return false;
            hasE = true;
            isDigit = false;
        } else if (/^[0-9]+$/.test(c)) {
            isDigit = true;
        } else {
            return false;
        }
    }
    
    return isDigit;
};
