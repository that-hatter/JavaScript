function main () {
	const below20 = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
	const tens = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6];
	let total = 11;
	for (let num = 1; num <= 99; num++) {
		total += 10 * (num < 20 ? below20[num] 
			: tens[Math.floor(num / 10)] + below20[num % 10]);
	}
	for (let i = 1; i < 10; i++) {
		total += 7 + below20[i] + (below20[i] + 10) * 99;
	};
	return total;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 21124