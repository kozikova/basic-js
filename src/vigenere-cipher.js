const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(istoward = true) {
	if (istoward) {
		this.isreverse = false;
	} else {
		this.isreverse = true;
	}
	}
	
  encrypt(message, key) {
	  if (!message || !key) {
		  throw new Error('argument not defined');
	  }
	  
	const possibleSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
							 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
							 'U', 'V', 'W', 'X', 'Y', 'Z'];
	  
	message = message.toUpperCase();
    key = key.toUpperCase();
 
    let cipher = ''; 
    let idx = 0;
 
    message.split('').forEach(symbol =>
    {
		if (possibleSymbols.indexOf(symbol) == -1) {
			cipher = cipher + symbol;
		} else {
			let position = (possibleSymbols.indexOf(symbol) + possibleSymbols.indexOf(key[idx])) % possibleSymbols.length; 
			cipher = cipher + possibleSymbols[position];
			idx++;
		}		
        
		
		if (idx == key.length)
            idx = 0;
    });
 
    return !this.isreverse ? cipher : cipher.split('').reverse().join('');
  }  
  
  decrypt(message, key) {
    if (!message || !key) {
		  throw new Error('argument not defined');
	}
	
	const possibleSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
							 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
							 'U', 'V', 'W', 'X', 'Y', 'Z'];
	
	message = message.toUpperCase();
    key = key.toUpperCase();
 
    let decode = ''; 
    let idx = 0;
 
    message.split('').forEach(symbol =>
    {
		if (possibleSymbols.indexOf(symbol) == -1) {
			decode = decode + symbol;
		} else {
			let position = (possibleSymbols.indexOf(symbol) + possibleSymbols.length -
				possibleSymbols.indexOf(key[idx])) % possibleSymbols.length; 
			decode = decode + possibleSymbols[position]; 
			idx++;
		}
 
        if (idx == key.length)
            idx = 0;
    });
 
    return !this.isreverse ? decode : decode.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
