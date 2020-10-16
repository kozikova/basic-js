const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
	let maxDepth = 1;
    for (let i =0; i < arr.length; i++) {
		if (arr[i] instanceof Array) {
			let currentDepth = this.calculateDepth(arr[i]);
			if (currentDepth + 1 > maxDepth) {
				maxDepth = currentDepth + 1;
			}
		}
	}
	
	return maxDepth;
  }
};