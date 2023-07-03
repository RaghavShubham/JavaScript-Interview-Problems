const curry = (fn) => {
  const temp = (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      let helper = (...args2) => {
        return temp(...args, ...args2);
      };
      return helper;
    }
  };
  return temp;
};
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 15
console.log(curriedSum(1)(2, 3)(4, 5)); // 15
console.log(curriedSum(1)(2)(3)(4)(5)); // 15
