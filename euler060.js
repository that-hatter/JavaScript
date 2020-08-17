const util = require('./util.js');

function main () {
	const primes = [3, ...util.sieve(3e4, 6)];
	let pairs = {};
	for (let i = 0; i < primes.length; i ++) {
		pairs[primes[i]] = [];
		for (let j = 0; j < primes.length; j ++) {
			if (isConcat(primes[i], primes[j])) pairs[primes[i]].push(primes[j]);
		}
	}
	for (let prime of primes) {
		if (!pairs[prime] || !pairs[prime].length) continue;
		const ans = findChain([prime], pairs);
		if (ans) return ans.reduce((a, b) => a + b);
	}
}

function findChain (chain, pairs) {
	const list = pairs[chain[chain.length - 1]];
	for (let prime of list) {
		if (chain.includes(prime)) continue;
		if (!pairs[prime] || pairs[prime].length == 0) continue;
		if (chain.every(i => pairs[prime].includes(i)))
			return chain.length == 4 ? [...chain, prime] : findChain([...chain, prime], pairs);
	}
}

function isConcat (a, b) {
	const conc1 = Number(a + "" + b);
	const conc2 = Number(b + "" + a);
	return conc1 < 1e8 && conc2 < 1e8 && util.isPrime(conc1) && util.isPrime(conc2);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 26033