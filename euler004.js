const util = require('./util.js');

function main () {
	let max = -Infinity;
	for (let i = 100; i <= 999; i ++) {
		for (let j = 100; j <= 999; j ++) {
			const prod = i * j;
			if (prod > max && util.isPalindrome(prod)) max = prod;
		}
	}
	return max;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 906609