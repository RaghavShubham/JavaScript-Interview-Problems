const nestedFilter = (obj, filter) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      nestedFilter(obj[key], filter);
    } else {
      if (!filter(obj[key])) {
        delete obj[key]; // remove the property from object when it doesn't match with given condition
      }
    }
    if (JSON.stringify(obj[key]) === "{}") {
      delete obj[key];
    }
  }
};

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";
nestedFilter(obj, filter);
console.log(obj);
// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night Moon",
//   }
// };
