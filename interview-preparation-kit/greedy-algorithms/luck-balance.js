/**
 * Luck Balance
 * Luck increases if lost and decreases if won
 * @param {Array} contests, 2D array, 0th element is Luck, 1th element is either 1 (important) or 0 (unimportant)
 * @param {number} k, number of important contests can be lost
 * return max number of lucks that can be achieved
 */
function luckBalance(contests, k) {
     contests = contests.sort(function (a, b) { return b[0] - a[0]; });
    let luck = 0;
    for (let contest of contests) {
        if (contest[1] === 0) {
            luck += contest[0];
        } else if (k!==0) {
            luck += contest[0];
            k--;
        } else {
            luck -= contest[0];
        }
    }
    return luck;
}
console.log(luckBalance([[ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ]],3)); // 29
console.log(luckBalance([ [ 13, 1 ], [ 10, 1 ], [ 9, 1 ], [ 8, 1 ], [ 13, 1 ], [ 12, 1 ], [ 18, 1 ], [ 13, 1 ] ],5)); // 42
console.log(luckBalance([ [ 5, 1 ], [ 4, 0 ], [ 6, 1 ], [ 2, 1 ], [ 8, 0 ] ],2)); // 21