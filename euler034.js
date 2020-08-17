const util = require('./util.js');

function main () {
	let factorials = [], sum = 0;
	for (let i = 0; i < 10; i++) factorials.push(util.factorial(i));
	for (let i = 10; i <= 2540160; i++) {
		const facSum = String(i).split("").map(Number).reduce((a, b) => a + factorials[b], 0);
		if (i == facSum) sum += i;
	}
	return sum;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 40730