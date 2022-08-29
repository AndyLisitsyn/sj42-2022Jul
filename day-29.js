// https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript

const myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

// https://www.codewars.com/kata/replicate-new

function nouveau(constructor, ...params) {
  const obj = { __proto__: constructor.prototype };
  const result = obj.constructor(...params);
  return result === Object(result) ? result : obj;
}
