const printSubarray = (arr, k) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let temp = [];
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      temp.push(arr[j]);

      if (sum === k) {
        console.log(temp);
      }
    }
  }
};

const input = [3, 4, -7, 1, 3, 3, 1, -4];
const k = 7;
printSubarray(input, k);

// Output:
// [3, 4][(3, 4, -7, 1, 3, 3)][(1, 3, 3)][(3, 3, 1)];
