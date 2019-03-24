// Complete the minimumBribes function below.
function minimumBribes(q) {
  // console.log(q);
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      console.log("Too chaotic");
      return;
    }
    // to calculate number of bribes received by one person,
    // only needs to check how many numbers are greater than q[i] from the initial one position before  to current position
    // here Math.max is used incase, the value of (q[i]-2) is less than 0
    for (let j = i - 1; j >= Math.max(0, q[i] - 2); j--) {
      if (q[j] > q[i]) bribes++;
    }
  }
  console.log(bribes);
}
minimumBribes([2, 5, 1, 3, 4]); // Too Chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7
