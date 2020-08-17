let fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

function main () {
	const arr = (require("./resources/p059_cipher.txt")).split(',');
	for (let x = 97; x <= 122; x++) {
		for (let y = 97; y <= 122; y++) {
			for (let z = 97; z <= 122; z++) {
				const res = test([x, y, z], arr);
				if (res.string.includes(" and ")) return res.ascii.reduce((a, b) => a + b);
			}
		}
	}
}

function test (key, arr) {
	let str = "", k = 0, codes = [];
	for (let i = 0; i < arr.length; i ++) {
		const code = Number(arr[i]) ^ key[k];
		str += String.fromCharCode(code);
		k = k == 2 ? 0 : k + 1;
		codes.push(code);
	}
	return {string: str, ascii: codes};
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 129448