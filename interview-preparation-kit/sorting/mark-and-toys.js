//Mark and Toys

function maximumToys(prices, k) {
    //sort numbers in an array in ascending order
    prices = prices.sort((function (a, b) { return a - b }));

    let totalPrice = 0;
    let toys = 0;
    for (let value of prices) {
        if (totalPrice <= k) {
            totalPrice += value;
        } else {
            break;
        }
        if (totalPrice <= k) {
            toys++;
        }
    }
    return toys;
}

function main(){
    console.log(maximumToys([1,12,5,111,200,1000,10],50)); // 4
}
main();