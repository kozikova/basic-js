const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	const stepsCount = Math.pow(2, disksNumber) - 1;
	const secs =  parseInt(stepsCount / (turnsSpeed / 3600));
	
	return { turns: stepsCount, seconds: secs };
};
