// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

const countAnimals = (animals, count) => count.map((animal) => animals.split(animal).length - 1);
