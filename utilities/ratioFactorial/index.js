const ratioCalculation = require("../ratio/index");
const factorialCalculation = require("../factorial/index");

const calculation = (a, b, c) => {
  const ratioValue = ratioCalculation(a, b);
  const factorialValue = factorialCalculation(c);
  return { ratio: ratioValue, factorial: factorialValue };
};
console.log(calculation(4, 2, 5));
module.exports = calculation;
