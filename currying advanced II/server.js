const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(100); // slow
console.log(a);
let b = memoizedFactorial(100); // faster
console.log(b);
