const arr = [1, 4, 6, 87, 8, 3, 32, 34, 23, 21, 123, 235, 57];

const max = arr.reduce((acc, curr) => (acc = acc < curr ? curr : acc), 0);
console.log(max);
