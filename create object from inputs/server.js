// const helper = (obj, keys, val) => {
//   const [curr, ...rest] = keys;
//   if (rest.length === 0) {
//     obj[curr] = val;
//     return obj;
//   }

//   if (!obj[curr]) {
//     obj[curr] = {};
//     obj[curr] = helper(obj[curr], rest, val);
//   } else {
//     obj[curr] = helper(obj[curr], rest, val);
//   }

//   return obj;
// };

const solution = (id) => {
  const parent = document.getElementById(id);
  const inputs = parent.querySelectorAll("input");

  let result = {};

  for (let input of inputs) {
    const { name, value } = input;
    const keys = name.split(".");

    let temp = result;
    keys.forEach((key, index) => {
      if (!(key in temp)) {
        temp[key] = {};
      }

      if (index === keys.length - 1) {
        temp[key] = value;
      }

      temp = temp[key];
    });
    // result = helper(result, keys, value);
  }

  return result;
};

console.log(solution("parent"));
