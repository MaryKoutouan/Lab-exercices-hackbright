// Write your solution below:
//Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

function removeDuplicate (str) {
    let neWord = "";
    let freq= {};
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
        freq [char]++;
    } else {
        freq[char] = 1
        neWord = neWord + char;
    }
    return neWord
}
}


function makeUnique(str) {
    let uniqStr = "";
    for (let i = 0; i < str.length; i++) {
        if (uniqStr.includes(str[i])) {
            continue
        } else {
            uniqStr += str[i]
        }
    }
    return uniqStr
}
console.log(makeUnique("hellloworld"))

