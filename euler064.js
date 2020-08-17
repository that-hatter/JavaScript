function main () {
	let count = 0;
	for (let i = 1; i <= 10000; i++) {
		const rt = Math.sqrt(i);
		if (rt % 1 != 0) {
			const a0 = Math.floor(rt);
			const array = next(0, 1, a0, i, [a0]);
			if (array.length % 2 == 0) count ++;
		}
	}
	return count;
}

function next (m, d, a, num, arr) {
	const m_ = d * a - m;
	const d_ = (num - (m_ * m_)) / d;
	const a_ = Math.floor((arr[0] + m_) / d_);
	const newArr =  [...arr, a_];
	return 2 * arr[0] == a_ ? newArr : next(m_, d_, a_, num, newArr);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 1322