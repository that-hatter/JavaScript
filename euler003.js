function main () {
	let num = 600851475143, max = -Infinity;
	for (let i = 2; i <= num; i++) {
		if (!(num % i)) {
			if (i > max) max = i;
			num /= i;
			i = 2;
		}
	}
	return max;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 6857