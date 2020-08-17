const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const file = require("./resources/p067_triangle.txt").split("\n");

function main () {
	let rows = {};
	for (let i = 1; i <= 100; i++) {
		rows[i] = file[i - 1].split(" ").map(Number);
	}
	for (let i = 99; i >= 1; i--) rows = compare(i, rows);
	return rows[1][0];
}

function compare (rowNum, rows) {
	const row = rows[rowNum];
	const rowBelow = rows[rowNum + 1];
	for (let i = 0; i < row.length; i++) {
		row[i] += (rowBelow[i] > rowBelow[i + 1]) ? rowBelow[i] : rowBelow[i + 1];
	}
	return rows;
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 7273