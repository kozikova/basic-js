const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) 
		throw Error();
	
	let transf = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
	
	let stack = [];
	let newArr = [];
	for (let i=0; i < arr.length; i++) {
		/*if (i >= 0 && i - 1 >= 0) {
			if (!transf.contains(arr[i]) && !transf.contains(arr[i - 1])) {
				stack.pop();
			} else {
				if (transf.contains(arr[i])) {
					stack.push(arr[i]);
				}
			}
		}*/
		
		if (arr[i] === '--discard-next') {
			i = i + 1;
		}	
		else if (arr[i] === '--discard-prev') {
			if (i <= 2 || (i > 2 && arr[i-2] !== '--discard-next')) {
				newArr.pop();
			}	
		}		
		else if (arr[i] === '--double-next') {
			if (i + 1 < arr.length) {
				newArr.push(arr[i + 1]);
				
				if ((arr[i+2] !== '--discard-prev') /*&& (arr[i+2] !== '--double-prev')*/) {
					newArr.push(arr[i + 1]);
					i++;
				}
			}
		}		
		else if (arr[i] === '--double-prev') {
			if (i - 1 >= 0 ) {
				if (/*arr[i-2] != '--double-next' &&*/ arr[i-2] !== '--discard-next') {
					/*if (arr[i-2] == '--double-next') {
						newArr.push('--double-next');
					}*/
					newArr.push(arr[i - 1]);
					
					//if (isNaN(newArr[newArr.length - 2]) && isNaN(arr[i - 1])) newArr.push({a: arr[i - 1], b: JSON.stringify(arr[i - 1])});
					
					if (i != arr.length - 1 
					&& (((JSON.stringify(newArr[newArr.length - 2]) !== JSON.stringify(arr[i - 1])) && newArr[newArr.length - 2] != arr[i - 1]) &&  
					!((JSON.stringify(arr[i - 1]) == 'null' && JSON.stringify(newArr[newArr.length - 2]) == 'null') && isNaN(newArr[newArr.length - 2]) 
					&& isNaN(arr[i - 1]))) && arr[i-2] !== '--double-next' && arr[i-2] !== '--discard-next' /*&& newArr[newArr.length - 2] != arr[i - 1]*/) {
						newArr.push(arr[i - 1]);
						//i++;
					}
				}
			}
		} else {
				
				newArr.push(arr[i])
		}	
	}
	
	return newArr;
};
