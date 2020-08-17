const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const text = (require("./resources/p022_names.txt")).replace(/"/g, '');

function main () {
	const names = (text.split(",")).sort();
	let total = 0;
	for (let i = 1; i <= names.length; i++) {
		const name = (names[i - 1]).toLowerCase();
		let sum = 0;
		for (let j = 0; j < name.length; j++) sum += (name.charCodeAt(j) - 96);
		total += (sum * i);
	}
	return total;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 871198282