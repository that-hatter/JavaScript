const util = require('./util.js');

function main () {
	const primes = util.sieve(5e5);
	const l = primes.length;
	let max = 1, ans;
	for (let i = 0; i < l - 1; i++) {
		if (l - i - 1 < max) break;
		let sum = primes[i];
		for (let j = i + 1; j < l; j++) {
			sum += primes[j];
			if (sum > 1e6) break;
			if (util.isPrime(sum) && j - i > max) [max, ans] = [j - i, sum];
		}
	}
	return ans;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 997651