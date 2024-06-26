// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows) {
  return arrows.some((x) => !x.damaged);
}

// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

const multiplyAll = (arr) => (multiplier) => arr.map((x) => x * multiplier);
