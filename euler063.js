function main () {
	let count = 0;
	for (let i = 1; i <= 100 ; i ++) {
		for (let j = 1; j <= 9; j ++) {
			const p = String(j ** i);
			if (p.length == i) count ++;
			if (p.length > i) break;
		}
	}
	return count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 49