function main () {
	for (let i = 100; ; i++) {
		if (allEq(i)) return i;
	}
}

function allEq (num) {
	let numSet = new Set(String(num).split(""));
	for (let i = 2; i <= 6; i++) {
		let prodSet = new Set(String(num * i).split(""));
		if (!eqSet(numSet, prodSet)) return false;
	}
	return true;
}

function eqSet (as, bs) {
	if (as.size !== bs.size) return false;
	for (let a of as) if (!bs.has(a)) return false;
	return true;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 142857