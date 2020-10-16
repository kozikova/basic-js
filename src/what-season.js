const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date)
		return 'Unable to determine the time of year!';

	if (!(date instanceof Date) || isNaN(date))
		throw new Error();
	
	const monthNumber = date.getMonth();
	
	if (monthNumber === 11 || monthNumber === 0 || monthNumber === 1)
		return 'winter';
	
	if (monthNumber === 2 || monthNumber === 3 || monthNumber === 4)
		return 'spring';
	
	if (monthNumber === 5 || monthNumber === 6 || monthNumber === 7)
		return 'summer';
	
	if (monthNumber === 8 || monthNumber === 9 || monthNumber === 10)
		return 'autumn';
  
	throw new Error();
};
