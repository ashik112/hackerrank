// Common Child
// Solved using LONGEST COMMON SUBSEQUENCE
/**
 * A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Given two strings of equal length,
 * what's the longest string that can be constructed such that it is a child of both?
 * For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD. They can be formed by eliminating either the D or C from both strings.
 * Note that we will not consider ABCD as a common child because we can't rearrange characters and ABCD =/=  ABDC. *
 * */

 // create 2d array / matrix
function createMatrix(N, M) {
    var matrix = new Array(N); // Array with initial size of N, not fixed!
    for (var i = 0; i <= N; ++i) {
        matrix[i] = new Array(M).fill(null);
    }
    // Fill first row with zeros.
    for (let i = 0; i <= N; i += 1) {
        matrix[0][i] = 0;
    }

    // Fill first row with zeros.
    for (let i = 0; i <= M; i += 1) {
        matrix[i][0] = 0;
    }
    return matrix;
}

/**
 * Longest Common Subsequence
 * @param {string} s1 
 * @param {string} s2 
 */
function commonChild(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    const temp = createMatrix(len1, len2);
    let max = 0;
    for (let i = 1; i <= len1; i++){
        for (let j = 1; j <= len2; j++){
            if (s1[i - 1] === s2[j - 1]) {
                temp[i][j] = temp[i - 1][j - 1] + 1;
            }
            else {
                temp[i][j] = Math.max(temp[i][j - 1], temp[i - 1][j]);
            }
            if (temp[i][j] > max) {
                max = temp[i][j];
            }
        }
    }
    return max;
}

function main(){
    console.log(commonChild("HARRY","SALLY")); // 2
    console.log(commonChild("AA","BB")); // 0
    console.log(commonChild("SHINCHAN","NOHARAAA")); //3

}

main();