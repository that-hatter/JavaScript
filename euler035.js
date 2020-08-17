const util = require('./util.js');

function main() {
	let count = 0;
	util.sieve(1e6).forEach(prime => {
		const arr = getRotations([String(prime)]).map(Number);
		arr.shift();
		if (arr.every(x => util.isPrime(x))) count++;
	});
	return count;
}

function getRotations (arr, i = 1) {
	const str = arr[arr.length - 1];
	const next = str.slice(1) + str[0];
	return (i >= str.length) ? arr : getRotations([...arr, next], i + 1);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 55