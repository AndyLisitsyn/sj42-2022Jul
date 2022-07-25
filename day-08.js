//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (isNaN(n)) return "Input number is Number.NaN";
  if (n === Infinity) return "Input number is Number.POSITIVE_INFINITY";
  if (n === -Infinity) return "Input number is Number.NEGATIVE_INFINITY";
  return `Input number is ${n}`;
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(x) {
  const str = x.toString(16);
  return str.length === 1 ? "0" + str : str;
}

//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(2);
    if (arr[i] < n) count++;
  }

  return count;
}
