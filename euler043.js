const util = require('./util.js');

function main () {
	let matches = [];
	for (let a = 17; a <= 987; a += 17) {
		let A = String(a).padStart(3, '0').split("").map(Number);
		let set = new Set(A);
		if (set.size != 3) continue;
		for (let b = 13; b <= 987; b += 13) {
			if (!canChain(A, b)) continue;
			let B = [Math.floor(b / 100), ...A];
			for (let c = 143; c <= 987; c += 11) {
				if (!canChain(B, c)) continue;
				let C = [Math.floor(c / 100), ...B];
				for (let d = 14; d <= 987; d += 7) {
					if (!canChain(C, d)) continue;
					let D = [Math.floor(d / 100), ...C];
					for (let e = 15; e <= 987; e += 5) {
						if (!canChain(D, e)) continue;
						let E = [Math.floor(e / 100), ...D];
						for (let f = 12; f <= 987; f += 3) {
							if (!canChain(E, f)) continue;
							let F = [Math.floor(f / 100), ...E];
							for (let g = 12; g <= 987; g += 2) {
								if (!canChain(F, g)) continue;
								let G = [Math.floor(g / 100), ...F];
								let front = 45 - (G).reduce((a, b) => a + b);
								if (front) matches.push((G).reduce((a, b) => a + b, String(front)));
							}
						}
					}
				}
			}
		}
	}
	return matches.reduce((a, b) => a + Number(b), 0);
}

function canChain (digits, next) {
	let front = Math.floor(next / 100);
	return !digits.includes(front) 
		&& String(digits[0]) + digits[1] == next % 100;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 16695334890