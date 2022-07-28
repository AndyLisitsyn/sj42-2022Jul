// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
  let shortestLength = arr[0].length;
  for(const str of arr) {
    if (shortestLength > str.length) shortestLength = str.length;
  }
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, shortestLength);
  }
  return arr;
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);
  if (firstIndex === -1) return -1;
  return lastIndex - firstIndex;
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  const words = string.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].split("").join(separator));
  }
  return result.join(" ");
}
