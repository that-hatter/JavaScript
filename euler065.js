function main () {
	let nums = [2n, 3n, 8n];
	for (let i = 3; i < 100; i ++) {
		const mult = ((i + 1) % 3) ? 1n : BigInt(((i + 1) / 3) * 2);
		nums.push(mult * nums[i - 1] + nums[i - 2]);
	}
	const digits = String(nums[99]).split("").map(Number);
	return digits.reduce((a, b) => a + b);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 272