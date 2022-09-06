// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript

function* generator(i) {
  let counter = 1;
  while (true) {
    let argument = yield counter++;
    counter = argument || counter;
  }
}
