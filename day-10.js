// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    const lastLetter = words[i][words[i].length - 1];
    words[i] = words[i].slice(0, -1).toUpperCase() + lastLetter;
  }
  return words.join(" ");
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    const charCode = chars[i].charCodeAt();
    if (
      (charCode >= 68 && charCode <= 90) ||
      (charCode >= 100 && charCode <= 122)
    )
      chars[i] = String.fromCharCode(charCode - 3);
    if (
      (charCode >= 65 && charCode <= 67) ||
      (charCode >= 97 && charCode <= 99)
    )
      chars[i] = String.fromCharCode(charCode + 23);
  }
  return chars.join("");
}

// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  s = s.trim();
  const temp = s;
  const result = [s];
  for (let i = 1; i < 5; i++) {
    result.push((s += temp));
  }
  return result.join("\n");
}
