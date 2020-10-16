const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (!sampleActivity || typeof(sampleActivity) !== 'string')
			return false;
		
	const sampleActivityNumber = parseFloat(sampleActivity);
	if (isNaN(sampleActivityNumber)) 
		return false;
	
	if (sampleActivityNumber < 0 || sampleActivityNumber >= 15) 
		return false;
	
	const t = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (Math.log(2) / HALF_LIFE_PERIOD);
	
	if (t === Infinity)
		return false;
	
	return Math.round(t);	
};
