const util = require('./util.js');

function main () {
	const pent = n => (n *(3 * n - 1)) / 2;
	for (let i = 1; ; i++) {
		const pentI = pent(i);
		for (let j = i - 1; j > 0; j--) {
			const pentJ = pent(j);
			const sum = pentI + pentJ;
			const dif = pentI - pentJ;
			if (util.isPentagon(sum) && util.isPentagon(dif)) {
				return dif;
			}
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 5482660