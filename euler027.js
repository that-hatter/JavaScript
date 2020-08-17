const util = require('./util.js');

function main () {
	let max = 0, aMax = 0, bMax = 0;
	for (let a = -1000; a < 1000; a++) {
		for (let b = -1000; b <= 1000; b++) {
			let comp = false, count = 0;
			for (let n = 0; !comp; n++) {
				const res = n * n + n * a + b;
				if (util.isPrime(res)) count++;
				else {
					if (count > max) [max, aMax, bMax] = [count, a, b];
					comp = true;
				}
			}
		}
	}
	return aMax * bMax;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> -59231