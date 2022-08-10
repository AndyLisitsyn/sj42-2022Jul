// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

function tailAndHead(arr) {
  const tailAndHeadSums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    tailAndHeadSums.push((arr[i] % 10) + parseInt(arr[i + 1].toString()[0]));
  }
  return tailAndHeadSums.reduce((a, b) => a * b);
}

