const util = require('./util.js');

function main () {
	const outer = [6, 10, 9, 8, 7];
	const inners = util.permute([1, 2, 3, 4, 5]);
	for (const arr of inners) {
		const inner = arr.map(Number);
		const sum = outer[0] + inner[0] + inner[1];
		if ((outer[1] + inner[1] + inner[2]) == sum &&
			(outer[2] + inner[2] + inner[3]) == sum &&
			(outer[3] + inner[3] + inner[4]) == sum &&
			(outer[4] + inner[4] + inner[0]) == sum) {
				return Number("" +
					outer[0] + inner[0] + inner[1] +
					outer[1] + inner[1] + inner[2] +
					outer[2] + inner[2] + inner[3] +
					outer[3] + inner[3] + inner[4] +
					outer[4] + inner[4] + inner[0]);
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 6531031914842725