

function validAnagram(str, str1){

    if(str.length !== str1.length){
      return false;
    }

    let obj = {}

    for(let i = 0; i < str.length; i++){
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]]++;
      }else{
        obj[str[i]] = 1;
      }
    }

    for(let i = 0; i < str1.length; i++){
      let letter = str[i];
      if(!obj[letter]){
        return false;
      }else{
        obj[letter]--;
      }
    }

    return true;

}



console.log(validAnagram('anagram','gramana'));
