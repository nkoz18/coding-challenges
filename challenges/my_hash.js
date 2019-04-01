function hash(str) {

  let g = 8;
  let charset = "abcdefghijklmnop";

  for(let i = 0; i < str.length; i++) {
    g = (g * 82 + charset.indexOf(str[i]));
  }

  return g;

}



console.log(hash("agile"));

const getDigits = (value, base) => {
    const result = [];

    while (value) {
        result.push(value % base);
        value /= base;
    }

    return result.reverse();
};

const getLetter = index => {

    console.log(index);
    String.fromCharCode(97 + index);

}

const getPreimage = value =>
    getDigits(value, 83n)
        .map(Number)
        .map(getLetter)
        .join('');

console.log(getPreimage(29662550362n));
//console.log(getPreimage(16530092119764772n));
