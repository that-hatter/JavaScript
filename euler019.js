function main () {
	let count = 0;
	const start = new Date("January 1, 1901");
	while ((start.getMonth() != 11) || (start.getYear() != 100)) {
		if (!start.getDay()) count++;
		start.setMonth(start.getMonth() + 1);
	}
	return count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 171