function fib(num){
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
}


//1,1,2,3,5,8

console.log(fib(4));
console.log(fib(43));
