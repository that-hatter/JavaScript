function main () {
	const N = 999;
	return arithSum(N, 3) + arithSum(N, 5) - arithSum(N, 15);
}

function arithSum (lim, d) {
	const n = Math.floor(lim / d);
	return d * (n ** 2 + n) / 2;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 233168