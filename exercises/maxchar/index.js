// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = '';
    for (let chars of str) {
        if(!charMap[chars]) {
            charMap[chars] = 1
        } else {
            charMap[chars]++;
        }
    }
    for (let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar
}

module.exports = maxChar;