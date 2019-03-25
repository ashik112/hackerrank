// Alternating Characters //
//You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters.
//To do this, you are allowed to delete zero or more characters in the string.
//Your task is to find the minimum number of required deletions.
//For example, given the string s= AABAAB, remove an A  at positions 0 and 3 to make s= ABAB in 2 deletions.

function alternatingCharacters(s) {
    let currentLetter = s[0];
    let count = 0;
    for (let i = 1; i < s.length;i++) {
        if (s[i] !== currentLetter) {
            currentLetter = s[i];
        } else {
            count++;
        }
    }
    return count;
}

console.log(alternatingCharacters('AAAA')); // 3
console.log(alternatingCharacters('ABABABAB')); // 0

