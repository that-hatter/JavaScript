function main () {
	let max = 0, maxCount = 0;
	for (let start = 2; start < 1e6; start++) {
		const count = collatzCount(start);
		if (count > maxCount) [max, maxCount] = [start, count];
	}
	return max;
}

function collatzCount (num) {
	let count = 1;
	while (num != 1) {
		num = num % 2 ? num * 3 + 1 : num / 2;
		count ++;
	}
	return count;
}


console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 837799