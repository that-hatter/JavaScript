const fs = require('fs');
const util = require('./util.js');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const file = (require("./resources/p042_words.txt")).replace(/"/g, '');

function main () {
	let count = 0;
	file.split(",").forEach(word => {
		const val = word.split("").reduce((a, b) => a + b.charCodeAt(0) - 64, 0);
		if (util.isTriangle(val)) count++;
	});
	return count;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 162