function main () {
	let sum = 0n;
	for (let i = 1n; i <= 1000; i++) sum += (i ** i);
	return sum % BigInt(1e10);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 9110846700
