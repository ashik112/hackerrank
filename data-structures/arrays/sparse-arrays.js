// Sparse Array
/**
 * checks if a string from queries exists in strings and stores how many time the string occurs on res
 * @param {Array} strings 
 * @param {Array} queries 
 * @returns Array
 */
function matchingStrings(strings, queries) {
    let obj = {};
    for(let value of strings){
        if (obj[value]) {
            obj[value]++;
        } else {
            obj[value] = 1;
        }
    }
    let res = [];
    for (let value of queries) {
        if (obj[value]) {
            res.push(obj[value]);
        } else {
            res.push(0);
        }
    }
    return res;
}