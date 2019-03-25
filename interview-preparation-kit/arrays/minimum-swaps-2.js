//Minimum Swaps 2
//You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
//You are allowed to swap any two elements.
//You need to find the minimum number of swaps required to sort the array in ascending order.

//Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swap = 0;
  let pointer = 0;
  do {
    if (arr[pointer] !== pointer + 1) {
      //swap current value with the value from it's correct index
      const temp = arr[arr[pointer] - 1];
      arr[arr[pointer] - 1] = arr[pointer];
      arr[pointer] = temp;
      swap++;
    } else {
      pointer++; //go to next index if current value matches current index
    }
  } while (pointer !== arr.length);
  return swap;
}

function main() {
  console.log(minimumSwaps([4, 3, 1, 2])); // 3
  console.log(minimumSwaps([2, 3, 4, 1, 5])); // 3
  console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3
}
main();
