const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const pipe = (...fns) => {
  return (val) => {
    fns.forEach((fn) => {
      val = fn(val);
    });
    return val;
  };
};

const result = pipe(getSalary, addBonus, deductTax)(val);

console.log(result);
