function main () {
	let maxX = -Infinity, maxD;
	for (let d = 2; d <= 1000; d++) {
		const rt = Math.sqrt(d);
		if (rt % 1 == 0) continue;
		const a0 = Math.floor(rt);
		const terms = contFrac(0, 1, a0, d, [a0]);
		const x = findSolution(BigInt(d), terms);
		if (x > maxX) [maxX, maxD] = [x, d];
	}
	return maxD;
}

function findSolution (D, terms) {
	let a = [terms[0]], m = terms.length - 1;
	for (let i = 1; ; i++) {
		const [x, y] = converge(a); 
		if (x * x - (D * y * y) == 1) return x;
		a.push(terms[(i % m) ? i % m: m]);
	}
}

function converge (arr) {
	let nm = 1n, dn = BigInt(arr[arr.length - 1]);
	for (let i = arr.length - 2; i >= 0; i--) {
		[nm, dn] = [dn, dn * BigInt(arr[i]) + nm];
	}
	return [dn, nm];
}

function contFrac (m, d, a, num, arr) {
	const m_ = d * a - m;
	const d_ = (num - (m_ * m_)) / d;
	const a_ = Math.floor((arr[0] + m_) / d_);
	const newArr =  [...arr, a_];
	return 2 * arr[0] == a_ ? newArr : contFrac(m_, d_, a_, num, newArr);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 661