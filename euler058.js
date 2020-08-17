const util = require('./util.js');

function main () {
	let term = 1, size = 3, primes = 0, all = 1;
	for (let i = 2; ; i += 2, size += 2) {
		for (let j = 1; j <= 4; j++) {
			[term, all] = [term + i, all + 1];
			if (util.isPrime(term)) primes++;
		}
		if ((primes / all) * 100 < 10) return size;
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 26241