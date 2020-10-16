const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((sum, current) => { return sum + current.filter(x => {return x === '^^'; }).length }, 0);
};
