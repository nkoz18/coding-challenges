function MaximalSquare(strArr) {

  var maximumSquareSize = 0;
  // variable for storing the max result

  var cache = strArr.map(function(arr) {
      return arr.slice();
  });

  for(i=0;i<strArr.length;i++){

    for(j=0;j<strArr[i].length;j++){

      if (strArr[i][j] > 0) {
        cache[i][j] = 1 + Math.min(cache[i][j-1], cache[i-1][j],cache[i-1][j-1]);
      }

      if(cache[i][j] > maximumSquareSize) {
        maximumSquareSize = cache[i][j];
      }

    }

  }

  return maximumSquareSize;

}

// keep this function call here
MaximalSquare(readline());
