// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr) {
  const result = [];
  const arrCopy = arr.slice();
  for (let i = 0; i < arr.length / 3; i++) {
    const sum = arrCopy
      .splice(0, 3)
      .reduce((partialSum, x) => partialSum + x, 0);
    result.push(sum);
  }
  return result;
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

function isolateIt(arr) {
  return arr.map(
    (x) => x.slice(0, x.length / 2) + "|" + x.slice(-x.length / 2)
  );
}

// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    let countA = arr.filter((x) => x === a).length;
    let countB = arr.filter((x) => x === b).length;
    if (countA === countB) return b - a;
    else if (countA > countB) return 1;
    else return -1;
  });
}
