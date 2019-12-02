/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split("").map((char) => {
        const charCode = char.charCodeAt(0);
        
        if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
            return String.fromCharCode(charCode + 32);
        } else {
            return char;
        }
        
    }).join("");
};
