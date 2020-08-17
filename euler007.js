const util = require('./util.js');

function main () {
	for (let n = 3, i = 1; ; n += 2) {
		if (util.isPrime(n)) {
			if (i == 1e4) return n;
			i++;
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 104743