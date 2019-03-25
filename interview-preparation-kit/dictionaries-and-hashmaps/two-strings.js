//Two Strings
//Given two strings, determine if they share a common substring. A substring may be as small as one character.
//For example, the words "a", "and", "art" share the common substrin 'a'. The words "be" and "cat" do not share a substring.

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(twoStrings('hi','word')); // NO
console.log(twoStrings('hello','word')); // YES