const util = require('./util.js');

function main () {
	let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let res = 0, gap = 1000000;
	for (let i = 9; i >= 0; i--) {
		let count = 0;
		while (gap - util.factorial(i) > 0) {
			gap -= util.factorial(i);
			count++;
		}
		res += (num[count] * (10 ** i));
		num.splice(count, 1);
	}
	return res;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 2783915460