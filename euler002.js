function main () {
	let sum = 2, last = 1;
	for (let term = 2; term <= 4e6; ) {
		[term, last] = [term + last, term];
		if (!(term % 2)) sum += term;
	}
	return sum;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 4613732