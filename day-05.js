// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);
  if (sub === tail) 
    return true;
  else 
    return false;
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  if (bonus) salary *= 10;
  return "\u00A3" + salary;
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  return (n * n).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}

