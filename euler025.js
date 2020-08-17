function main () {
	let index = 2;
	for (let f = 1n, _f = 1n; ; index++) {
		if (1000 == String(f).length) return index;
		[f, _f] = [f + _f, f];
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 4782