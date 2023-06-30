const temp = {
  total: 0,
  lacs: function (num) {
    this.total += num * Math.pow(10, 5);
    return this;
  },
  thousand: function (num) {
    this.total += num * Math.pow(10, 3);
    return this;
  },
  crore: function (num) {
    this.total += num * Math.pow(10, 7);
    return this;
  },
  value: function () {
    return this.total;
  },
};

const computeAmount = () => {
  return temp;
};

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
