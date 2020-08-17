const util = require('./util.js');

function main () {
	const candidates = [...util.sieve(1e4, 1e3),...util.sieve(1e7, 1e6)];
	for (let i = candidates.length - 1; i >= 0; i --) {
		if (isPandigital(candidates[i])) return candidates[i];
	}
}

function isPandigital (num) {
	const digits = num.toString().split("").map(Number);
	if (digits.includes(0)) return false;
	const n = digits.length, set = new Set(digits);
	return set.size == n && digits.reduce((a, b) => a + b) == (n * (n + 1)) / 2;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 7652413