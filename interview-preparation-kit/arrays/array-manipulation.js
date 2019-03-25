// Array Manipulation
// check Difference Array ( Range Update Query ) in O(1) for more info
// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let A = new Array(n).fill(0);
    let D = new Array(n + 1).fill(0);
    for (let i = 0; i < queries.length;i++) {
        let l = queries[i][0];
        let r = queries[i][1];
        let x = queries[i][2];
        D[l] += x;
        if (r + 1 <= n) D[r + 1] -= x; 
        // console.log(i,' : ',D);
    }

    let max = 0;
    for (let i = 1; i < n; i++) {
        A[i] = D[i] + A[i - 1]; 
        if (max < A[i]) max = A[i];
    }
    // console.log('updated Array', A);
    /*for (let q of queries) {
        for (let i = q[0] - 1; i < q[1]; i++){
            arr[i] += q[2];
            if (max < arr[i]) max = arr[i];
        }
    }*/

    //let max = arr[0];
    /*for (let i = 0; i < arr.length; i++){
        if (max < arr[i]) max = arr[i];
    }*/
    return max;
}

function main(){
    const n = 5;
    const q = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ];
    console.log(arrayManipulation(n,q)); // 200
}
main();