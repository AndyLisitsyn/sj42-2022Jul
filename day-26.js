// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript

const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/

function moveZeros(arr) {
  return arr.sort((a, b) => {
    if (b === 0) return -1;
  });
}
