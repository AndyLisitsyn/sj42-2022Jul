// https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript

function* generator(a) {
  let b = 0;
  while (true) {
    yield `${a} x ${++b} = ${a * b}`;
  }
}
