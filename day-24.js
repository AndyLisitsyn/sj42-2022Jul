// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution(...args) {
  return args.length !== new Set(args).size;
}

// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last(list) {
  if (arguments.length > 1) {
    return arguments[arguments.length - 1];
  }
  if (Array.isArray(list) || typeof list === "string") {
    return list[list.length - 1];
  }
  return list;
}

