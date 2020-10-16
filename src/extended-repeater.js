const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = (typeof str === 'string') ? str : String(str);
  
  let result = String(str);
  if (options && typeof options == 'object') {
	  if (String(options.addition) != undefined && options.additionRepeatTimes) {
		  result = result + (options.addition + (options.additionSeparator != undefined ? options.additionSeparator : '|' )).repeat(options.additionRepeatTimes);
		  let resultlength = result.length;
		  result = result.substring(0, resultlength  - (options.additionSeparator != undefined ? options.additionSeparator : '|' ).length);
	  }
	  
	  else if (options.addition != undefined) {
		  result = result + options.addition;
	  }
	  
	  if (options.repeatTimes) {
		  result = (result + (options.separator != undefined ? options.separator : '+' )).repeat(options.repeatTimes);
		  let resultlength = result.length;
		  return result.substring(0, resultlength - (options.separator != undefined ? options.separator : '+' ).length);
	  }
  }
  
  return result;
};
  