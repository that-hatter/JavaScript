const util = require('./util.js');

function main () {
	return util.factorial(40) / (util.factorial(20) ** 2);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 137846528820