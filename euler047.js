const util = require('./util.js');

function main () {
	for (let i = 210; ; i++) {
		if (isHasFour(i) && isHasFour(i + 1)
			&& isHasFour(i + 2) && isHasFour(i + 3)) {
			return i;
		}
	}
}

function factor (num) {
	if (util.isPrime(num)) return [num];
	if (!(num % 2)) return [2, ...factor(num /2 )];
	const rt = Math.sqrt(num);
	for (let i = 3; i <= rt; i += 2) {
		if (!util.isPrime(i)) continue;
		if (!(num % i)) return [i, ...factor(num / i)];
	}
}

function isHasFour (num) {
	const set = new Set(factor(num));
	return set.size == 4;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 134043