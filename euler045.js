const util = require('./util.js');

function main () {
	for (let n = 144; ; n++) {
		let hex = n * (2 * n - 1);
		if (util.isPentagon(hex) && util.isTriangle(hex)) {
			return hex;
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 1533776805