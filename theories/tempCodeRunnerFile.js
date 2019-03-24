function getSubArrays(arr) {
  var len = arr.length,
    subs = Array(Math.pow(2, len)).fill();
  return subs
    .map((_, i) => {
      var j = -1,
        k = i,
        res = [];
      while (++j < len) {
        k & 1 && res.push(arr[j]);
        k = k >> 1;
      }
      return res;
    })
    .slice(1); // thrash the firts empty array.
}

function main(){
    console.log(getSubArrays([1,2,3]));
}
