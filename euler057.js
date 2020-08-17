function main () {
	let count = 0;
	for (let i = 1; i <= 1000; i++) {
		const res = expand(1n, 2n, i);
		const nDigits = String(res.nm);
		const dDigits = String(res.dn);
		if (nDigits.length > dDigits.length) count++;
	}
	return count;
}

function expand (n, d, i) {
	if (i == 1) return {nm: n + d, dn: d};
	const newN = n + d * 2n;
	return expand(d, newN, i - 1);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 153