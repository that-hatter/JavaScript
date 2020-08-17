function main() {
	for (let n = 1; ; n++) {
		const term = (n * n + n) / 2;
		if (countFactors(term) > 500) return term;
	}
}

function countFactors (num) {
	const rt = Math.sqrt(num);
	let count = rt % 1 ? 2 : 3;
	for (let i = 3; i < rt; i++) {
		if (!(num % i)) count += 2;
	}
	return count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 76576500