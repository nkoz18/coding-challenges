function sameFrequency(num, num1){

  let first = num.toString();
  let second = num1.toString();

  if(first.length !== second.length){
    return false;
  }

  let lookup = {};

  for(let  i = 0; i < first.length; i++ ){
    if(lookup.hasOwnProperty(first[i])){
      lookup[first[i]]++;
    }else{
      lookup[first[i]] = 1;
    }
  }

  for(let  i = 0; i < second.length; i++ ){
    if(lookup[second[i]] > 0){
      lookup[second[i]]--;
    }else{
      return false;
    }
  }

  return true;

}



console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));
