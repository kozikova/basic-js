const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!(members instanceof Array)) 
		return false;
	
	return members.reduce((teamArray, current) => {
		if (current && typeof(current) === 'string' && current !== '') {
			teamArray.push(current.trim().charAt(0).toUpperCase());
		}
		
		return teamArray;
	}, []).sort().join('');  
};
