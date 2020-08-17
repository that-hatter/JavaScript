function main () {
	let cubes = [];
	for (let i = 100; ; i ++) {
		let matches = [];
		const c = i ** 3;
		const d = String(c).split("");
		const e = Number(d.sort((a, b) => b - a).join(""));
		for (let j = cubes.length - 1; j >= 0; j --) {
			if (e == cubes[j][1]) {
				matches = [...cubes[j][2], cubes[j][0]];
				break;
			} 
		}
		if (matches.length == 4) return matches[0];
		cubes.push([c, e, matches]);
  }
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 127035954683