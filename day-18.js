// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

function tailAndHead(arr) {
  const tailAndHeadSums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    tailAndHeadSums.push((arr[i] % 10) + parseInt(arr[i + 1].toString()[0]));
  }
  return tailAndHeadSums.reduce((a, b) => a * b);
}

// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  return arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
    ? "It's a black array"
    : "It's a white array";
}

// https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript

function rndCode() {
  return (
    rndRange("ABCDEFGHIJKLM", 2) +
    rndRange("0123456789", 4) +
    rndRange("~!@#$%^&*", 2)
  );
}

function rndRange(values, count) {
  let range = "";
  for (let i = 0; i < count; i++) {
    range += values[~~(values.length * Math.random())];
  }
  return range;
}
