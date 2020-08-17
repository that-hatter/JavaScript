const util = require('./util.js');

function main () {
	for (let i = 13; ; i += 2) {
		if (!util.isPrime(i)) continue;
		const str = String(i);
		if (!str.includes("0") && !str.includes("1")) continue;
		if (hasSevenSet(str, "0") || hasSevenSet(str, "1")) return i;
	}
}

function hasSevenSet (str, re) {
	let count = 0;
	const regex = new RegExp(re, "g");
	for (let i = 1; i < 10; i++) {
		if (i <= Number(re)) continue;
		const char = String(i);
		const newStr = str.replace(regex, char);
		if (util.isPrime(Number(newStr))) count++;
	}
	return 7 == count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 121313