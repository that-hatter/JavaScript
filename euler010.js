const util = require('./util.js');

function main () {
	return util.sieve(2e6).reduce((a, b) => a + b);
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 142913828922