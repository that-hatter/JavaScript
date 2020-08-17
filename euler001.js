function main () {
	const N = 999;
	return arithSum(N, 3) + arithSum(N, 5) - arithSum(N, 3);
}

function arithSum (lim, d) {
	const n = Math.floor(lim / d);
	return d * (n ** 2 - n) / 2;
}


function alt () {
	let sum = 0;
	for (let i = 3; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) sum += i;
	}
	return sum;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 233168