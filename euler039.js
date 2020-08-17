function main () {
	let maxCount = 0, max = 0;
	for (let p = 3; p <= 1000; p++) {
		let count = 0;
		for (let a = 1; a <= Math.floor(p / 2); a++) {
			for (let b = 1; b <= p - a - 1; b++) {
				if ((p * (a + b) + (a * b)) == (p * p) / 2) count++;
			}
		}
		if (count > maxCount) [max, maxCount] = [p, count];
	}
	return max;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 840