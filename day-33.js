// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript

Array.prototype.reduce = function (process, initial) {
  let reduction = initial;
  for (let i = 0; i < this.length; i++) {
    if (reduction === undefined && i === 0) {
      reduction = this[0];
      continue;
    }
    reduction = process(reduction, this[i]);
  }
  return reduction;
};

// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

Object.deepFreeze = function (object) {
  Object.freeze(object);
  Object.values(object).forEach((value) => {
    if (value === Object(value)) Object.deepFreeze(value);
  });
};
