// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(
    (x) => typeof obj[x] === "function"
  );
}

// https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript

function Cylon(model) {
  this.model = model;
  this.attack = function () {
    return "Destroy all humans!";
  };
}

function HumanSkin(model) {
  this.__proto__ = new Cylon(model);
  this.infiltrate = function () {
    return "Infiltrate the colonies";
  };
}

// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript

Function.prototype.call = function (context, ...args) {
  return this.apply(context, args);
};
