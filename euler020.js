function main () {
	const bigFac = n => n <= 1n ? 1n : n * bigFac(n - 1n);
	return String(bigFac(100n)).split("").map(Number).reduce((a, b) => a + b);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 648