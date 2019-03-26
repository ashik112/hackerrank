//Flipping bits

function flippingBits(N) {
    /* The only JavaScript operator that works using unsigned 32-bit integers is >>>.
     * You can exploit this to convert a signed-integer in unsigned-integer number.
     */
    return (~N) >>> 0;
}

console.log(flippingBits(2147483647)); // 2147483648
console.log(flippingBits(1)); // 4294967294
console.log(flippingBits(0)); // 4294967295
