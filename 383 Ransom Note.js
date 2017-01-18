/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var magArray = magazine.split("").sort();
    var noteArray = ransomNote.split("").sort();
    
    var j = 0;
    for (var i = 0; i < magArray.length; i++) {
        if (magArray[i] === noteArray[j]) j++;
        if (j > noteArray.length - 1) return true;
    }
    
    return j > noteArray.length - 1;
};
