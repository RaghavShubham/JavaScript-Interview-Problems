function Stack() {
  this.items = [];
  this.top = 0;

  this.push = function (item) {
    this.items[this.top++] = item;
  };

  this.pop = function () {
    return this.items[--this.top];
  };

  this.peek = function () {
    return this.items[this.top - 1];
  };

  //Is Stack empty
  this.isEmpty = function () {
    return this.top === 0;
  };

  //Clear the Stack
  this.clear = function () {
    this.top = 0;
  };

  //Size of the Stack
  this.size = function () {
    return this.top;
  };
}

const openers = ["(", "[", "{"];
const closers = [")", "]", "}"];

function isBalanced(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (openers.includes(str[i])) stack.push(str[i]);
    else if (closers.includes(str[i])) {
      if (stack.isEmpty()) {
        return false;
      }
      let temp = stack.pop();
      if (temp == "{" && str[i] !== "}") return false;
      else if (temp == "[" && str[i] !== "]") return false;
      else if (temp == "(" && str[i] !== ")") return false;
    }
  }
  if (stack.isEmpty()) return true;
  else return false;
}

console.log(isBalanced("[{}]"));
console.log(isBalanced("[{}{}{}}]"));
console.log(isBalanced("({[]}){}[][({})]"));

// Output:
// true;
// false;
// true;
