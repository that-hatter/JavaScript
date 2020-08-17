function main () {
	let str = "";
	for (let i = 1; str.length <= 1e6; i ++) str += i;
	return str[9] * str[99] * str[999] * str[9999] * str[99999] * str[999999];
}

console.time("time");
console.timeLog("time", "\nAnswer:", main());
// -> 210