function reverse(str){


  if(str.length === 0) return "";

  return reverse(str.slice(1, str.length)) + str.charAt(0);

}


console.log(reverse("abc"));
