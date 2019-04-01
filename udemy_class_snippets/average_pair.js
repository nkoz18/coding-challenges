function averagePair(arr, targetAvg){

  if(arr.length === 0 ) return false;

  let i = 0;
  let j = arr.length - 1;

  let tempAvg = null;

  while(i < j){

    tempAvg = (arr[i] + arr[j] ) / 2

    if(tempAvg === targetAvg){
      return true;
    }else if(tempAvg < targetAvg){
      i++;
    }else{
      j--;
    }

  }
  return false;
}



console.log(averagePair([], 4));
