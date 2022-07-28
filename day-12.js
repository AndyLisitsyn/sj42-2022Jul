// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str) {
  return [...str].map((x) => "0" + x.charCodeAt().toString(2));
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  const totalStr = [...x].map((x) => x.charCodeAt()).join("");
  let total1 = 0;
  for (let i = 0; i < totalStr.length; i++) {
    total1 += parseInt(totalStr[i]);
  }
  let total2 = 0;
  for (let i = 0; i < totalStr.length; i++) {
    if (totalStr[i] === "7") total2 += 1;
    else total2 += parseInt(totalStr[i]);
  }
  return total1 - total2;
}
