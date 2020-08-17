function main () {
	let panProds = new Set();
	for (let i = 1; i < 9876; i++) {
		for (let j = 1; j < i; j++) {
			const prod = i * j;
			const full = "" + i + j + prod;
			if (full.length < 9) continue;
			if (full.length > 9) break;
			if (isPandigital(full)) panProds.add(prod);
		}
	}
	return [...panProds].reduce((a, b) => a + b);
}

function isPandigital (string) {
    const set = new Set(string.split(""));
    return 9 == set.size && !set.has("0");
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 45228