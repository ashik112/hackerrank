// Recursion: Fibonacci Numbers

//Top-Bottom approach O(2^n)
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n - 1);
    }
}

console.log(fibonacci(5)); // 5;