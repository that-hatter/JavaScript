function main () {
	const ceil = 28123;
	const total = ceil * (ceil + 1) / 2;
	const sums = new Set();
	let abundant = [];
	for (let i = 1; i <= ceil; i++) {
		if (isAbundant(i)) abundant.push(i);
	}
	for (let x = 0; x < abundant.length - 1; x++) {
		for (let y = x; y < abundant.length; y++) {
			const sum = abundant[x] + abundant[y];
			if (sum <= ceil) sums.add(sum);
			else break;
		}
	}
	return total - [...sums].reduce((a, b) => a + b);
}

function isAbundant(num) {
	let sum = 0;
	for (let i = 1; i <= Math.sqrt(num); i ++) {
		if (!(num % i)) {
			if (i != Math.sqrt(num)) sum += (num / i);
			sum += i;
		}
	}
	return sum - num > num;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 4179871