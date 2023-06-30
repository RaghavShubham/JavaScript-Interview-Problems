const func = (obj) => {
  return function a(...args) {
    for (let key in obj) {
      let val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else if (val && typeof val === "object" && !Array.isArray(val)) {
        func(val)(...args);
      }
    }
  };
};

const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
    g: {
      h: (a, b, c) => a * b - c,
      i: {
        j: (a, b, c) => a + c - b,
      },
    },
  },
  d: (a, b, c) => a - b - c,
  e: null,
  f: 0,
  g: [1, 2],
};

func(obj)(1, 1, 1);
console.log(obj);
