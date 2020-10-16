const CustomError = require("../extensions/custom-error");

const chainMaker = { 
  chain: [],


  getLength() {
    return this.chain.length;
  },
  addLink(value) {
	/*if (this.chain == undefined) {
	  this.chain = [];
	};*/
	const str = String(value);
	
	if (typeof(str) === 'function') {
		str = 'function() {}';
	}
		
    this.chain.push('( ' + ('' + str) + ' )');
	return this;
  },
  removeLink(position) {
	if (isNaN(parseInt(position)) || position >= this.chain.length || position < 0 || parseInt(position) != position) {
		this.chain = [];
		throw new Error('Invalid argument');
	}
	
    this.chain.splice(position - 1, 1);
	return this;
  },
  reverseChain() {
	  if (this.chain == undefined) {
		  this.chain = [];
	};
		
    this.chain.reverse();
	return this;
  },
  finishChain() {
	const result = this.chain.join('~~');
	this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
