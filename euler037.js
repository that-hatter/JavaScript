const util = require('./util.js');

function main () {
	let sum = 0, count = 0;
	for (let i = 11; ; i++) {
		if (isTrunc(String(i)) && isTrunc(String(i), true)) {
			sum += i;
			count++;
			if (count == 11) break;
		}
	}
	return sum;
}

function isTrunc (n, left) {
	if (Number(n) < 10) return util.isPrime(Number(n));
	return util.isPrime(Number(n)) 
		&& (left ? isTrunc(n.slice(0, -1), true) : isTrunc(n.slice(1), false));
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 748317