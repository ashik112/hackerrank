// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => a-b); // sort array
    let diff = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++){
        const temp = Math.abs(arr[i] - arr[i - 1]);
        diff = Math.min(temp, diff);
    }
    return diff;
}

function main(){
    console.log(minimumAbsoluteDifference([3,-7,0])); // 3
    console.log(minimumAbsoluteDifference([-59 ,-36, -13, 1 ,-53, -92, -2, -96, -54, 75])); // 1
    console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); // 1
}
main();