function main () {
	let sieve = [], total = 0;
	for (let i = 1; i <= 1e6; i++) sieve[i] = i;
	for (let i = 2; i <= 1e6; i++) {
		if (sieve[i] == i) {
			for (let j = i; j <= 1e6; j += i) {
				sieve[j] = sieve[j] / i * (i - 1);
			}
		}
		total += sieve[i];
	}
	return total;
}


console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 303963552391