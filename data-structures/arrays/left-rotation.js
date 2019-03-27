/**
 * a = arraay, d = number of rotations
 * @param {Array} a 
 * @param {number} d
 * @returns rotated array based on d
 */
function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        const temp = a[0];
        a.shift();
        a.push(temp);
    }
    return a;
}