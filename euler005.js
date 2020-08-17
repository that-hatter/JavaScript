function main () {
	for (let i = 380; ; i += 380) {
		if (isAllDivisible(i)) return i;
	}
}

function isAllDivisible (num) {
	for (let i = 18; i > 10; i--) {
		if (num % i) return false;
	}
	return true; 
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 232792560