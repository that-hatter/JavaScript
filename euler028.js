function main () {
	let sum = 1, term = 1, inc = 2;
	while (term != 1002001) {
		for (let i = 1; i <= 4; i++) {
			term += inc;
			sum += term;
		}
		inc += 2;
	}
	return sum;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 669171001