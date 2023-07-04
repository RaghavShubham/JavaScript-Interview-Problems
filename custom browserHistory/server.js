function BrowserHistory() {
  this.history = [];
  this.index = -1;

  this.visit = function (url) {
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
  };

  this.current = function () {
    if (this.index < 0) {
      return "Home Page";
    } else {
      return this.history[this.index];
    }
  };

  this.backwards = function () {
    this.index = Math.max(-1, --this.index);
  };

  this.forwards = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  };
}

const bh = new BrowserHistory();
console.log(bh.current());
bh.visit("https://hello.com");
console.log(bh.current());
bh.visit("https://hellohelloji.com");
console.log(bh.current());
bh.backwards();
console.log(bh.current());
