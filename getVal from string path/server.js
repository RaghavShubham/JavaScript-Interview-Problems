const get = (data, path) => {
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");
  const keys = path.split(".").filter(Boolean);
  let result = data;
  for (let key of keys) {
    result = result[key];
  }
  return result;
};

console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
console.log(
  get(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
); //=>'Cruz
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); //=>0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); //=>null
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]")); //=>undefined
