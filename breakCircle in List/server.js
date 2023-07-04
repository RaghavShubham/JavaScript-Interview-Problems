const List = function (val) {
  this.val = val;
  this.next = null;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

function removeCircle(obj) {
  const store = new WeakSet([obj]);

  const helper = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (store.has(obj[key])) {
            obj[key] = null;
          } else {
            store.add(obj[key]);
            helper(obj[key]);
          }
        }
      }
    }
  };
  helper(obj);
}

function circleRemover() {
  const store = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (store.has(value)) {
        return null;
      } else {
        store.add(value);
      }
    }
    return value;
  };
}

// removeCircle(item1);
// console.log(JSON.stringify(item1));

console.log(JSON.stringify(item3, circleRemover()));
