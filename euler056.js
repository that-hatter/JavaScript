function main () {	
	let max = 0;
	for (let a = 1n; a < 100; a++) {
		for (let b = 1n; b < 100; b++) {
			const arr = String(a ** b).split("").map(Number);
			const sum = arr.reduce((a, b) => a + b)
			if (sum > max) max = sum;
		}
	}
	return max;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 972