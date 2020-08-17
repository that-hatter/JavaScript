const util = require('./util.js');

function main () {
	let count = 0;
	for (let n = 23; n <= 100; n++) {
		for (let r = 2; r <= n; r++) {
			if (combinations(n, r) > 1000000) count++;
		}
	}
	return count;
}

function combinations (n, r) {
	return util.factorial(n) / (util.factorial(r) * util.factorial(n - r));
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 4075