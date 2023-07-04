function add(...args) {
  let storage = args;

  let helper = (...args2) => {
    storage.push(...args2);
    return helper;
  };
  helper.valueOf = () => {
    return storage.reduce((a, b) => a + b, 0);
  };

  helper.value = helper.valueOf;

  this.value = helper.valueOf;

  return helper;
}

console.log(add(1)(2).value() === 3);
console.log(add(1, 2)(3).value() === 6);
console.log(add(1)(2)(3).value() === 6);
console.log(add(1)(2) + 3);
