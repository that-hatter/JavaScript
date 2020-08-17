const util = require('./util.js');

function main () {
	let count = 0;
	for (let i = 1; i < 10000; i++) {
		if (isLychrel(i)) count++;
	}
	return count;
}

function isLychrel (num, i = 1) {
	const next = num + Number(String(num).split("").reverse().join(""));
	if (util.isPalindrome(next)) return false;
	return i == 49 ? true : isLychrel(next, i + 1);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 249