// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

function NameMe(first, last) {
  return { firstName: first, lastName: last, name: first + " " + last };
}

// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(full) {
    const words = full.split(" ");
    if (words.length === 2) {
      this.firstName = words[0];
      this.lastName = words[1];
    }
  }
}
