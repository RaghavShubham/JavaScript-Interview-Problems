const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: true,
};

const pipe = (obj) => {
  return (...args) => {
    for (let key in obj) {
      if (typeof obj[key] === "function") {
        obj[key] = obj[key](...args);
      } else if (typeof obj[key] === "object") {
        console.log("object", obj[key]);
        obj[key] = pipe(obj[key])(...args);
      }
    }
    return obj;
  };
};

console.log(pipe(obj)(1, 1, 1));
