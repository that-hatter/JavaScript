function main () {
	let total = 0;
	const ceil = findLim(5);
	for (let i = 10; i <= ceil; i++) {
		const sum = String(i).split("").map(Number).reduce((a, b) => a + b ** 5, 0);
		if (sum == i) total += i;
	}
	return total;
}

function findLim (pow) {
	for (let i = 1; ; i++) {
		const lim = i * (9 ** pow);
		if (lim < ((10 ** i) - 1)) return lim;
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 443839