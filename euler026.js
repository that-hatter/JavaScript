const util = require('./util.js');

function main () {
	let res = 0, max = -Infinity;
	for (let d = 1; d < 1000; d++) {
		if (isRepeating(d) && takeRecur(d) > max) {
			[max, res] = [takeRecur(d), d]
		}
	}
	return res;
}

function takeRecur (num) {
	let mod = 10, modArr = [10], seq = 0;
	while (mod) {
		mod = (mod % num) * 10;
		if (modArr.includes(mod)) {
			for (let i = 0; i <= modArr.length - 1; i++) {
				if (modArr[i] == mod) seq = i;
			}
			for (let cut = 0; cut < seq; cut++) modArr.shift();
			mod = 0;
		}
		if (mod) modArr.push(mod);
	}
	return modArr.length;
}

function isRepeating (num) {
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (!(num % i) && (check(i) || check(num / i))) return true;
	}
	return false;
}

function check (num) {
	return util.isPrime(num) && num != 2 && num != 5;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 983