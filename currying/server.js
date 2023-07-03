// Currying
const sum = (...args) => {
  const storage = [...args];

  let sum = 0;

  if (args.length === 0) {
    return 0;
  }
  const temp = function (...args2) {
    storage.push(...args2);

    if (args2.length === 0) {
      return storage.reduce((a, b) => a + b, 0);
    } else {
      return temp;
    }
  };
  return temp;
};

const total = sum(10, 1, 2, 34, 4, 5, 452)(20)(30)(40)(50)();
console.log(total);
