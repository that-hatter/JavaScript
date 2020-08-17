function main() {
	for (let a = 1; a <= ((1000 - a) / 2); a ++) {
		for (b = a + 1; b <= (1000 - (a + b)); b ++) {
			if (((a * a) + (b * b)) == ((1000 - (a + b)) ** 2)) {
				return a * b * (1000 - a - b);
			}
		}
	}
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 31875000