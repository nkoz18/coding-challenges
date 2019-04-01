
function productOfArray(arr){

var total = 1;

  function getProductOfArray(arr){

    if(arr.length < 1) return 1;

    total *= arr[0];

    getProductOfArray(arr.slice(1))

    return total;

  }

  return getProductOfArray(arr);

}

console.log(productOfArray([1,2,3,10]));
