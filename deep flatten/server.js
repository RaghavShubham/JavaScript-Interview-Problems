const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const flatten = (obj, prefix = "") => {
  let output = {};

  for (let key in obj) {
    let newKey = prefix.length > 0 ? `${prefix}.${key}` : key;
    if (obj[key] !== null && typeof obj[key] === "object") {
      const recursiveOutput = flatten(obj[key], newKey);
      output = { ...output, ...recursiveOutput };
    } else {
      output[newKey] = obj[key];
    }
  }
  return output;
};

console.log(flatten(nested));

// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }
