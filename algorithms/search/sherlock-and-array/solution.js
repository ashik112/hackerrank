function balancedSums(arr) {
    let len = arr.length, i = 0, j = len - 1;
    let leftSum = arr[i], rightSum = arr[j];
    while (i < j) {
        if (leftSum === rightSum) {
            i++; j--;
            leftSum += arr[i];
            rightSum += arr[j];
        } else if (leftSum < rightSum) {
            i++;
            leftSum += arr[i];
        } else {
            j--;
            rightSum += arr[j];
        }
    }
    if (leftSum === rightSum) {
        return 'YES';
    } else {
        return 'NO';
    }
}