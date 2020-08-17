const util = require('./util.js');

function main () {
	const primes = util.sieve(1e4, 1e3);
	for (let p of primes) {
		if (p == 1487) continue;
		const perms = util.permute(p).filter(x => util.isPrime(x));
		for (let i = 1; i <= 9999 - p; i++) {
			const p1 = p + i;
			const p2 = p1 + i;
			if (perms.includes(p1) && perms.includes(p2)) {
				return Number("" + p + p1 + p2);
			}
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 296962999629