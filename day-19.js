// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

const countAnimals = (animals, count) => count.map((animal) => animals.split(animal).length - 1);

// https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript

const findSimilarity = (str, word) => {
  const regStr = new RegExp(
    "^" +
      word
        .replace(/./g, ".")
        .replace(/^./, word[0])
        .replace(/.$/, word[word.length - 1]) +
      "$"
  );
  return str
    .split(" ")
    .filter((x) => regStr.test(x))
    .join(" ");
};
