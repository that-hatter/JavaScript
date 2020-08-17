function main () {
	return String(2n ** 1000n).split("").map(Number).reduce((a, b) => a + b);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 1366