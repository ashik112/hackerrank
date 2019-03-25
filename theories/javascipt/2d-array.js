/**
 * There is no "matrix" structure natively in the language. But you can create them without major problem as far as you "book" the required memory.
 * Let's say you would like to create a 3x3 matrix, first you have to create an Array which will store references to each row/column (depending of your point of view, of course).
 */
function createMatrix(N, M) {
    var matrix = new Array(N); // Array with initial size of N, not fixed!

    for (var i = 0; i < N; ++i) {
        matrix[i] = new Array(M);
    }

    return matrix;
}

console.log(createMatrix(4,4));