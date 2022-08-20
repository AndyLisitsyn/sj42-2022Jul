// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push(() => i);
  return res;
}

// https://www.codewars.com/kata/shifty-closures/train/javascript

let name;
const greet_abe = () => {
  name = "Abe";
  return "Hello, " + name + "!";
};
const greet_ben = () => {
  name = "Ben";
  return "Hello, " + name + "!";
};

