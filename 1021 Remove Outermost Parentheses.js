/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let start = 0;
    let l = 1;
    let r = 0;
    let chunks = [];
    
    for (let i = 1; i < S.length; i++) {
        if (S.charAt(i) === ")") {
            r++;
        } else {
            l++;
        }
        
        if (l === r) {
            chunks.push(S.substring(start, i + 1));
            start = i + 1;
        }
    }
    
    return chunks.map((item) => {
       return item.substring(1, item.length - 1);
    }).join("");
};
