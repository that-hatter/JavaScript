function main () {
	let total = 0;
	for (let i = 1; i <= 10000; i++) {
		if (factorSum(factorSum(i)) == i && factorSum(i) != i) total += i;
	}
	return total;
}

function factorSum (num) {
	let sum = 0;
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (!(num % i)) {
			if (Math.sqrt(num) != i) sum += (num / i);
			sum += i;
		}
	}
	return sum - num;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 31626