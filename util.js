module.exports = {
	sieve,
	factorial,
	permute,
	isPrime,
	isPentagon,
	isTriangle,
	isPalindrome,
	gcd
}

function sieve (n, m = 2) {
	let array = [,,true], output = [];
	const upperLimit = Math.sqrt(n);
	for (let i = 3; i < n; i += 2) array[i] = true;
	for (let i = 3; i <= upperLimit; i += 2) {
		if (array[i]) {
			for (let j = i * i; j < n; j += i) array[j] = false;
		}
	}
	for (let i = m; i <= n; i++) {
		if (array[i]) output.push(i);
	}
	return output;
}

function isPrime (n) {
	if ((n < 2) || (!(n % 2) && n != 2)) return false;
	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (!(n % i)) return false;
	}
	return true;
}

function isPentagon (p) {
	return (Math.sqrt((24 * p) + 1)) % 6 == 5;
}

function isTriangle (t) {
	let det = Math.sqrt((8 * t) + 1) - 1;
	return det % 2 == 0 && det > 0;
}

function isPalindrome (value) {
	value += "";
	return value == value.split("").reverse().join("");
}

function factorial (n) {
	return n <= 1 ? 1 : n * factorial(n - 1);
}

function gcd (a, b) {
	return b ? gcd(b, a % b) : a;
}

function permute (value, type) {
	// gives an array of all possible permutations of a given 'value'
	// 'value' can be string, number, or array
	// 'type' is the data type of the returned permutations
	// if 'type' is not given, it will be the same data type as the 'value'
	let num = value;
	if (!type) type = typeof value;
	if (typeof value == 'number') num = value.toString().split("");
	if (typeof value == 'string') num = value.split("");
	let length = num.length,
		result = [num.join("")],
		c = new Array(length).fill(0),
		i = 1, k, p;
	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = num[i];
			num[i] = num[k];
			num[k] = p;
			++c[i];
			i = 1;
			let e = num.slice().join("");
			if (!(result.includes(e))) {
				result.push(e);
			}
		} else {
		c[i] = 0;
		++i;
		}
	}
	if (type == 'number') return result.map(Number);
	if (type == 'object') {
		for (let seq = 0; seq < result.length; seq ++) {
				result[seq] = result[seq].split("");
		}
	}
	return result;
}