// Complete the rotLeft function below.
/**
 * @param {*} a is Array of integers
 * @param {*} d is Number of rotations
 */
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    const temp = a[0];
    a.shift();
    a.push(temp);
  }
  return a;
}
console.log(rotLeft([1,2,3,4,5],4)) //[ 5, 1, 2, 3, 4 ]
