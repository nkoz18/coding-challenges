function areThereDuplicates(){

  let lookup = {};

  for (var i = 0; i < arguments.length; i++) {
    if(lookup[arguments[i]] !== undefined){
      lookup[arguments[i]]++;
    }else{
      lookup[arguments[i]] = 1;
    }
  }

  for (var i = 0; i < arguments.length; i++) {
    if(lookup[arguments[i]] > 1) {
      return true;
    }
  }

  return false;

}

console.log(areThereDuplicates('a', 'b', 'c', 'c'));
