const util = require('./util.js');

function main () {
	let sum = 0;
	const pal = util.isPalindrome;
	for (let i = 0; i < 1000000; i++) {
		if (pal(i) && pal(i.toString(2))) {
			sum += i;
		}
	}
	return sum;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 872187