module.exports = function reverse (n) {
  let array = [];
  let i = Math.abs(n);
  while (i >= 1) {
      array.unshift(i % 10);
      i = Math.trunc(i / 10);
  }
  array.reverse();
  let result = 0;
  for (let j = 0; j < array.length; j++) {
      result = result * 10 + array[j];
  }
  return result;
}
