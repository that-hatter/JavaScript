const util = require('./util.js');

function main () {
	const lim = 3 / 7;
	let maxRatio = 1 / 1e6, maxN;
	for (let d = 2; d <= 1e6; d++) {
		const minN = Math.ceil(d * maxRatio);
		const start = Math.ceil(lim * d);
		for (let n = start; n >= minN; n--) {
			const r = n / d;
			if (r >= lim) continue;
			if (util.gcd(n, d) == 1) {
				[maxRatio, maxN] = [r, n];
				break;
			}
		}
	}
	return maxN;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 428570