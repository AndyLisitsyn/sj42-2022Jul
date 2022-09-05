// https://www.codewars.com/kata/5c743cec901022438549964a/train/javascript

const createIterator = (array) => {
  const iterator = { index: 0 };
  iterator.next = () => {
    const isFullyProcessed = iterator.index === array.length;
    const nextObj = {
      value: isFullyProcessed ? undefined : array[iterator.index++],
      done: isFullyProcessed,
    };
    return nextObj;
  };
  return iterator;
};
