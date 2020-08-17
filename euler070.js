const util = require('./util.js');

function main () {
	const primes = util.sieve(1e7);
	let minRatio = Infinity, ans;
	for (let i = 0; i < primes.length; i++) {
		if (primes[i] * primes[i + 1] > 1e7) break;
		for (let j = i + 1; j < primes.length; j++) {
			const n = primes[i] * primes[j];
			if (n > 1e7) break;
			const phi = (primes[i] - 1) * (primes[j] - 1);
			const ratio = n / phi;
			if (ratio < minRatio && isSameDigits(n, phi)) {
				minRatio = ratio;
				ans = n;
			}
		}
	}
	return ans;
}

function isSameDigits (a, b) {
	const arrA = String(a).split("").map(Number).sort();
	const arrB = String(b).split("").map(Number).sort();
	if (arrA.length != arrB.length) return false;
	for (let i = 0; i < arrA.length; i++) {
		if (arrA[i] != arrB[i]) return false;
	}
	return true;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 8319823