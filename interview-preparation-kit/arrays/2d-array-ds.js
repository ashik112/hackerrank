// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  //only need to check till index 4 to form a hourglass
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let mid = arr[i + 1][j + 1];
      let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      const sum = top + mid + bottom;
      if (max < sum) max = sum;
    }
  }
  return max;
}

function main(){
    const a = [ [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ] ];

    console.log(hourglassSum(a)); // 19
}
main();