// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript

function countGrade(scores) {
  return {
    S: scores.filter((x) => x === 100).length,
    A: scores.filter((x) => x < 100 && x >= 90).length,
    B: scores.filter((x) => x < 90 && x >= 80).length,
    C: scores.filter((x) => x < 80 && x >= 60).length,
    D: scores.filter((x) => x < 60 && x >= 0).length,
    X: scores.filter((x) => x === -1).length,
  };
}

// https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript

function mirrorImage(arr) {
  let a;
  let b;
  if (
    arr.some((x, i) => {
      a = x;
      b = arr[i + 1];
      return a === parseInt(String(b).split("").reverse().join(""));
    })
  )
    return [a, b];
  return [-1, -1];
}

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  return []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
}
