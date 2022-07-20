// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}

// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n) {
  if (n < 5) return n * 100;
  else if (n >= 5 && n < 10) return n * 95;
  else if (n >= 10) return n * 90;
}

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}
