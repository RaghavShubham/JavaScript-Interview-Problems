const subArrayWithZeroSum = (arr, k) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];

      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
};

const subArrayWithZeroSumSet = (input) => {
  const set = new Set();

  set.add(0);
  let sum = 0;
  for (let item of input) {
    sum += item;
    if (sum === 0 || set.has(sum)) return true; //if a sum repeats that means the elements between the two occurrences sum to zero
    set.add(sum);
  }

  return false;
};

const input = [3, 4, -2, 1, 3, 3, 1, -4];
const k = 7;
console.log(subArrayWithZeroSum(input, k));
console.log(subArrayWithZeroSumSet(input));
// Output:
// [3, 4][(3, 4, -7, 1, 3, 3)][(1, 3, 3)][(3, 3, 1)];
