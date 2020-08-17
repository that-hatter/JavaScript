const util = require('./util.js');

function main () {
	for (let i = 33; ; i += 2) {
		if (util.isPrime(i)) continue;
		if (cannotSum(i)) return i;
	}
}

function cannotSum (n) {
	const primes = util.sieve(n);
	for (let p of primes) {
		if (!(Math.sqrt((n - p) / 2) % 1)) return false;
	}
	return true;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 5777