const get = (obj, path) => {
  const excludeChar = [".", "[", "]"];
  let keysArr = [];
  if (path && !(path.length === 0)) {
    for (let i = 0; i < path.length; i++) {
      if (!excludeChar.includes(path[i])) {
        keysArr.push(path[i]);
      }
    }
  }

  const result = keysArr.reduce((obj, key) => obj[key], obj);

  return result;
};

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, ["a", "b", "c", "2"]));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, "a.c"));
