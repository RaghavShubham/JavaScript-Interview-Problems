const helper = (obj, keys, val) => {
  const [current, ...rest] = keys;

  if (rest.length > 0) {
    if (!obj[current]) {
      const isNumeric = `${+rest[0]}` === rest[0];
      obj[current] = isNumeric ? [] : {};
      obj[current] = helper(obj[current], rest, val);
    } else {
      obj[current] = helper(obj[current], rest, val);
    }
  } else {
    obj[current] = val;
  }
  return obj;
};

const set = (obj, path, val) => {
  const excludeChar = [".", "[", "]"];
  const keys = [];

  for (let i in path) {
    if (!excludeChar.includes(path[i])) keys.push(path[i]);
  }

  helper(obj, keys, val);

  console.log(keys);
};

const object = {
  a: [
    {
      b: {
        c: 1,
      },
    },
  ],
};
set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// 4

set(object, ["x", "0", "0", "y", "z"], 5);
console.log(object.x[0][0].y.z);
// 5

console.log(object);
