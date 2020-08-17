function main () {
	let max = -Infinity;
	for (let i = 1; i < 1e4; i++) {
		let str = "";
		for (let j = 1; str.length < 9; j++) str += i * j;
		if (str.length == 9) {
			let set = new Set(str.split("").map(Number));
			if (set.size == 9 && !set.has(0) && Number(str) > max) max = Number(str); 
		}
	}
	return max;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 932718654