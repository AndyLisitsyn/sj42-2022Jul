// https://www.codewars.com/kata/557e508a47c7e9adf9000062/train/javascript

Object.prototype.description= "TODO: GIVE ME A DESCRIPTION";

// https://www.codewars.com/kata/javascript-class-like-objects

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.toString = function () {
  return `${this.name} is a ${this.type}`;
};

// https://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const fn = this;
  return function () {
    return fn.call(this === global ? ctx : this);
  };
};
