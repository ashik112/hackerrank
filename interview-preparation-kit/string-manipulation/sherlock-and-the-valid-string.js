// Sherlock and The Valid String
/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times.
 * It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, 
 * determine if it is valid. If so, return YES, otherwise return NO.
 */

function getDiff(a, b) {
    return a > b ? a - b : b - a;
}
// Complete the isValid function below.
function isValid(s) {
    const obj = {};
    const freq = {};
    for (let i = 0; i < s.length; i++){
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
            freq[1] ? freq[1]++ : freq[1]=1;
        } else {
            // decrease previous frequency before increasing value
            freq[obj[s[i]]] ? freq[obj[s[i]]]-- : 0;
            //remove key if frequency is 0
            if (freq[obj[s[i]]] == 0) {
                delete freq[obj[s[i]]];
            }
            obj[s[i]]++;
            //increase frequency
            freq[obj[s[i]]] ? freq[obj[s[i]]]++ : freq[obj[s[i]]]=1;
        }
    }

    const objLen = Object.keys(obj).length;
    const freqLen = Object.keys(freq).length;

    if (freqLen === 2) { // more than 2 frequencies will mean it won't be possible to have, same frequencies even if 1 char is removed
        if (freq['1'] === 1) { // value of other frequency bound to be objLen - 1 
            return "YES";
        } else {
            const firstKey = Object.keys(freq)[0];
            const secondKey = Object.keys(freq)[1];
            const diff = getDiff(firstKey * 1, secondKey * 1);
            if (diff === 1) {  // that means by removing 1 from certain frquency, it will be possible to have same number of chars
                if (freq[firstKey] === 1 && freq[secondKey] === objLen - 1) {
                    return "YES";
                } else if (freq[firstKey] === objLen - 1 && freq[secondKey] === 1) {
                    return "YES";
                }
            }
        }
    } else if (freqLen === 1) { // all chars have same number of frequency
        return "YES";
    }
    return "NO";
}

function main() {
    console.log(isValid('aabbccddeefghi')); // NO
    console.log(isValid('aabbcd')); // NO
    console.log(isValid('aaaabbcc')); // NO
    console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')); // YES
    console.log(isValid('abcdefghhgfedecba')); // YES
    console.log(isValid('a')); // YES
}

main();