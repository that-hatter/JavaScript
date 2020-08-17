function main () {
	let set = new Set();
	for (let a = 2n; a <= 100; a++) {
		for (let b = 2n; b <= 100; b++) {
			set.add(a ** b);
		}
	}
	return set.size;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 9183