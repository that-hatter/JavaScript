function main () {
	let squares = 0, nums = 0;
	for (let i = 1; i <= 100; i++) {
		squares += (i * i);
		nums += i;
	}
	return nums * nums - squares;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 25164150