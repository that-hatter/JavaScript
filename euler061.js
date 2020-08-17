function main () {
	let terms = {};
	for (let i = 3; i < 9; i++) {
		terms[i] = [];
		for (let j = 1; ; j++) {
			const term = getTerm(j, i);
			if (term >= 1e4) break;
			if (term > 1e3 && term % 100 >= 10) terms[i].push(term);
		}
	}
	for (const oct of terms[8]) {
		const ans = findChain([oct], terms, [8]);
		if (ans) return ans.reduce((a, b) => a + b);
	}
}

function getTerm (n, b) {
	const sq = n * n;
	if (b == 3) return (sq + n) / 2;
	if (b == 5) return (3 * sq - n) / 2;
	if (b == 6) return 2 * sq - n;
	if (b == 7) return (5 * sq - 3 * n) / 2;
	if (b == 8) return 3 * sq - 2 * n;
	return sq;
}

function findChain(chain, terms, types) {
	const l = chain.length;
	for (let i = 7; i > 2; i--) {
		if (types.includes(i)) continue;
		for (const term of terms[i]) {
			if (!isChainable(chain[l - 1], term)) continue;
			if (l == 5 && isChainable(term, chain[0])) return [...chain, term];
			const ans = findChain([...chain, term], terms, [...types, i]);
			if (ans) return ans;
		}
	}
}

function isChainable (a, b) {
	return a % 100 == Math.floor(b / 100);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 28684