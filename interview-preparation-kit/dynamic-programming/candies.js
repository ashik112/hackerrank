// Candies
/*
Alice is a kindergarten teacher. She wants to give some candies to the children in her class.  All the children sit in a line and each of them has a rating score according to his or her performance in the class.  Alice wants to give at least 1 candy to each child. If two children sit next to each other, then the one with the higher rating must get more candies. 
Alice wants to minimize the total number of candies she must buy.
For example, assume her students' ratings are [4, 6, 4, 5, 6, 2]. 
She gives the students candy in the following minimal amounts: [1, 2, 1, 2, 3, 1]. 
She must buy a minimum of 10 candies.
*/
/**
 * 
 * @param {number} n 
 * @param {Array} child 
 */
function candies(n, child) {
    let candy = new Array(n).fill(0);
    if (n === 1) {
        return 1;
    }

    //left to right
    for (let i = 0; i < n; i++) {
        //compare current value with previous value
        if (child[i] < child[i - 1]) {
            candy[i] = 1;
            if (candy[i] === candy[i - 1]) {
                candy[i - 1]++;
            }
        } else if (child[i] > child[i - 1]) {
            candy[i] = candy[i - 1] + 1;
        } else {
            candy[i] = 1;
        }
    }

    //right to left
    for (let i = n - 1; i >= 0; i--) {
        if (child[i] < child[i - 1]) {
            //e.g, [4,2] has [1,1] after first iteration but should be [(1+1),1] => [2,1]
            if (candy[i] >= candy[i - 1]) {
                candy[i - 1] = candy[i] + 1;
            }
        }
    }

    return candy.reduce((total, num) => total + num); // return sum of candy[]
}

console.log(candies(3, [1, 2, 2])); // 4
console.log(candies(8, [2, 3, 6, 5, 4, 3, 2, 2])); // 19
