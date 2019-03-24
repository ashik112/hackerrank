// Complete the minimumBribes function below.
function minimumBribes(q) {
  // console.log(q);
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      console.log("Too chaotic");
      return;
    }
    for (let j = i - 1; j >= Math.max(0, q[i] - 2); j--) {
      if (q[j] > q[i]) bribes++;
    }
  }

  //console.log();
  console.log(bribes);
  //console.log();
}
