// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  const iterator = s1[Symbol.iterator]();
  for (let i = 0; i < s1.size; i++) {
    if (!s2.has(iterator.next().value)) return false;
  }
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = arr1.filter((x) => set2.has(x));
  const uniqueElementsInArr1 = arr1.filter((x) => !set2.has(x));
  const uniqueElementsInArr2 = arr2.filter((x) => !set1.has(x));

  return [
    intersection.length,
    uniqueElementsInArr1.length + uniqueElementsInArr2.length,
    uniqueElementsInArr1.length,
    uniqueElementsInArr2.length,
  ];
}
